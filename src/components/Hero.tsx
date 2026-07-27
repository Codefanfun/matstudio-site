import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Starfield } from "./Starfield";

const backgroundVariants = {
  initial: { scale: 1.05 },
  animate: {
    scale: 1,
    transition: { duration: 12, ease: "linear" as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
      {/* Pixar-style cinematic header image with Ken Burns motion */}
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/matstudio-site/LALO_Header.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mat-black/70 via-mat-black/30 to-mat-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-mat-black/60 via-transparent to-mat-black/60" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Starfield />
      </div>

      {/* Subtle floating glows to keep Pixar dreaminess */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-mat-blue/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-[15%] right-[10%] h-80 w-80 rounded-full bg-mat-cyan/20 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mat-cyan sm:text-sm"
        >
          Animated Feature Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Creating the Life
          <br />
          <span className="gradient-text">You Imagine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-lg md:text-xl"
        >
          MATstudio crafts cinematic animated worlds where every frame is a step
          toward the story you were meant to see.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#feature-project"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-mat-black shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
          >
            <Play size={16} fill="currentColor" />
            Watch trailer
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10 active:bg-white/15"
          >
            Explore our work
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#feature-project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 sm:bottom-8"
      >
        <ArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
}
