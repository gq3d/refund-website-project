import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const AssetRecoveryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Назад
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Scale" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Юридический возврат активов</h1>
            <p className="text-xl text-muted-foreground">
              Легальное возвращение заблокированных криптовалютных средств через суд
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Когда нужна юридическая помощь?</h2>
            <p className="text-muted-foreground mb-6">
              Биржи и обменники могут заблокировать ваши средства без объяснений, требуя доказательства 
              происхождения или подозревая в нарушении правил. Юридический возврат — это официальный 
              способ вернуть свои активы через суд, арбитраж или переговоры с платформой.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Мы помогаем вернуть средства если:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Биржа заблокировала вывод без объяснений
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Требуют KYC, но не принимают документы
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Обвиняют в нарушении правил необоснованно
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Средства конфискованы по подозрению в AML
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Обменник не вернул деньги после сделки
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      P2P-площадка заморозила средства
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Наша экспертиза:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Briefcase" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Опыт работы с Binance, Kraken, Coinbase
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Globe" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Международные споры в разных юрисдикциях
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Scale" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Практика в криптовалютном праве
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Award" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      87% выигранных дел по возврату активов
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="TrendingUp" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Возвращено более $15M клиентам
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Партнёры в 15+ странах
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Этапы юридического возврата:</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                    Правовой анализ ситуации
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Изучаем обстоятельства блокировки, переписку с биржей, пользовательское соглашение. 
                    Определяем правовые основания для возврата и оцениваем шансы на успех.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Срок: 1-2 дня</span>
                    <span className="text-primary font-semibold">Бесплатно</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                    Досудебное урегулирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Направляем официальную претензию бирже с требованием разблокировки. Ведём переговоры 
                    с юридическим отделом платформы. В 60% случаев удаётся решить вопрос на этом этапе.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Срок: 7-14 дней</span>
                    <span className="text-primary font-semibold">от $1,499</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                    Подготовка искового заявления
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Если переговоры не помогли — готовим исковое заявление в суд или арбитраж. 
                    Собираем доказательства законности средств, нарушений со стороны биржи, причинённого ущерба.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Срок: 5-10 дней</span>
                    <span className="text-primary font-semibold">от $2,999</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</div>
                    Судебное разбирательство
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Представляем ваши интересы в суде или арбитраже (в зависимости от юрисдикции биржи). 
                    Работаем с партнёрами в нужной стране. Добиваемся судебного решения о возврате средств.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Срок: 1-6 месяцев</span>
                    <span className="text-primary font-semibold">от $5,999</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">5</div>
                    Исполнение решения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    После положительного решения суда — контролируем исполнение. При необходимости 
                    привлекаем судебных приставов или международные механизмы принудительного взыскания.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Срок: 14-60 дней</span>
                    <span className="text-primary font-semibold">Включено в стоимость</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Что входит в услугу:</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Юридический анализ</h3>
                      <p className="text-sm text-muted-foreground">Оценка перспектив дела и рисков</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Send" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Претензионная работа</h3>
                      <p className="text-sm text-muted-foreground">Официальные запросы и переговоры</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Gavel" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Судебное представительство</h3>
                      <p className="text-sm text-muted-foreground">Защита интересов в суде</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="FolderOpen" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Сбор доказательств</h3>
                      <p className="text-sm text-muted-foreground">Документы о происхождении средств</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Globe" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Международные споры</h3>
                      <p className="text-sm text-muted-foreground">Работа с зарубежными биржами</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="ShieldCheck" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Контроль исполнения</h3>
                      <p className="text-sm text-muted-foreground">До момента возврата средств</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Стоимость услуг:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Первичная консультация</span>
                  <span className="font-semibold text-primary">Бесплатно</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Досудебное урегулирование</span>
                  <span className="font-semibold">от $1,499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Подготовка иска</span>
                  <span className="font-semibold">от $2,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Судебное представительство</span>
                  <span className="font-semibold">от $5,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Международный арбитраж</span>
                  <span className="font-semibold">от $9,999</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Также предлагаем работу по модели "успешного гонорара" (% от возвращённых средств)
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-green-700 dark:text-green-400">
                <Icon name="Award" className="h-5 w-5" />
                Наши гарантии
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Работаем по официальному договору
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Возможна оплата по факту возврата средств
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Полная конфиденциальность
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Ведём дело до возврата средств
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Бесплатная консультация
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetRecoveryPage;
