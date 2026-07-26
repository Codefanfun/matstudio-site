import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Starfield } from "./Starfield";

export function Hero() {
  return (
    <section className="mesh-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Starfield />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-mat-blue/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-[15%] right-[10%] h-80 w-80 rounded-full bg-mat-cyan/20 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-mat-cyan"
        >
          Animation & Story Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Crafting worlds
          <br />
          <span className="gradient-text">frame by frame</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          MATstudio is a creative studio built for bold stories, cinematic animation,
          and design systems that move people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-mat-black transition-transform hover:scale-105"
          >
            Explore our work
          </a>
          <a
            href="#studio"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Meet the studio
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
}
