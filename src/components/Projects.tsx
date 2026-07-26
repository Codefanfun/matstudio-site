import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Last Lightkeeper",
    category: "Animated Short",
    color: "from-amber-500 to-rose-500",
    description:
      "A luminous tale about a lighthouse keeper teaching the stars how to navigate.",
  },
  {
    title: "Paper Planets",
    category: "Brand Film",
    color: "from-cyan-500 to-blue-600",
    description:
      "Hand-folded worlds brought to life for a global sustainability campaign.",
  },
  {
    title: "Bento & Bolt",
    category: "Series Concept",
    color: "from-violet-500 to-fuchsia-500",
    description:
      "Two unlikely inventors build impossible machines in a floating kitchen lab.",
  },
  {
    title: "Neon Roots",
    category: "Interactive Installation",
    color: "from-emerald-400 to-teal-600",
    description:
      "A generative forest that responds to music, premiered at SXSW.",
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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Projects() {
  return (
    <section id="work" className="relative bg-mat-black px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-mat-cyan">Selected work</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Stories worth seeing
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Four recent projects that blend animation, design, and a little bit of magic.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-mat-night ring-1 ring-white/5 transition-shadow hover:ring-white/20"
            >
              <div className={`relative h-56 bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
