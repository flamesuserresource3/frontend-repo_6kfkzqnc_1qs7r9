import { useState } from 'react';
import { Menu, X, Rocket, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-sm tracking-wide">
      <li><a href="#home" className="text-zinc-200/90 hover:text-white transition-colors">Home</a></li>
      <li><a href="#game" className="text-zinc-200/90 hover:text-white transition-colors">Game</a></li>
      <li><a href="#shop" className="text-zinc-200/90 hover:text-white transition-colors">Shop</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <nav className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-700 text-white shadow-lg">
                <Rocket size={18} />
              </span>
              <span className="text-lg font-semibold tracking-wider text-white">VERSA</span>
            </a>

            <div className="hidden md:block">
              <NavLinks />
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#login" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors">
                <LogIn size={16} /> Login
              </a>
              <a href="#signup" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-700 px-4 py-2 text-sm font-medium text-white shadow-lg hover:shadow-red-500/25 transition-shadow">
                <UserPlus size={16} /> Sign Up
              </a>
            </div>

            <button aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-100" onClick={() => setOpen(v => !v)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="pb-4">
                <NavLinks />
              </div>
              <div className="flex items-center gap-3">
                <a href="#login" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100">
                  <LogIn size={16} /> Login
                </a>
                <a href="#signup" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-700 px-4 py-2 text-sm font-medium text-white shadow-lg">
                  <UserPlus size={16} /> Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
