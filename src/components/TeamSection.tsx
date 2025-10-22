import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TeamSection = () => {
  const team = [
    {
      icon: 'Scale',
      title: 'Юристы',
      desc: 'Специалисты по криптовалютному праву и международным финансовым спорам',
    },
    {
      icon: 'Binary',
      title: 'Технические эксперты',
      desc: 'Блокчейн-аналитики и специалисты по трейсингу криптовалютных транзакций',
    },
    {
      icon: 'Search',
      title: 'Аналитики AML',
      desc: 'Эксперты по противодействию отмыванию денег и финансовому мониторингу',
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наша команда</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с опытом работы в крупнейших криптобиржах и юридических компаниях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={member.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-center text-primary mb-8">Мы не просто консультируем. Мы действуем:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Используем спецтехнику и нестандартные методы воздействия',
                  'Ведём расследования за рубежом в закрытых юрисдикциях',
                  'Обнаруживаем активы в офшорах, трастах и на подставных',
                  'Применяем технологии киберпоиска и машинного анализа',
                  'Гарантируем полную конфиденциальность операций',
                  'Создаём стратегию для каждого случая с нуля',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xl font-semibold text-primary mt-8">
                То, что для других невозможно — для нас просто задача с переменными
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
