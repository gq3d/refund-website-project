import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DirectionsSection from '@/components/DirectionsSection';
import WarningSection from '@/components/WarningSection';
import ProcessSection from '@/components/ProcessSection';
import CasesSection from '@/components/CasesSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DirectionsSection />
      <WarningSection />
      <ProcessSection />
      <CasesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
