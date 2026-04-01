import { useState } from "react";
import { motion } from "motion/react";
import { Glasses, ChevronRight, ChevronLeft, Maximize2, Move } from "lucide-react";
import { Button } from "./ui/button";

export default function VRTourSection() {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      id: 0,
      name: "Old Market Entrance",
      image:
        "https://images.unsplash.com/photo-1764724215501-ab2d980a4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWlkZGxlJTIwZWFzdGVybiUyMGFyY2hpdGVjdHVyZSUyMHN0b25lJTIwY2l0eXxlbnwxfHx8fDE3NzQ4NjQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Begin your journey at the historic entrance",
      hotspots: [
        { x: 30, y: 40, label: "Glass Workshop" },
        { x: 70, y: 50, label: "Ceramics Shop" },
      ],
    },
    {
      id: 1,
      name: "Artisan Quarter",
      image:
        "https://images.unsplash.com/photo-1771033311776-fbfcc6274176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjaXR5JTIwYWVyaWFsJTIwdmlldyUyMGhpc3RvcmljfGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Explore traditional workshops and crafts",
      hotspots: [
        { x: 40, y: 60, label: "Pottery Studio" },
        { x: 60, y: 35, label: "Textile Gallery" },
      ],
    },
    {
      id: 2,
      name: "Heritage Plaza",
      image:
        "https://images.unsplash.com/photo-1767793357672-f5c97c7c18f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMG1pZGRsZSUyMGVhc3Rlcm4lMjBidWlsZGluZyUyMGlsbHVtaW5hdGVkJTIwbmlnaHR8ZW58MXx8fHwxNzc0ODY0ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Central gathering place with stunning architecture",
      hotspots: [
        { x: 50, y: 45, label: "Historic Monument" },
        { x: 25, y: 70, label: "Info Center" },
      ],
    },
  ];

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  return (
    <section
      id="vr"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl">
              <Glasses className="text-white" size={48} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Virtual Reality{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Tour
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Immerse yourself in a 360° journey through the Old City from anywhere in the world
          </p>
        </motion.div>

        {/* VR Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto mb-12"
        >
          {/* Main VR Display */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <motion.img
              key={currentScene}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={scenes[currentScene].image}
              alt={scenes[currentScene].name}
              className="w-full h-full object-cover"
            />

            {/* VR Grid Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <pattern
                  id="vr-grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="25" cy="25" r="1" fill="#a855f7" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#vr-grid)" />
              </svg>
            </div>

            {/* VR UI Overlay */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-stone-950/80 backdrop-blur-md border border-purple-500/30 rounded-xl px-4 py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium">
                    VR Mode Active
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-stone-950/80 backdrop-blur-md border border-purple-500/30 rounded-xl px-4 py-2"
              >
                <span className="text-purple-400 text-sm font-medium">
                  360° View
                </span>
              </motion.div>
            </div>

            {/* Interactive Hotspots */}
            {scenes[currentScene].hotspots.map((hotspot, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.3 }}
                className="absolute group"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute -inset-6 bg-purple-500/30 rounded-full blur-xl"
                />
                <div className="relative w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Move className="text-white" size={16} />
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-stone-950/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {hotspot.label}
                </div>
              </motion.button>
            ))}

            {/* Scene Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-6 right-6 bg-stone-950/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {scenes[currentScene].name}
                  </h3>
                  <p className="text-stone-400 text-sm">
                    {scenes[currentScene].description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-purple-400 text-sm">
                  <span>
                    {currentScene + 1} / {scenes.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevScene}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-stone-950/80 hover:bg-stone-950 backdrop-blur-sm border border-purple-500/30 rounded-full p-3 transition-colors group"
            >
              <ChevronLeft className="text-white group-hover:text-purple-400" size={24} />
            </button>

            <button
              onClick={nextScene}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-950/80 hover:bg-stone-950 backdrop-blur-sm border border-purple-500/30 rounded-full p-3 transition-colors group"
            >
              <ChevronRight className="text-white group-hover:text-purple-400" size={24} />
            </button>

            {/* Fullscreen Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 bg-stone-950/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-3 hover:bg-purple-500/20 transition-colors"
            >
              <Maximize2 className="text-white" size={20} />
            </motion.button>
          </div>

          {/* Corner Decorations */}
          {[
            { top: -3, left: -3 },
            { top: -3, right: -3 },
            { bottom: -3, left: -3 },
            { bottom: -3, right: -3 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="absolute w-12 h-12 border-4 border-purple-500"
              style={pos}
            />
          ))}
        </motion.div>

        {/* Scene Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 justify-center mb-12 overflow-x-auto pb-4"
        >
          {scenes.map((scene, index) => (
            <motion.button
              key={scene.id}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setCurrentScene(index)}
              className={`relative shrink-0 w-32 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentScene === index
                  ? "border-purple-500 shadow-lg shadow-purple-500/50"
                  : "border-stone-700 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={scene.image}
                alt={scene.name}
                className="w-full h-full object-cover"
              />
              {currentScene === index && (
                <motion.div
                  layoutId="scene-indicator"
                  className="absolute inset-0 border-2 border-purple-500"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🎮",
              title: "Interactive Controls",
              description: "Navigate freely with intuitive VR controls",
            },
            {
              icon: "🎯",
              title: "Guided Tours",
              description: "Follow curated paths with expert narration",
            },
            {
              icon: "📱",
              title: "Multi-Platform",
              description: "Works on VR headsets, desktop, and mobile",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-stone-800/50 border border-purple-900/30 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-white font-bold text-lg mb-2">
                {feature.title}
              </h4>
              <p className="text-stone-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50">
            <Glasses className="mr-2" size={20} />
            Start VR Experience
          </Button>
          <p className="text-stone-500 text-sm mt-4">
            Experience available in WebVR, Oculus, and HTC Vive
          </p>
        </motion.div>
      </div>
    </section>
  );
}
