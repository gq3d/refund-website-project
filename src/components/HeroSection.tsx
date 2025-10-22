import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 md:py-32 scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptNDggNDhoMTJ2MTJIODR6bS00OC00OGgxMnYxMkgzNnptNDggNDhoMTJ2MTJIODR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Вернём заблокированные<br />криптовалютные активы
          </h1>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Профессиональная команда экспертов по возврату средств с бирж Binance, Bybit, OKX и других платформ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;