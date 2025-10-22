import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DirectionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} id="directions" className={`py-20 bg-muted/30 scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Направления работы</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </div>
          <Card className="animate-fade-in">
            <CardHeader>
              <h3 className="text-2xl font-bold text-primary">Биржи, с которыми мы работаем:</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Binance',
                  'Bybit',
                  'OKX',
                  'Kraken',
                  'Huobi',
                  'KuCoin',
                  'Gate.io',
                  'Bitfinex',
                  'Другие платформы',
                ].map((exchange, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium text-foreground">{exchange}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-primary mb-4">Что мы делаем:</h4>
                <p className="text-base font-medium text-foreground">
                  Мы не просто консультируем. Мы работаем напрямую с техподдержками бирж, предоставляем технические 
                  и юридические документы, необходимые для снятия блокировки.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;