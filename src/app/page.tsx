import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroFeatures from "@/components/HeroSection/HeroFeatures";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <HeroFeatures />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
