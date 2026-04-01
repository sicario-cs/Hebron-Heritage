import { motion } from "motion/react";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("map");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950 z-10" />
      
      {/* Simulated Video Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1764724215501-ab2d980a4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWlkZGxlJTIwZWFzdGVybiUyMGFyY2hpdGVjdHVyZSUyMHN0b25lJTIwY2l0eXxlbnwxfHx8fDE3NzQ4NjQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080')",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764724215501-ab2d980a4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWlkZGxlJTIwZWFzdGVybiUyMGFyY2hpdGVjdHVyZSUyMHN0b25lJTIwY2l0eXxlbnwxfHx8fDE3NzQ4NjQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6 max-w-4xl"
        >
          {/* Arabic Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-amber-500 text-6xl mb-4"
          >
            ✦
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Where History Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              the Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto"
          >
            Experience the Old City of Hebron transformed into a smart heritage
            destination, where ancient stones whisper stories through modern
            technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToNext}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/50"
            >
              Explore the Old City
              <ArrowDown className="ml-2" size={20} />
            </Button>

            <Button
              variant="outline"
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-6 text-lg rounded-full"
            >
              <Play className="mr-2" size={20} />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToNext}
          >
            <span className="text-stone-400 text-sm">Scroll to Explore</span>
            <ArrowDown className="text-amber-500" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
