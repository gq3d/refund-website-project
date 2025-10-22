import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="DollarSign" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Вернём вам деньги</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#directions" className="text-sm font-medium hover:text-primary transition-colors">Направления</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">О команде</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79015144440" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Icon name="Phone" className="h-4 w-4" />
              +7 (901) 514-44-40
            </a>
            <Button size="sm">
              Консультация
            </Button>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="#services" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#directions" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Направления
                </a>
                <a 
                  href="#team" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  О команде
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Контакты
                </a>
                <Button size="lg" className="mt-4" onClick={() => setIsOpen(false)}>
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  Консультация
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 md:py-32">
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

      <section id="services" className="py-20 bg-white">
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

      <section id="directions" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Направления работы</h2>
              <div className="h-1 w-24 bg-secondary mx-auto"></div>
            </div>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Очистка AML-рисков после покупки криптовалюты: как не потерять деньги
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none space-y-4 text-foreground/90">
                <p>
                  Ты купил криптовалюту через обменник на BestChange или аналогичном агрегаторе и вдруг обнаружил, 
                  что твой кошелек заблокирован, транзакции не проходят, а биржа требует подтверждение происхождения средств? 
                  Скорее всего, ты столкнулся с проблемой AML-рисков (Anti-Money Laundering).
                </p>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Что такое AML-риски?</h3>
                  <p className="text-foreground/80">
                    Это риски, связанные с подозрением на отмывание денег. Биржи, кошельки и банки все чаще блокируют транзакции, 
                    если видят, что средства могли поступить с «грязного» адреса — например, связанного с даркнетом, взломами или незаконной деятельностью.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Как можно попасть под блокировку?</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Покупка USDT или другой крипты у сомнительного обменника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Использование адресов, уже попавших в черные списки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Перевод средств на крупные биржи (Binance, Bybit, OKX), которые активно проверяют транзакции</span>
                  </li>
                </ul>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent my-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Как мы можем помочь:</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Проводим глубокий анализ происхождения средств</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Составляем AML-отчет, который принимается биржами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Снижаем рейтинг риска кошельков через специальное ПО</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Восстанавливаем доступ к криптовалюте, включая USDT, Bitcoin, Ethereum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Помогаем вернуть средства, заблокированные на Binance, Bybit, CoinEx, OKX, Kraken и др.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-base font-medium text-foreground">
                  Мы не просто консультируем. Мы работаем напрямую с техподдержками бирж, предоставляем технические 
                  и юридические документы, необходимые для снятия блокировки.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-destructive/5 border-y-4 border-destructive">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-destructive/10 text-destructive px-6 py-3 rounded-full mb-6">
                <Icon name="AlertTriangle" className="h-6 w-6" />
                <span className="text-lg font-bold">Осторожно: мошенники!</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Под видом возврата криптовалюты через «европейские фонды»
              </h2>
            </div>
            <Card className="border-destructive/20 animate-fade-in">
              <CardContent className="pt-6 space-y-4">
                <p className="text-foreground/90">
                  В последнее время всё больше людей сталкиваются с новой схемой мошенничества, связанной с возвратом 
                  криптовалютных активов. На электронную почту приходят якобы официальные письма: вас поздравляют с тем, 
                  что «у вас на счету лежит 1 BTC» или другой актив, и предлагают «оформить возврат» через открытие вклада 
                  в европейском банке или перевод средств в «международный фонд».
                </p>

                <div className="bg-destructive/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
                    <Icon name="XCircle" className="h-6 w-6" />
                    Как работает схема обмана:
                  </h3>
                  <ol className="space-y-3 text-foreground/80">
                    <li className="flex gap-3">
                      <span className="font-bold text-destructive">1.</span>
                      <span><strong>Первичное письмо</strong> — вы получаете сообщение о том, что на вашем кошельке «обнаружены средства»</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-destructive">2.</span>
                      <span><strong>Легенда о фонде</strong> — объясняют, что для возврата нужно открыть фонд в «европейском банке»</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-destructive">3.</span>
                      <span><strong>Финансовый крючок</strong> — просят оплатить комиссию, налоги, нотариальные услуги</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-destructive">4.</span>
                      <span><strong>Итог</strong> — вы теряете собственные деньги, а обещанных средств не существовало</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-accent mb-4">Когда возврат криптовалюты возможен реально?</h3>
                  <p className="text-foreground/80 mb-4">
                    На самом деле, возврат криптовалюты после AML-блокировки возможен, но только через профессионалов, 
                    которые работают с биржами и имеют юридические инструменты. Ни один нормальный процесс не требует:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>создания фонда в Европе</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>предварительных платежей на неизвестные счета</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>«верификации» на сторонних сайтах</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-6">
                  <p className="text-xl font-semibold text-primary mb-4">
                    🔒 Не дайте мошенникам второй шанс
                  </p>
                  <p className="text-lg text-foreground/80">
                    💼 Защищайте свои активы с теми, кто действительно может их вернуть
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Результаты в цифрах</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              За годы работы мы вернули миллионы долларов клиентам по всему миру
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '2008', label: 'Год основания', icon: 'Calendar' },
              { value: '$1.1M', label: 'Возвращено средств', icon: 'DollarSign' },
              { value: '26', label: 'Успешных кейсов', icon: 'TrendingUp' },
              { value: '72%', label: 'Успешность', icon: 'Award' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="border-primary/20 hover:shadow-xl transition-all hover:scale-105">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={stat.icon} className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
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
              {[
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
              ].map((caseItem, index) => (
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
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 text-sm">{caseItem.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                      <Icon name="Clock" className="h-4 w-4" />
                      <span>Срок: {caseItem.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 inline-block">
                <CardContent className="pt-6 px-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-foreground mb-2">
                        У вас похожая ситуация?
                      </p>
                      <p className="text-muted-foreground">
                        Мы проанализируем ваш случай бесплатно
                      </p>
                    </div>
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                      <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                      Получить консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Многопрофильная команда и уникальные технологии
              </h2>
              <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Мы — больше, чем юридическая команда. Это — сплочённый альянс профессионалов, где каждый участник 
                обладает глубокой экспертизой и десятилетиями практики.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: 'Scale', title: 'Юристы', desc: 'Специалисты по международному праву, судебной практике, офшорам и вопросам санкций' },
                { icon: 'Brain', title: 'Аналитики', desc: 'Разбирают схемы, отслеживают финансовые потоки, формируют доказательную базу' },
                { icon: 'Code', title: 'IT-специалисты', desc: 'Вскрывают цифровые следы, находят зашифрованные кошельки, выявляют бенефициаров' },
                { icon: 'Globe', title: 'Разведчики', desc: 'Действуют за границей, проводят полевые операции, общаются с нужными структурами' },
                { icon: 'Shield', title: 'Оперативники', desc: 'Работают с техникой и методами, используемыми в спецслужбах' },
                { icon: 'Zap', title: 'Спецподготовка', desc: 'Применяем технологии, о существовании которых большинство не подозревает' },
              ].map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={member.icon} className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{member.title}</CardTitle>
                    </div>
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

      <section id="contact" className="py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Позвоните — и мы начнём действовать
              </h2>
              <div className="h-1 w-24 bg-secondary mx-auto"></div>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mt-8">
                Мы быстро проведём первичный анализ ситуации и предложим конкретный план действий
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <a href="tel:+79015144440" className="inline-block">
                  <Button size="lg" variant="secondary" className="text-xl px-10 py-8 h-auto">
                    <Icon name="Phone" className="mr-3 h-6 w-6" />
                    +7 (901) 514-44-40
                  </Button>
                </a>
                <a href="mailto:info@example.com" className="inline-block">
                  <Button size="lg" variant="outline" className="text-xl px-10 py-8 h-auto bg-white/10 hover:bg-white/20 border-white/30 text-white">
                    <Icon name="Mail" className="mr-3 h-6 w-6" />
                    info@example.com
                  </Button>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-white/20">
                <div className="space-y-2">
                  <Icon name="Lock" className="h-8 w-8 text-secondary mx-auto" />
                  <p className="text-white/90 font-medium">Полная конфиденциальность</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Brain" className="h-8 w-8 text-secondary mx-auto" />
                  <p className="text-white/90 font-medium">Эксперты с опытом в спецслужбах</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Target" className="h-8 w-8 text-secondary mx-auto" />
                  <p className="text-white/90 font-medium">Результат — наша цель</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Юридический возврат активов</li>
                <li>Расследования и спецоперации</li>
                <li>IT-разведка и хакерская аналитика</li>
                <li>Уникальные технологии</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Специализация</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Очистка AML-рисков</li>
                <li>Снятие "красных флагов"</li>
                <li>Международный розыск</li>
                <li>AML-анализ перед продажей</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <p className="text-sm text-white/80">
                Агентство №1 по возврату средств<br />
                Там, где другие сдаются — мы только начинаем
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>2008 © Агентство №1 по возврату средств</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;