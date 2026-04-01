import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface ImageComparisonSliderProps {
  oldImage: string;
  newImage: string;
}

export default function ImageComparisonSlider({ oldImage, newImage }: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* New Image (Right side) */}
      <div className="absolute inset-0">
        <img
          src={newImage}
          alt="New"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Old Image (Left side) with clip */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={oldImage}
          alt="Old"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[var(--heritage-gold)] shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--heritage-gold)] rounded-full shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border-4 border-[var(--heritage-stone-dark)]">
          <MoveHorizontal className="w-6 h-6 text-[var(--heritage-stone-dark)]" />
        </div>
      </div>
    </div>
  );
}
