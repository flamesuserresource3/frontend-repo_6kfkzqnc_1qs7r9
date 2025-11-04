export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_80%_at_50%_0%,rgba(244,63,94,0.10)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} VERSA. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-zinc-300/90 hover:text-white">Privacy</a>
          <a href="#" className="text-zinc-300/90 hover:text-white">Terms</a>
          <a href="#" className="text-zinc-300/90 hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
