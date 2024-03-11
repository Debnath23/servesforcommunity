import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <HeroSection />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}
