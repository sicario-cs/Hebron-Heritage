import { motion } from "motion/react";
import { Smartphone, Scan, Eye, Layers } from "lucide-react";
import { Button } from "./ui/button";

export default function ARExperienceSection() {
  const features = [
    {
      icon: Scan,
      title: "Point & Discover",
      description: "Scan historical sites to reveal their past glory through AR overlays",
    },
    {
      icon: Eye,
      title: "Time Travel Vision",
      description: "See ancient structures as they appeared centuries ago",
    },
    {
      icon: Layers,
      title: "Interactive Layers",
      description: "Toggle between different historical periods and architectural styles",
    },
  ];

  return (
    <section
      id="ar"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-amber-500/30 rounded-lg"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: [null, Math.random() * 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
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
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-4 rounded-2xl">
              <Smartphone className="text-white" size={48} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Augmented Reality{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Experience
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Step into the past with cutting-edge AR technology that brings history to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* AR Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-amber-500/30 shadow-2xl shadow-amber-500/20">
              <img
                src="https://images.unsplash.com/photo-1687389806477-22be64a5480f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwaG9sb2dyYW0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDg2NDg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AR Experience"
                className="w-full h-[400px] object-cover"
              />

              {/* Floating AR UI Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-8 left-8 bg-stone-950/80 backdrop-blur-sm border border-amber-500/50 rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white text-sm">AR Active</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute bottom-8 right-8 bg-amber-500/20 backdrop-blur-sm border border-amber-500/50 rounded-lg p-3"
              >
                <div className="text-amber-400 text-sm">
                  <div className="font-bold">14th Century</div>
                  <div>Historical Era Detected</div>
                </div>
              </motion.div>

              {/* Scanning Effect */}
              <motion.div
                animate={{
                  y: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              />
            </div>

            {/* Corner Decorations */}
            {[
              { top: -2, left: -2 },
              { top: -2, right: -2 },
              { bottom: -2, left: -2 },
              { bottom: -2, right: -2 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="absolute w-8 h-8 border-4 border-amber-500"
                style={pos}
              />
            ))}
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="bg-stone-800/50 border border-amber-900/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-lg shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/50">
            <Smartphone className="mr-2" size={20} />
            Launch AR Experience
          </Button>
          <p className="text-stone-500 text-sm mt-4">
            Available on iOS and Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
