import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import DirectionsSection from '@/components/DirectionsSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Комплексные решения для защиты ваших криптоактивов и бизнеса
          </p>
        </div>
        <ServicesSection />
        <DirectionsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
