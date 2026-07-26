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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-mat-blue to-mat-cyan p-8 text-mat-black sm:rounded-[2.5rem] sm:p-12 lg:p-16"
        >
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-4xl md:text-5xl">Let’s make something moving.</h2>
              <p className="mt-4 text-base font-medium opacity-80 sm:text-lg">
                Share your vision with us. We’ll bring it to life.
              </p>
              <a
                href="mailto:mat.studio365@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-mat-black px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 sm:px-8 sm:py-4"
              >
                <Mail size={18} />
                mat.studio365@gmail.com
              </a>
            </div>
            <div className="rounded-2xl bg-mat-black/10 p-6 backdrop-blur-sm ring-1 ring-mat-black/10">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-60">Production credits</p>
              <ul className="mt-4 space-y-2 text-sm font-medium sm:text-base">
                <li>Screenwriter & Creative Director: <span className="font-bold">Rafael Milo Amar</span></li>
                <li>Art Director: <span className="font-bold">Israel Amar</span></li>
                <li>Animation Director: <span className="font-bold">Sharon Amar</span></li>
                <li>Executive Producer & Sales: <span className="font-bold">Sraia Tal</span></li>
              </ul>
            </div>
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
              Tel-Aviv, Israel
            </span>
            <a
              href="tel:+972545303649"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={16} />
              +972-54-5303649
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
