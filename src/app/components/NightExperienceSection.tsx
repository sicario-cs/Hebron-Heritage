import { motion } from "motion/react";
import { Moon, Music, Calendar, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function NightExperienceSection() {
  const events = [
    {
      icon: Music,
      title: "Traditional Music Nights",
      time: "Every Friday, 8:00 PM",
      description: "Live performances under the stars in the Old Market Square",
    },
    {
      icon: Sparkles,
      title: "Light & Sound Show",
      time: "Daily, 9:00 PM",
      description: "Architectural illumination showcasing heritage buildings",
    },
    {
      icon: Calendar,
      title: "Cultural Festivals",
      time: "Monthly Events",
      description: "Celebrating traditions with modern smart city integration",
    },
  ];

  return (
    <section
      id="night"
      className="min-h-screen py-20 px-4 bg-stone-950 relative overflow-hidden"
    >
      {/* Starry Background Effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              opacity: [null, Math.random(), null],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
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
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl">
              <Moon className="text-white" size={48} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Night{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Experience
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            When the sun sets, the Old City transforms into a magical illuminated wonderland
          </p>
        </motion.div>

        {/* Main Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden"
        >
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1767793357672-f5c97c7c18f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMG1pZGRsZSUyMGVhc3Rlcm4lMjBidWlsZGluZyUyMGlsbHVtaW5hdGVkJTIwbmlnaHR8ZW58MXx8fHwxNzc0ODY0ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Night illumination"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

            {/* Animated Light Beams */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-radial from-amber-500/20 via-transparent to-transparent"
            />

            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-8 left-8 bg-stone-950/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                <div>
                  <div className="text-white font-bold text-sm">Smart Lighting</div>
                  <div className="text-stone-400 text-xs">Energy Efficient</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-8 right-8 bg-stone-950/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <div>
                  <div className="text-white font-bold text-sm">Dynamic Colors</div>
                  <div className="text-stone-400 text-xs">Adaptive System</div>
                </div>
              </div>
            </motion.div>

            {/* Temperature Display */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-8 left-8 bg-stone-950/80 backdrop-blur-md border border-blue-500/30 rounded-xl px-6 py-3"
            >
              <div className="text-blue-400 text-2xl font-bold">22°C</div>
              <div className="text-stone-400 text-xs">Perfect Evening</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-stone-800/50 to-stone-900/50 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl w-fit mb-4">
                <event.icon className="text-white" size={28} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {event.title}
              </h3>
              <div className="text-amber-500 text-sm font-medium mb-3">
                {event.time}
              </div>
              <p className="text-stone-400 text-sm">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-stone-900/50 to-stone-800/50 border border-amber-900/20 rounded-2xl p-8 md:p-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Intelligent Lighting System
            </h3>
            <p className="text-stone-400 mb-6">
              Our smart lighting adapts to cultural events, festivals, and weather conditions,
              creating the perfect ambiance while preserving the architectural heritage.
              Energy-efficient LED systems reduce consumption by 60% while illuminating history.
            </p>
            <ul className="space-y-3">
              {[
                "Adaptive color temperature",
                "Motion-activated pathways",
                "Cultural event synchronization",
                "Historical architecture highlighting",
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-stone-300"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-64 h-64"
            >
              {/* Circular Visualization */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-500/30" />
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-purple-500/30" />
              <div className="absolute inset-8 rounded-full border-4 border-dashed border-blue-500/30" />
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gradient-to-br from-amber-500 to-purple-600 rounded-full p-8">
                  <Sparkles className="text-white" size={64} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50">
            <Calendar className="mr-2" size={20} />
            View Event Calendar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
