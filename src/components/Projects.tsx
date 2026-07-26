import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const frames = [
  {
    title: "Meet the Professor",
    category: "Character intro",
    image: "/matstudio-site/frames/frame-1.jpg",
    description:
      "The wise Professor Owlpin sees beyond the obvious — a gentle guide with a head full of books and heart full of courage.",
  },
  {
    title: "The Offer You Can’t Refuse",
    category: "Story moment",
    image: "/matstudio-site/frames/frame-2.jpg",
    description:
      "A mysterious feline syndicate steps from the shadows. Power, charm, and danger all share the same velvet paw.",
  },
  {
    title: "Storm on the Horizon",
    category: "Adventure beat",
    image: "/matstudio-site/frames/frame-3.jpg",
    description:
      "Lalo and his friends brave churning seas and thundering skies — the moment a hero learns what he’s willing to risk.",
  },
  {
    title: "The Adventure Begins",
    category: "Final shot",
    image: "/matstudio-site/frames/frame-4.jpg",
    description:
      "The full cast stands together: a dreamer, a rebel, a scholar, and friends who prove that magic is better shared.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 1, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Projects() {
  return (
    <section id="work" className="relative bg-mat-black px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mat-cyan sm:text-sm">Selected work</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Frames from Lalo’s world
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Four favorite moments from our feature project — each one a doorway into the adventure.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4"
        >
          {frames.map((frame) => (
            <motion.article
              key={frame.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-mat-night ring-1 ring-white/5 transition-shadow hover:ring-white/20 sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={frame.image}
                  alt={frame.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mat-black/60 via-transparent to-transparent" />
                <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-9 sm:w-9">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40 sm:text-xs">
                  {frame.category}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">{frame.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{frame.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
