import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-mat-black px-4 py-20 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-mat-blue to-mat-cyan p-8 text-mat-black sm:rounded-[2.5rem] sm:p-12 lg:p-16"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold sm:text-4xl md:text-5xl">Let’s make something moving.</h2>
            <p className="mt-4 text-base font-medium opacity-80 sm:text-lg">
              Tell us what you’re building. We’ll bring the craft.
            </p>
            <a
              href="mailto:hello@matstudio.example"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mat-black px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 sm:px-8 sm:py-4"
            >
              <Mail size={18} />
              hello@matstudio.example
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:gap-8 sm:pt-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">MATstudio</p>
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
