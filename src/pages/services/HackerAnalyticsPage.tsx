import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const HackerAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-12">
        <Breadcrumbs />

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Binary" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Хакерская аналитика</h1>
            <p className="text-xl text-muted-foreground">
              OSINT-расследования, трейсинг криптовалют и глубокий цифровой анализ
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Что такое хакерская аналитика?</h2>
            <p className="text-muted-foreground mb-6">
              Это комплекс технических методов для расследования в цифровой среде. Мы используем 
              инструменты разведки с открытых источников (OSINT), блокчейн-аналитики, трейсинга и 
              форензики для поиска информации, отслеживания средств и выявления личностей.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Target" className="h-5 w-5 text-primary" />
                Когда применяется:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="ArrowRight" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Кража криптовалюты — нужно найти хакера и вернуть средства
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ArrowRight" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Мошенничество — требуется установить личность аферистов
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ArrowRight" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Утечка данных — поиск источника и объёма компрометации
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ArrowRight" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Анонимный адрес — установление владельца кошелька
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ArrowRight" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Конкурентная разведка — сбор информации о компаниях
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Методы и инструменты:</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Search" className="h-5 w-5 text-primary" />
                    OSINT (Open Source Intelligence)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Разведка по открытым источникам: социальные сети, форумы, даркнет, публичные базы данных, 
                    домены, утечки. Собираем цифровой след человека или компании.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Социальные сети</p>
                      <p className="text-muted-foreground text-xs">VK, Telegram, Twitter, LinkedIn, Facebook</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Поисковая аналитика</p>
                      <p className="text-muted-foreground text-xs">Google Dorking, Yandex, специализированные поисковики</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Базы данных утечек</p>
                      <p className="text-muted-foreground text-xs">Have I Been Pwned, утечки паролей, телефонов, email</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Даркнет</p>
                      <p className="text-muted-foreground text-xs">Tor, I2P, теневые форумы, маркетплейсы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="GitBranch" className="h-5 w-5 text-primary" />
                    Крипто-трейсинг
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Отслеживание движения криптовалюты по блокчейну. Выявляем пути выводов, обменные точки, 
                    миксеры, идентифицируем кошельки получателей.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Инструменты</p>
                      <p className="text-muted-foreground text-xs">Chainalysis, Elliptic, Crystal, TRM Labs</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Блокчейны</p>
                      <p className="text-muted-foreground text-xs">Bitcoin, Ethereum, Tron, BSC, Monero и 20+ сетей</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Методы</p>
                      <p className="text-muted-foreground text-xs">Кластеризация, деанонимизация, граф-анализ</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold mb-1">Результат</p>
                      <p className="text-muted-foreground text-xs">Карта движения средств, точки обналички</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Fingerprint" className="h-5 w-5 text-primary" />
                    Деанонимизация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Установление реальной личности за анонимным адресом, ником, email. Связываем цифровые следы 
                    с конкретными людьми через утечки, метаданные, паттерны поведения.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Связь email/телефона с социальными сетями
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Анализ метаданных фотографий и документов
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Сопоставление IP-адресов с локациями
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Поиск аккаунтов по никам и паролям из утечек
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Network" className="h-5 w-5 text-primary" />
                    Сетевая разведка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Анализ доменов, IP-адресов, серверной инфраструктуры. Выявляем связи между сайтами, 
                    скрытые сервисы, технические уязвимости.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      WHOIS-данные и история регистрации доменов
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      DNS-записи и поддомены
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Сканирование портов и сервисов
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Анализ SSL-сертификатов
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Database" className="h-5 w-5 text-primary" />
                    Работа с закрытыми базами
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Доступ к специализированным базам данных: телефоны, паспорта, регистрации, банковские счета, 
                    ИНН, СНИЛС, автомобили и другие источники (в рамках закона).
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    * Работаем только через легальные каналы: официальные запросы, публичные реестры, 
                    лицензированные источники данных
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Microscope" className="h-5 w-5 text-primary" />
                    Цифровая форензика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Анализ файлов, логов, переписок, истории браузера. Восстановление удалённых данных. 
                    Экспертиза цифровых следов для судебных дел.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Экспертиза компьютеров и смартфонов
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Восстановление переписок и файлов
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Анализ сетевого трафика
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Подготовка заключений для суда
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Типовые задачи:</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Поиск украденных средств</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Трейсинг украденной крипты, идентификация хакера, выявление точек обналички, 
                  подготовка досье для правоохранительных органов.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Расследование мошенничества</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Установление личности мошенников, сбор доказательной базы, поиск активов, 
                  выявление сообщников и схем.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Проверка контрагентов</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Полная биография компании/человека, репутация, судебные дела, связи, 
                  финансовое положение, риски сотрудничества.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Деанонимизация адресов</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Установление владельца анонимного крипто-адреса через блокчейн-аналитику, 
                  OSINT и сопоставление с известными данными.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Корпоративная разведка</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Сбор информации о конкурентах, партнёрах, инвесторах. Анализ деловой репутации, 
                  выявление скрытых связей и бенефициаров.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Поиск утечек данных</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Проверка компрометации email, паролей, баз клиентов. Мониторинг даркнета 
                  на предмет продажи ваших данных.
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Стоимость услуг:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">OSINT-досье на человека</span>
                  <span className="font-semibold">от $299</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Крипто-трейсинг (базовый)</span>
                  <span className="font-semibold">от $499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Деанонимизация адреса</span>
                  <span className="font-semibold">от $999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Полное расследование кражи</span>
                  <span className="font-semibold">от $2,499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Корпоративная разведка</span>
                  <span className="font-semibold">от $1,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Цифровая форензика</span>
                  <span className="font-semibold">от $1,499</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Стоимость зависит от сложности задачи и объёма работ. Точная цена после первичной оценки.
              </p>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-destructive">
                <Icon name="ShieldAlert" className="h-5 w-5" />
                Важно: легальность и этика
              </h3>
              <p className="text-muted-foreground text-sm">
                Мы работаем строго в рамках закона. Не осуществляем взлом, не получаем данные незаконными 
                методами, не нарушаем частную жизнь. Используем только открытые источники, легальные базы, 
                официальные запросы. Отказываем в задачах, противоречащих закону или этике.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Заказать расследование
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

export default HackerAnalyticsPage;