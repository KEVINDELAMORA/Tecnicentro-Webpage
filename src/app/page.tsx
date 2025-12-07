import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Promotions from "@/components/Promotions";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>
      <Hero />
      <Services />
      <Promotions />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
