import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Community from '@/components/Community';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Community />
    </main>
  );
}
// Cambio para forzar push