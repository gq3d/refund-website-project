import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const cases = [
    {
      title: 'Разблокировка на Binance',
      amount: '$8,500',
      crypto: 'USDT',
      duration: '14 дней',
      description: 'Клиент столкнулся с AML-блокировкой после покупки USDT через обменник. Провели анализ транзакций, подготовили отчёт и добились снятия блокировки.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Возврат с Bybit',
      amount: '0.3 BTC',
      crypto: 'Bitcoin',
      duration: '18 дней',
      description: 'Биржа заблокировала средства из-за подозрения в происхождении. Юридическое сопровождение и доказательная база помогли вернуть активы.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Снятие ограничений OKX',
      amount: '$12,000',
      crypto: 'ETH',
      duration: '22 дня',
      description: 'Аккаунт был ограничен после получения средств с миксера. Провели работу с техподдержкой биржи и добились разблокировки.',
      icon: 'CheckCircle2',
    },
  ];

  return (
    <section ref={ref} className={`py-20 bg-white scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Успешные кейсы</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории возврата криптовалютных активов наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-xl transition-all animate-fade-in border-accent/20" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name={caseItem.icon} className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{caseItem.amount}</div>
                      <div className="text-sm text-muted-foreground">{caseItem.crypto}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{caseItem.description}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-accent font-medium">
                    <Icon name="Clock" className="h-4 w-4" />
                    <span>Срок: {caseItem.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;