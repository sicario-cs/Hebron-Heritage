import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

type HouseModelViewerProps = {
  modelUrl: string;
  className?: string;
};

function disposeObject3D(object: THREE.Object3D) {
  object.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      child.geometry?.dispose();
      const mat = child.material;
      if (Array.isArray(mat)) {
        mat.forEach((m) => m.dispose());
      } else {
        mat?.dispose();
      }
    }
  });
}

export default function HouseModelViewer({ modelUrl, className = '' }: HouseModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    const container = containerRef.current;
    if (!container) return;

    let mounted = true;
    let frameId = 0;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    } catch {
      setError('WebGL is not available in this browser.');
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0806);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 5000);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(0xfff4e0, 1.1);
    key.position.set(8, 14, 10);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xb8c4ff, 0.35);
    fill.position.set(-6, 4, -4);
    scene.add(fill);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0.2;
    controls.maxDistance = 80;

    const resize = () => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const loader = new GLTFLoader();
    let modelRoot: THREE.Group | null = null;

    loader.load(
      modelUrl,
      (gltf: GLTF) => {
        if (!mounted) return;
        modelRoot = gltf.scene;
        scene.add(modelRoot);

        const box = new THREE.Box3().setFromObject(modelRoot);
        const center = box.getCenter(new THREE.Vector3());
        modelRoot.position.sub(center);

        const box2 = new THREE.Box3().setFromObject(modelRoot);
        const size = box2.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z, 0.001);
        const dist = maxDim * 2.2;
        camera.position.set(dist * 0.65, dist * 0.45, dist * 0.75);
        camera.near = maxDim / 1000;
        camera.far = maxDim * 100;
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        controls.update();
      },
      undefined,
      () => {
        if (mounted) setError('Could not load the 3D model.');
      },
    );

    const animate = () => {
      if (!mounted) return;
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mounted = false;
      cancelAnimationFrame(frameId);
      ro.disconnect();
      controls.dispose();
      if (modelRoot) {
        disposeObject3D(modelRoot);
        scene.remove(modelRoot);
      }
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, [modelUrl]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className="h-[min(70vh,560px)] min-h-[280px] w-full rounded-lg border border-[var(--heritage-gold)]/30 bg-[#0a0806]"
        role="img"
        aria-label="Interactive 3D house model. Drag to rotate, scroll to zoom."
      />
      {error ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-[var(--heritage-stone-dark)]/92 px-4 text-center text-sm text-[var(--heritage-stone)]">
          {error}
        </div>
      ) : null}
    </div>
  );
}
