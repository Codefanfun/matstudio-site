import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-mat-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-mat-blue to-mat-cyan p-10 text-mat-black sm:p-16"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Let’s make something moving.</h2>
            <p className="mt-4 text-lg font-medium opacity-80">
              Tell us what you’re building. We’ll bring the craft.
            </p>
            <a
              href="mailto:hello@matstudio.example"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mat-black px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <Mail size={18} />
              hello@matstudio.example
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-bold text-white">MATstudio</p>
            <p className="mt-1 text-sm text-white/40">© {new Date().getFullYear()} MATstudio. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Remote-first, Earth
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} />
              +1 (555) 000-0000
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
