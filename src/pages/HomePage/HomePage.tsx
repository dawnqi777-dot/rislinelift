import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/pages/HomePage/sections/HeroSection';
import StatsSection from '@/pages/HomePage/sections/StatsSection';
import AboutSection from '@/pages/HomePage/sections/AboutSection';
import FactorySection from '@/pages/HomePage/sections/FactorySection';
import ProductsSection from '@/pages/HomePage/sections/ProductsSection';
import CustomizationSection from '@/pages/HomePage/sections/CustomizationSection';
import CasesSection from '@/pages/HomePage/sections/CasesSection';
import ContactSection from '@/pages/HomePage/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FactorySection />
        <ProductsSection />
        <CustomizationSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
