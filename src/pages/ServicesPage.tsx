import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import DirectionsSection from '@/components/DirectionsSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ServicesSection />
        <DirectionsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;