import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Promotions from "@/components/Promotions";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Services />
      <Promotions />
      <Location />

      {/* Simple Footer */}
      <footer className="bg-black py-8 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Tecnicentro de Colima. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
