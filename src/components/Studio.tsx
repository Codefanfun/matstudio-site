import { motion } from "framer-motion";

export function Studio() {
  return (
    <section id="studio" className="relative overflow-hidden bg-mat-night px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 1, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-mat-cyan">The studio</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            We believe every pixel should earn its place in the story.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            MATstudio is a small team of directors, designers, and developers who turn
            ideas into cinematic digital experiences. From the first sketch to the final
            render, we chase clarity, emotion, and a little bit of wonder.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8">
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">12+</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Projects shipped</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">6</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Awards earned</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">3</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Continents reached</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-[2.5rem] bg-gradient-to-tr from-mat-blue/30 via-mat-cyan/20 to-mat-amber/20 p-1">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.3rem] bg-mat-black/80 p-8 text-center backdrop-blur-sm">
              <span className="font-display text-7xl font-black text-white/10">MS</span>
              <p className="mt-4 text-xl italic text-white/70">
                “Animation is not about moving things. It’s about giving them a soul.”
              </p>
              <p className="mt-4 text-sm font-semibold text-white/40">— MATstudio manifesto</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
