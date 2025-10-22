import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProcessSection = () => {
  const steps = [
    {
      icon: 'MessageSquare',
      title: 'Консультация',
      description: 'Свяжитесь с нами любым удобным способом. Расскажите о ситуации с блокировкой',
      duration: '30 минут',
    },
    {
      icon: 'FileSearch',
      title: 'Анализ',
      description: 'Проводим первичный анализ вашего случая и оцениваем шансы на возврат',
      duration: '1-2 дня',
    },
    {
      icon: 'FileText',
      title: 'Договор',
      description: 'Заключаем официальный договор с прозрачными условиями и гарантиями',
      duration: '1 день',
    },
    {
      icon: 'Cog',
      title: 'Работа',
      description: 'Начинаем работу с биржей: собираем документы, общаемся с техподдержкой',
      duration: '2-4 недели',
    },
    {
      icon: 'CheckCircle',
      title: 'Результат',
      description: 'Возврат средств на ваш счёт и полный отчёт о проделанной работе',
      duration: 'Зависит от биржи',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Как мы работаем</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс возврата криптовалютных активов
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={step.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {step.duration}
                  </div>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
