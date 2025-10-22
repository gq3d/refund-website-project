import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const FinancialAuditPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-12">
        <Breadcrumbs />

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="FileSearch" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Финансовый аудит</h1>
            <p className="text-xl text-muted-foreground">
              Расследование цифровых следов и транзакционных путей криптовалют
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Что такое финансовый аудит криптовалют?</h2>
            <p className="text-muted-foreground mb-6">
              Финансовый аудит — это глубокое расследование движения криптоактивов с целью выявления 
              источников, маршрутов и получателей средств. Мы используем профессиональные инструменты 
              блокчейн-аналитики для построения полной картины транзакционной активности.
            </p>

            <h2 className="text-2xl font-bold mb-4">Когда нужен аудит:</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name="ShieldAlert" className="h-5 w-5 text-primary" />
                    Для защиты бизнеса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Проверка контрагентов перед сделкой</li>
                    <li>• Аудит поступающих платежей</li>
                    <li>• Комплаенс для крипто-бизнеса</li>
                    <li>• Подготовка к регуляторным проверкам</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name="Search" className="h-5 w-5 text-primary" />
                    Для расследований
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Поиск украденных средств</li>
                    <li>• Расследование мошенничества</li>
                    <li>• Отслеживание выводов хакеров</li>
                    <li>• Доказательная база для суда</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Методы аудита:</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="GitBranch" className="h-5 w-5 text-primary" />
                    Трейсинг транзакций (Transaction Tracing)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Отслеживаем полный путь движения средств от источника до получателя. Строим граф 
                    транзакций, выявляем промежуточные адреса, миксеры, биржи. Работаем с глубиной до 50+ переводов.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Используем: Chainalysis Reactor, Elliptic Navigator, Crystal Blockchain
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Fingerprint" className="h-5 w-5 text-primary" />
                    Кластерный анализ (Clustering)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Группируем адреса, принадлежащие одному владельцу. Выявляем связанные кошельки, 
                    определяем паттерны поведения, идентифицируем реальных пользователей за анонимными адресами.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Методы: Common input ownership, Change address detection, Temporal analysis
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Tag" className="h-5 w-5 text-primary" />
                    Идентификация сервисов (Entity Attribution)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Определяем, к каким биржам, миксерам, платформам относятся адреса. Используем базы данных 
                    с миллионами меток (Binance, Kraken, Wasabi, Tornado Cash и др.).
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    База: 100M+ помеченных адресов, обновление в реальном времени
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="AlertCircle" className="h-5 w-5 text-primary" />
                    Оценка рисков (Risk Scoring)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Присваиваем риск-скор каждому адресу и транзакции (0-100). Учитываем связи с санкциями, 
                    даркнетом, хакерскими атаками, мошенничеством. Показываем источники риска.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Категории: Sanctions, Theft, Darknet, Scam, Mixer, Gambling
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="TrendingUp" className="h-5 w-5 text-primary" />
                    Анализ потоков (Flow Analysis)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Визуализируем движение средств между адресами. Выявляем аномалии: круговые переводы, 
                    дробление сумм, использование миксеров. Определяем схемы отмывания.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Инструменты: Sankey диаграммы, временные графики, тепловые карты
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Database" className="h-5 w-5 text-primary" />
                    Мультичейн анализ (Multi-Chain)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Отслеживаем средства при переводе между блокчейнами (BTC→ETH, ETH→BSC). 
                    Выявляем использование мостов и кросс-чейн DEX для обхода детекции.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Поддержка: Bitcoin, Ethereum, BSC, Polygon, Tron, Solana и 15+ сетей
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Результаты аудита:</h2>
            <div className="grid gap-4 mb-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="FileText" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Подробный отчёт (PDF, 30-100 страниц)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Граф транзакций с визуализацией</li>
                        <li>• Список всех задействованных адресов и сервисов</li>
                        <li>• Риск-оценка каждого участка пути</li>
                        <li>• Выводы и рекомендации</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Table" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Структурированные данные (Excel/CSV)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Таблицы всех транзакций с метаданными</li>
                        <li>• Баланс движения по адресам</li>
                        <li>• Временная шкала активности</li>
                        <li>• Экспорт для дальнейшей обработки</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="BarChart3" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Интерактивная визуализация</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Граф связей с возможностью навигации</li>
                        <li>• Фильтрация по типам адресов и суммам</li>
                        <li>• Временная шкала событий</li>
                        <li>• Экспорт изображений для презентаций</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Scale" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Юридическое заключение</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Оценка законности источников</li>
                        <li>• Выявленные нарушения и риски</li>
                        <li>• Рекомендации по легализации</li>
                        <li>• Документ для суда (при необходимости)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Стоимость аудита:</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Базовый</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">49 900₽</p>
                  <p className="text-sm text-muted-foreground mb-4">До 50 транзакций</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Срок: 3-5 дней</li>
                    <li>• Глубина: до 10 переводов</li>
                    <li>• PDF-отчёт</li>
                    <li>• Риск-скоринг</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    Профессиональный
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">Популярный</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">149 000₽</p>
                  <p className="text-sm text-muted-foreground mb-4">До 200 транзакций</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Срок: 5-7 дней</li>
                    <li>• Глубина: до 30 переводов</li>
                    <li>• PDF + Excel + Визуализация</li>
                    <li>• Юридическое заключение</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Корпоративный</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">от 499 000₽</p>
                  <p className="text-sm text-muted-foreground mb-4">Без ограничений</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Срок: индивидуально</li>
                    <li>• Глубина: неограничена</li>
                    <li>• Полный пакет + API</li>
                    <li>• Презентация результатов</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Zap" className="h-5 w-5 text-primary" />
                Срочный аудит
              </h3>
              <p className="text-muted-foreground">
                Нужен результат в течение 24 часов? Доплата +50% к стоимости пакета.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Заказать аудит
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

export default FinancialAuditPage;