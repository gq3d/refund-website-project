import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const InternationalSearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-12">
        <Breadcrumbs />

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Globe" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Международный розыск</h1>
            <p className="text-xl text-muted-foreground">
              Поиск и возврат украденных криптовалютных средств по всему миру
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Глобальный поиск активов</h2>
            <p className="text-muted-foreground mb-6">
              Криптовалюта не знает границ — преступники выводят средства через биржи в разных странах, 
              используют зарубежные сервисы, скрываются в других юрисдикциях. Мы специализируемся на 
              международном розыске активов с привлечением партнёров в 25+ странах мира.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Наша сеть:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="MapPin" className="h-4 w-4 text-primary" />
                      Партнёры в 25+ странах
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Building2" className="h-4 w-4 text-primary" />
                      Юристы в ключевых юрисдикциях
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Users" className="h-4 w-4 text-primary" />
                      Частные детективы по всему миру
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Shield" className="h-4 w-4 text-primary" />
                      Контакты в правоохранительных органах
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Landmark" className="h-4 w-4 text-primary" />
                      Опыт работы с Интерполом
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Статистика:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="h-4 w-4 text-primary" />
                      65% успешных возвратов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="DollarSign" className="h-4 w-4 text-primary" />
                      $23M возвращено клиентам
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Globe" className="h-4 w-4 text-primary" />
                      47 стран покрытия
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Clock" className="h-4 w-4 text-primary" />
                      Средний срок: 2-4 месяца
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Award" className="h-4 w-4 text-primary" />
                      12 лет опыта
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Этапы международного розыска:</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                    Трейсинг и локализация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Отслеживаем путь средств по блокчейну, определяем страны и биржи, через которые 
                    выводились активы. Выявляем точки обналички и конечные адреса получателей.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Граф транзакций
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Идентификация бирж
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Геолокация активности
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Определение юрисдикций
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                    Идентификация преступников
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    OSINT-расследование для установления личности: анализ KYC на биржах, утечки данных, 
                    социальные сети, IP-адреса. Строим полное досье с фото, документами, контактами.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Запросы KYC у бирж
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      OSINT-разведка
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Деанонимизация
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Досье с доказательствами
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                    Блокировка активов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Подаём запросы на биржи с доказательствами кражи, требуем заморозить счета. 
                    Привлекаем местных юристов для подачи судебных ходатайств об аресте средств.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Запросы на биржи
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Судебная заморозка
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Работа с compliance
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Арест счетов
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</div>
                    Правовое преследование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Подаём заявления в полицию страны пребывания преступника, готовим документы для 
                    экстрадиции или международного розыска. Сотрудничаем с Интерполом.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Заявления в полицию
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Работа с Интерполом
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Экстрадиция
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Международное розыск
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">5</div>
                    Возврат средств
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    После блокировки активов — добиваемся их возврата через суд, мировое соглашение 
                    или прямые переговоры. Контролируем процесс до фактического получения денег.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Судебное взыскание
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Мировое соглашение
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Переговоры с биржами
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Возврат активов
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">География работы:</h2>
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                    Европа
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Великобритания, Германия, Франция, Нидерланды, Швейцария, Польша, Чехия
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                    Азия
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Сингапур, Гонконг, ОАЭ, Турция, Таиланд, Филиппины, Казахстан
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                    Америка
                  </p>
                  <p className="text-muted-foreground text-xs">
                    США, Канада, Мексика, Бразилия, Панама
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                    СНГ
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Россия, Украина, Беларусь, Узбекистан, Грузия, Армения
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                    Другие регионы
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Австралия, ЮАР, Израиль, Индия
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" className="h-4 w-4 text-primary" />
                    Офшоры
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Сейшелы, BVI, Кипр, Мальта
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Реальные кейсы:</h2>
            <div className="space-y-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                      <Icon name="CheckCircle" className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Возврат $470K из Сингапура</p>
                      <p className="text-sm text-muted-foreground">
                        Клиент потерял BTC при фишинговой атаке. Средства ушли на Binance Singapore. 
                        Локализовали хакера, подали заявление в полицию, заморозили счёт. Вернули 85% через 3 месяца.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                      <Icon name="CheckCircle" className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Блокировка мошенников в Турции</p>
                      <p className="text-sm text-muted-foreground">
                        Скам-проект с поддельным ICO. Организаторы скрылись в Турции с $2M. 
                        Нашли через OSINT, подали в турецкую полицию, заблокировали банковские счета. Частичный возврат.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                      <Icon name="CheckCircle" className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Международное расследование через 5 стран</p>
                      <p className="text-sm text-muted-foreground">
                        Средства прошли через РФ → Эстония → Сейшелы → Гонконг → США. 
                        Сопровождали 4 месяца, работали с биржами в каждой стране. Возврат через мировое соглашение.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Стоимость услуг:</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Первичный анализ и трейсинг</span>
                  <span className="font-semibold">$999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Локализация и идентификация</span>
                  <span className="font-semibold">от $2,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Блокировка активов</span>
                  <span className="font-semibold">от $4,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Полный цикл возврата</span>
                  <span className="font-semibold">от $9,999 + 15-25% от возвращённых средств</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                * Работаем по модели "no cure — no pay": основная оплата только при успешном возврате
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Начать розыск
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

export default InternationalSearchPage;