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
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">15+</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Total Team</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">13</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Theater plays</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">27</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Screenplays</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">100+</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">Live shows</p>
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
            <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.3rem] bg-white text-center">
              <div className="h-[80%] w-full overflow-hidden rounded-t-[2.3rem]">
                <img
                  src="/matstudio-site/MATStudioLogo.jpeg"
                  alt="MATstudio emblem"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 items-center justify-center px-6">
                <p className="text-base italic leading-snug text-mat-black/80 sm:text-lg">
                  “Animation is not about moving things. It’s about giving them a soul.”
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
