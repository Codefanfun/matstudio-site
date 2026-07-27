import { motion, useInView } from "framer-motion";
import { Sparkles, Volume2, VolumeX } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function FeatureProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const isInView = useInView(sectionRef, { amount: 0.45, margin: "-80px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay may be blocked by browser policy; show poster until user interacts.
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  const unmute = () => {
    const video = videoRef.current;
    if (!video) return;
    setMuted(false);
    video.muted = false;
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    setMuted(next);
    video.muted = next;
  };

  const handleVolumeChange = () => {
    const video = videoRef.current;
    if (!video) return;
    setMuted(video.muted);
  };

  return (
    <section
      id="feature-project"
      ref={sectionRef}
      className="relative bg-mat-black px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end"
        >
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mat-cyan sm:text-sm">
              <Sparkles size={14} />
              Now previewing
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Feature project
            </h2>
            <p className="mt-2 max-w-xl text-base text-white/60 sm:text-lg">
              The Adventure of Lalo in the Magical Forest — our latest animated
              feature about courage, friendship, and the worlds we have yet to imagine.
            </p>
          </div>
          <span className="rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/60 ring-1 ring-white/10">
            Feature film
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-mat-night shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:rounded-3xl"
          onClick={unmute}
        >
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              src="/matstudio-site/LALO_Trailer1.mp4"
              muted={muted}
              autoPlay
              playsInline
              controls
              onVolumeChange={handleVolumeChange}
              className="absolute inset-0 h-full w-full object-cover"
              preload="metadata"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/80 sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm"
              aria-label={muted ? "Unmute trailer" : "Mute trailer"}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span className="hidden sm:inline">{muted ? "Unmute" : "Sound on"}</span>
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-mat-black/90 via-mat-black/40 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50 sm:text-sm">
              Trailer
            </p>
            <p className="mt-1 text-lg font-bold text-white sm:text-xl">
              The Adventure of Lalo in the Magical Forest
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
