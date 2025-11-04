import { Gamepad2, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Gamepad2,
    title: 'Fluid Gunplay',
    desc: 'Responsive movement, precise aiming and glossy VFX tuned for competitive play.'
  },
  {
    icon: Users,
    title: 'Multiplayer Lobbies',
    desc: 'Party up, jump into fast matchmaking and climb the seasonal ladder.'
  },
  {
    icon: Shield,
    title: 'Skill-Based Ranked',
    desc: 'Climb tiers and unlock cosmetics through performance, not grind.'
  }
];

export default function GameShowcase() {
  return (
    <section id="game" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(40%_50%_at_20%_10%,rgba(244,63,94,0.15)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white">The Game</h2>
          <p className="mt-3 max-w-2xl text-zinc-300/90">Built for speed and clarity with a dark, glassy UI that fades away when you focus on the fight.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] hover:bg-white/7 transition-colors"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/90 to-rose-700/90 text-white shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300/90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
