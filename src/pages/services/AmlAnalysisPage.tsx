import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const AmlAnalysisPage = () => {
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
              <Icon name="Search" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AML-анализ перед продажей</h1>
            <p className="text-xl text-muted-foreground">
              Защитите себя от блокировок и проблем при обналичивании криптовалюты
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Зачем нужен анализ перед продажей?</h2>
            <p className="text-muted-foreground mb-6">
              Биржи и обменники всё строже проверяют входящие криптовалюты. Если ваши монеты связаны 
              с подозрительной активностью, счёт может быть заблокирован, а средства — заморожены. 
              Предварительный анализ помогает избежать этих рисков.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-destructive">
                <Icon name="AlertTriangle" className="h-5 w-5" />
                Риски без проверки
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  Блокировка счёта на бирже без объяснений
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  Заморозка средств на неопределённый срок
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  Требования предоставить документы о происхождении средств
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  Возможная передача данных правоохранительным органам
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  Потеря репутации и доступа к платформе
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Что мы проверяем:</h2>
            <div className="grid gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Link" className="h-5 w-5 text-primary" />
                    Связь с незаконной активностью
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Проверяем, не связаны ли ваши монеты с даркнет-маркетплейсами, хакерскими атаками, 
                    вымогательством, мошенническими схемами или террористическим финансированием.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Sparkles" className="h-5 w-5 text-primary" />
                    Миксеры и анонимизаторы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Определяем, проходили ли монеты через сервисы миксинга (Tornado Cash, Wasabi Wallet и др.), 
                    которые вызывают подозрения у бирж и регуляторов.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Building" className="h-5 w-5 text-primary" />
                    Санкционные адреса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Сверяем с базами OFAC, FinCEN, Chainalysis для выявления связей с санкционированными 
                    лицами, организациями и юрисдикциями.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="TrendingUp" className="h-5 w-5 text-primary" />
                    Риск-скор активов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Рассчитываем общий уровень риска по шкале 0-100. Показываем, как ваши монеты оценят 
                    крупные биржи (Binance, Kraken, Coinbase и др.).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Activity" className="h-5 w-5 text-primary" />
                    История транзакций
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Трейсим полный путь монет до 10 переводов в глубину. Выявляем подозрительные паттерны 
                    и нетипичные схемы перемещения средств.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                    Источники получения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Идентифицируем адреса отправителей, проверяем их репутацию, связи с биржами, 
                    p2p-платформами или подозрительными сервисами.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Что вы получаете:</h2>
            <div className="space-y-4 mb-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="FileText" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Подробный отчёт</h3>
                      <p className="text-muted-foreground text-sm">
                        Детальный анализ всех транзакций с визуализацией связей, графиками потоков 
                        и указанием проблемных участков.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="BarChart" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Оценка риска</h3>
                      <p className="text-muted-foreground text-sm">
                        Числовой показатель рискованности ваших активов с разбивкой по категориям 
                        (низкий/средний/высокий риск).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Lightbulb" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Рекомендации</h3>
                      <p className="text-muted-foreground text-sm">
                        Конкретные шаги для безопасной продажи: какие биржи использовать, нужна ли 
                        предварительная очистка, какие документы подготовить.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="ShieldCheck" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Сертификат чистоты</h3>
                      <p className="text-muted-foreground text-sm">
                        При низком риске — официальный документ, подтверждающий законность происхождения 
                        средств (для предъявления бирже при запросе).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Стоимость и сроки:</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Экспресс-анализ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">от $99</p>
                  <p className="text-muted-foreground mb-4">Срок: 24 часа</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Базовая проверка риск-скора
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Проверка санкционных списков
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Краткий отчёт (PDF)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Полный аудит
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">Рекомендуем</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">от $299</p>
                  <p className="text-muted-foreground mb-4">Срок: 2-3 дня</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Глубокий анализ транзакций
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Трейсинг источников
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Детальный отчёт + рекомендации
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Сертификат чистоты (при низком риске)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Заказать анализ
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

export default AmlAnalysisPage;
