import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, X, Image as ImageIcon, Clock, Camera } from "lucide-react";
import { Button } from "./ui/button";

interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
  history: string;
  pastImage: string;
  presentImage: string;
  era: string;
}

export default function InteractiveMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [showPast, setShowPast] = useState(false);

  const locations: Location[] = [
    {
      id: "1",
      name: "Al-Ibrahimi Mosque",
      x: 45,
      y: 35,
      history:
        "A sacred site dating back to the 14th century, showcasing Mamluk architecture and religious significance. Now equipped with smart visitor management and AR historical recreations.",
      pastImage:
        "https://images.unsplash.com/photo-1764724215501-ab2d980a4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWlkZGxlJTIwZWFzdGVybiUyMGFyY2hpdGVjdHVyZSUyMHN0b25lJTIwY2l0eXxlbnwxfHx8fDE3NzQ4NjQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      presentImage:
        "https://images.unsplash.com/photo-1767793357672-f5c97c7c18f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMG1pZGRsZSUyMGVhc3Rlcm4lMjBidWlsZGluZyUyMGlsbHVtaW5hdGVkJTIwbmlnaHR8ZW58MXx8fHwxNzc0ODY0ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      era: "14th Century",
    },
    {
      id: "2",
      name: "Old Market Square",
      x: 60,
      y: 50,
      history:
        "The historic heart of Hebron's trade, where merchants have gathered for centuries. Now transformed into a smart marketplace with digital payment systems and AR product showcases.",
      pastImage:
        "https://images.unsplash.com/photo-1771033311776-fbfcc6274176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjaXR5JTIwYWVyaWFsJTIwdmlldyUyMGhpc3RvcmljfGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      presentImage:
        "https://images.unsplash.com/photo-1764724215501-ab2d980a4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWlkZGxlJTIwZWFzdGVybiUyMGFyY2hpdGVjdHVyZSUyMHN0b25lJTIwY2l0eXxlbnwxfHx8fDE3NzQ4NjQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      era: "10th Century",
    },
    {
      id: "3",
      name: "Heritage Ceramics Workshop",
      x: 30,
      y: 60,
      history:
        "Traditional pottery workshops preserving ancient techniques. Enhanced with virtual tours and interactive demonstrations for global audiences.",
      pastImage:
        "https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFyYWJpYyUyMGNlcmFtaWNzJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc3NDg2NDg3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      presentImage:
        "https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFyYWJpYyUyMGNlcmFtaWNzJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc3NDg2NDg3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      era: "Ancient Tradition",
    },
    {
      id: "4",
      name: "Glass Artisan Quarter",
      x: 70,
      y: 30,
      history:
        "Famous for centuries-old glass-blowing techniques. Now features live-streaming workshops and IoT-enabled kilns for optimal craftsmanship.",
      pastImage:
        "https://images.unsplash.com/photo-1764774089008-e0f32cbe86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG93biUyMGdsYXNzJTIwYXJ0aXNhbiUyMGNyYWZ0fGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      presentImage:
        "https://images.unsplash.com/photo-1764774089008-e0f32cbe86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG93biUyMGdsYXNzJTIwYXJ0aXNhbiUyMGNyYWZ0fGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      era: "18th Century",
    },
  ];

  return (
    <section
      id="map"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-stone-950 to-stone-900"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Interactive Map
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Click on any location to discover its rich history and transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto aspect-video bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20"
        >
          {/* Map Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1771033311776-fbfcc6274176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjaXR5JTIwYWVyaWFsJTIwdmlldyUyMGhpc3RvcmljfGVufDF8fHx8MTc3NDg2NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080')",
            }}
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(251, 191, 36, 0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Location Pins */}
          {locations.map((location, index) => (
            <motion.button
              key={location.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedLocation(location)}
              className="absolute group"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl"
              />
              <div className="relative bg-amber-500 rounded-full p-3 shadow-lg shadow-amber-500/50">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {location.name}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Location Details Popup */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedLocation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-stone-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-900/30"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute top-4 right-4 z-10 bg-stone-950/80 hover:bg-stone-950 text-white rounded-full p-2 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  {/* Image Toggle */}
                  <div className="relative h-64 md:h-96">
                    <img
                      src={showPast ? selectedLocation.pastImage : selectedLocation.presentImage}
                      alt={selectedLocation.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <Button
                        onClick={() => setShowPast(false)}
                        className={`${
                          !showPast
                            ? "bg-amber-500 hover:bg-amber-600"
                            : "bg-stone-800 hover:bg-stone-700"
                        }`}
                      >
                        <Camera className="mr-2" size={16} />
                        Present
                      </Button>
                      <Button
                        onClick={() => setShowPast(true)}
                        className={`${
                          showPast
                            ? "bg-amber-500 hover:bg-amber-600"
                            : "bg-stone-800 hover:bg-stone-700"
                        }`}
                      >
                        <ImageIcon className="mr-2" size={16} />
                        Past
                      </Button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white">
                        {selectedLocation.name}
                      </h3>
                      <div className="flex items-center gap-2 text-amber-500">
                        <Clock size={20} />
                        <span>{selectedLocation.era}</span>
                      </div>
                    </div>

                    <p className="text-stone-300 text-lg mb-6">
                      {selectedLocation.history}
                    </p>

                    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      View AR Experience
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
