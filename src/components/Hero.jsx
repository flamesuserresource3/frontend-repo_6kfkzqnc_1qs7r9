import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient & vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_20%,rgba(239,68,68,0.20)_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(255,0,0,0.15)]">
            VERSA
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-200/90">
            A 3D online multiplayer shooter forged in a glossy, fluid arena. Dive into
            fast tactical combat with a sleek, futuristic aesthetic.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#game" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 via-rose-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(244,63,94,0.35)] hover:shadow-[0_14px_40px_rgba(244,63,94,0.45)] transition-shadow">
              Explore The Game
            </a>
            <a href="#shop" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md hover:bg-white/10 transition-colors">
              Visit Shop
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
