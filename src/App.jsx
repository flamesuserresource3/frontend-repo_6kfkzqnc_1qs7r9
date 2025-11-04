import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameShowcase from './components/GameShowcase';
import ShopPreview from './components/ShopPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-rose-600/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GameShowcase />
        <ShopPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
