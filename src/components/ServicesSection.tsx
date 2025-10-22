import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: 'Shield',
      title: 'Очистка AML-рисков криптовалют',
      description: 'Глубокий анализ и устранение рисков для USDT, Bitcoin, Ethereum',
    },
    {
      icon: 'Search',
      title: 'AML-анализ перед продажей',
      description: 'Проверка криптовалюты перед транзакциями и обналичиванием',
    },
    {
      icon: 'AlertTriangle',
      title: 'Снятие "красных флагов"',
      description: 'Устранение блокировок и подозрительных меток с адресов',
    },
    {
      icon: 'Scale',
      title: 'Юридический возврат активов',
      description: 'Легальное возвращение заблокированных средств через суд',
    },
    {
      icon: 'FileSearch',
      title: 'Финансовый аудит',
      description: 'Расследование цифровых следов и транзакционных путей',
    },
    {
      icon: 'Briefcase',
      title: 'Судебная защита',
      description: 'Защита владельцев заблокированных активов в суде',
    },
    {
      icon: 'Binary',
      title: 'Хакерская аналитика',
      description: 'OSINT, трейсинг криптовалют и цифровой анализ',
    },
    {
      icon: 'Globe',
      title: 'Международный розыск',
      description: 'Поиск и возврат средств по всему миру',
    },
    {
      icon: 'Cpu',
      title: 'Уникальные технологии',
      description: 'Собственные инструменты и закрытые базы данных',
    },
    {
      icon: 'Target',
      title: 'Спецоперации',
      description: 'Нестандартные расследования и оперативная работа',
    },
  ];

  return (
    <section ref={ref} id="services" className={`py-20 bg-white scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для возврата криптовалютных активов и защиты от AML-блокировок
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;