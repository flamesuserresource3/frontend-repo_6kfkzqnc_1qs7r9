import { ShoppingBag, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'VORTEX PHASE SUIT',
    price: '$14.99',
    accent: 'from-red-500 to-rose-700',
  },
  {
    name: 'NEBULA WEAPON SKIN',
    price: '$7.99',
    accent: 'from-rose-500 to-pink-600',
  },
  {
    name: 'QUANTUM EMOTE PACK',
    price: '$4.99',
    accent: 'from-red-400 to-rose-600',
  },
];

export default function ShopPreview() {
  return (
    <section id="shop" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_80%_10%,rgba(244,63,94,0.12)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Shop</h2>
            <p className="mt-3 max-w-2xl text-zinc-300/90">Unlock cosmetics that match the glossy, fluid aesthetic. No pay-to-win. Ever.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 backdrop-blur-md hover:bg-white/10 transition-colors">
            <ShoppingBag size={16} /> View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className={`h-40 bg-gradient-to-br ${it.accent} opacity-90`} />
              <div className="p-5">
                <h3 className="text-white font-semibold tracking-wide">{it.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-zinc-300/90 text-sm">Cosmetic</span>
                  <span className="text-white font-medium">{it.price}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-700 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:shadow-red-500/30">
                  <Rocket size={14} /> Quick View
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 backdrop-blur-md w-full justify-center">
            <ShoppingBag size={16} /> View All
          </a>
        </div>
      </div>
    </section>
  );
}
