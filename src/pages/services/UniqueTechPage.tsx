import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const UniqueTechPage = () => {
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
              <Icon name="Cpu" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Уникальные технологии</h1>
            <p className="text-xl text-muted-foreground">
              Собственные инструменты и закрытые базы данных для возврата активов
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Наши технологические преимущества</h2>
            <p className="text-muted-foreground mb-8">
              За 12 лет работы мы разработали собственную технологическую платформу для розыска 
              и возврата криптовалютных активов. Наши инструменты превосходят публичные сервисы 
              по глубине анализа, скорости работы и покрытию блокчейнов.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">150M+</div>
                  <p className="text-sm text-muted-foreground">Помеченных адресов в базе</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">35+</div>
                  <p className="text-sm text-muted-foreground">Поддерживаемых блокчейнов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">5TB+</div>
                  <p className="text-sm text-muted-foreground">Данных OSINT и утечек</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Наши разработки:</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Activity" className="h-6 w-6 text-primary" />
                    CryptoTrace AI — Система трейсинга нового поколения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Наша флагманская разработка — AI-платформа для автоматического анализа блокчейн-транзакций 
                    с применением машинного обучения и графовых нейросетей.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">🚀 Скорость</p>
                      <p className="text-xs text-muted-foreground">Анализ 10,000+ транзакций за 2 минуты (vs 2-3 часа вручную)</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">🎯 Точность</p>
                      <p className="text-xs text-muted-foreground">94% accuracy в определении типов адресов и сервисов</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">🔍 Глубина</p>
                      <p className="text-xs text-muted-foreground">Анализ до 100 уровней вложенности транзакций</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">🌐 Покрытие</p>
                      <p className="text-xs text-muted-foreground">35 блокчейнов включая privacy-монеты (Monero, Zcash)</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-3 rounded text-sm">
                    <p className="font-semibold mb-2">Уникальные возможности:</p>
                    <ul className="space-y-1 text-muted-foreground text-xs">
                      <li>• Автоматическое распутывание миксеров и CoinJoin-транзакций</li>
                      <li>• Предсказание следующих шагов злоумышленников на основе ML-моделей</li>
                      <li>• Кросс-чейн трейсинг с автоматическим отслеживанием мостов</li>
                      <li>• Интеграция с биржевыми API для мгновенного определения cash-out точек</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Database" className="h-6 w-6 text-primary" />
                    EntityDB — Крупнейшая база меток адресов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Собственная база данных с идентифицированными криптоадресами, обновляемая в реальном времени. 
                    Включает эксклюзивные метки, недоступные в Chainalysis и Elliptic.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">150M+ помеченных адресов</p>
                        <p className="text-xs text-muted-foreground">Биржи, миксеры, казино, scam-проекты, санкционные адреса</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Закрытые источники</p>
                        <p className="text-xs text-muted-foreground">KYC-утечки с бирж, инсайдерская информация, law enforcement data</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Автообновление</p>
                        <p className="text-xs text-muted-foreground">Парсинг бирж, форумов, даркнета 24/7 с добавлением новых меток</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Eye" className="h-6 w-6 text-primary" />
                    OSINT Aggregator — Платформа разведки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Автоматизированная система сбора информации из 500+ открытых и закрытых источников. 
                    Агрегирует данные о людях, компаниях, утечках за секунды.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-muted/30 p-3 rounded text-sm">
                      <p className="font-semibold mb-1">Социальные сети</p>
                      <p className="text-xs text-muted-foreground">VK, Telegram, Twitter, Facebook, LinkedIn, Instagram</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded text-sm">
                      <p className="font-semibold mb-1">Утечки данных</p>
                      <p className="text-xs text-muted-foreground">5TB+ баз: email, пароли, телефоны, паспорта</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded text-sm">
                      <p className="font-semibold mb-1">Даркнет</p>
                      <p className="text-xs text-muted-foreground">Мониторинг Tor-форумов и маркетплейсов</p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded text-sm">
                      <p className="font-semibold mb-1">Реестры</p>
                      <p className="text-xs text-muted-foreground">ЕГРЮЛ, ЕГРН, суды, арбитраж, банкротства</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Bot" className="h-6 w-6 text-primary" />
                    AutoRecovery Bot — Автоматизация возврата
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Бот для автоматической подачи запросов на биржи, мониторинга статуса средств 
                    и уведомлений о движении украденных активов.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Bell" className="h-4 w-4 text-primary" />
                      Real-time алерты при движении отслеживаемых адресов
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Send" className="h-4 w-4 text-primary" />
                      Автоотправка freeze-запросов на 50+ бирж
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="BarChart" className="h-4 w-4 text-primary" />
                      Автоматические отчёты о прогрессе дела
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Zap" className="h-4 w-4 text-primary" />
                      Интеграция с Telegram для мгновенных уведомлений
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Lock" className="h-6 w-6 text-primary" />
                    DeAnon Engine — Система деанонимизации
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Проприетарные алгоритмы для связывания крипто-адресов с реальными личностями 
                    через комплексный анализ on-chain и off-chain данных.
                  </p>
                  <div className="bg-primary/5 p-3 rounded text-sm">
                    <p className="font-semibold mb-2">Методы деанонимизации:</p>
                    <ul className="space-y-1 text-muted-foreground text-xs">
                      <li>• Кластерный анализ (Common Input Ownership Heuristic)</li>
                      <li>• Сопоставление KYC-данных с бирж через официальные запросы</li>
                      <li>• Корреляция on-chain активности с социальными сетями</li>
                      <li>• IP-логи с известных нод и сервисов</li>
                      <li>• Machine learning для определения паттернов одного пользователя</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="h-6 w-6 text-primary" />
                    SecureVault — Защищённое хранилище
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Собственное решение для безопасного хранения возвращённых активов клиентов 
                    с мультиподписью и cold storage.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Multisig 3-of-5 для всех операций
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      99% средств в cold storage
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Страхование активов на $10M
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      Аудит кода от Trail of Bits
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Партнёрства и интеграции:</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Технологические партнёры</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Building" className="h-4 w-4 text-primary" />
                      Chainalysis — доступ к Reactor и KYT
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Building" className="h-4 w-4 text-primary" />
                      Elliptic — Enterprise-лицензия
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Building" className="h-4 w-4 text-primary" />
                      Crystal Blockchain — API-доступ
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Building" className="h-4 w-4 text-primary" />
                      TRM Labs — данные по DeFi
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Прямые интеграции с биржами</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Plug" className="h-4 w-4 text-primary" />
                      Binance — Law Enforcement Portal
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Plug" className="h-4 w-4 text-primary" />
                      Kraken — Compliance Team Access
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Plug" className="h-4 w-4 text-primary" />
                      Coinbase — Investigation Support
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Plug" className="h-4 w-4 text-primary" />
                      Huobi, OKX, ByBit — партнёрские каналы
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Award" className="h-5 w-5 text-primary" />
                Почему наши технологии эффективнее:
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Скорость анализа</p>
                    <p className="text-sm">В 10-50 раз быстрее ручной работы и публичных инструментов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Глубина данных</p>
                    <p className="text-sm">Закрытые базы и эксклюзивные источники, недоступные публично</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Globe" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Покрытие блокчейнов</p>
                    <p className="text-sm">35+ сетей включая privacy-монеты и новые L1/L2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Автоматизация</p>
                    <p className="text-sm">AI и боты выполняют рутинные операции без участия человека</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-destructive">
                <Icon name="Lock" className="h-5 w-5" />
                Конфиденциальность технологий
              </h3>
              <p className="text-muted-foreground text-sm">
                Наши инструменты и алгоритмы — коммерческая тайна. Мы не раскрываем детали реализации, 
                исходный код, базы данных третьим лицам. Доступ только для сотрудников компании с NDA.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Узнать больше
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

export default UniqueTechPage;
