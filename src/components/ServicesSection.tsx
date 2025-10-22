import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: 'Shield',
      title: 'Очистка AML-рисков криптовалют',
      description: 'Глубокий анализ и устранение рисков для USDT, Bitcoin, Ethereum',
      link: '/services/aml-cleaning',
    },
    {
      icon: 'Search',
      title: 'AML-анализ перед продажей',
      description: 'Проверка криптовалюты перед транзакциями и обналичиванием',
      link: '/services/aml-analysis',
    },
    {
      icon: 'AlertTriangle',
      title: 'Снятие "красных флагов"',
      description: 'Устранение блокировок и подозрительных меток с адресов',
      link: '/services/red-flags',
    },
    {
      icon: 'Scale',
      title: 'Юридический возврат активов',
      description: 'Легальное возвращение заблокированных средств через суд',
      link: '/services/asset-recovery',
    },
    {
      icon: 'FileSearch',
      title: 'Финансовый аудит',
      description: 'Расследование цифровых следов и транзакционных путей',
      link: '/services/financial-audit',
    },
    {
      icon: 'Briefcase',
      title: 'Судебная защита',
      description: 'Защита владельцев заблокированных активов в суде',
      link: '/services/legal-defense',
    },
    {
      icon: 'Binary',
      title: 'Хакерская аналитика',
      description: 'OSINT, трейсинг криптовалют и цифровой анализ',
      link: '/services/hacker-analytics',
    },
    {
      icon: 'Globe',
      title: 'Международный розыск',
      description: 'Поиск и возврат средств по всему миру',
      link: '/services/international-search',
    },
    {
      icon: 'Cpu',
      title: 'Уникальные технологии',
      description: 'Собственные инструменты и закрытые базы данных',
      link: '/services/unique-tech',
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
            <Link key={index} to={service.link} className="block">
              <Card className="hover:shadow-lg hover:scale-105 transition-all border-border/50 animate-fade-in h-full cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;