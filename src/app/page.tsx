import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />

      {/* Placeholder for next sections */}
      <div id="servicios" className="py-20 text-center text-white/50">
        <p>Sección de Servicios (Próximamente)</p>
      </div>
    </main>
  );
}
