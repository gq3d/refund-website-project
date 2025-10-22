import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const AmlCleaningPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-12">
        <Breadcrumbs />

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Очистка AML-рисков криптовалют</h1>
            <p className="text-xl text-muted-foreground">
              Профессиональное устранение рисков и восстановление чистоты криптоактивов
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Что такое AML-риски?</h2>
            <p className="text-muted-foreground mb-6">
              AML-риски возникают, когда ваши криптовалютные активы связаны с подозрительными транзакциями, 
              мошенническими схемами или незаконной деятельностью. Даже если вы получили монеты законным путём, 
              их история может содержать "грязные" следы от предыдущих владельцев.
            </p>

            <h2 className="text-2xl font-bold mb-4">Наши услуги включают:</h2>
            <div className="grid gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Search" className="h-5 w-5 text-primary" />
                    Глубокий анализ транзакций
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Проверяем всю историю монет с использованием профессиональных инструментов Chainalysis, 
                    Elliptic, Crystal Blockchain. Выявляем все подозрительные связи и источники загрязнения.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="RefreshCw" className="h-5 w-5 text-primary" />
                    Юридическая очистка активов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Работаем через официальные каналы с биржами и регуляторами. Предоставляем доказательства 
                    законного происхождения средств, готовим юридическую документацию для снятия ограничений.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Shield" className="h-5 w-5 text-primary" />
                    Техническая очистка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Используем специализированные методы для разрыва связи с подозрительными адресами. 
                    Применяем легальные технологии миксинга и структурирования транзакций для восстановления 
                    чистоты монет.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="FileText" className="h-5 w-5 text-primary" />
                    Документальное подтверждение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Выдаём официальные отчёты о происхождении средств, сертификаты чистоты активов, 
                    юридические заключения для предъявления биржам и регуляторам.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Поддерживаемые криптовалюты:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Circle" className="h-2 w-2 fill-current" />
                Bitcoin (BTC)
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Circle" className="h-2 w-2 fill-current" />
                Ethereum (ETH)
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Circle" className="h-2 w-2 fill-current" />
                USDT (все сети)
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Circle" className="h-2 w-2 fill-current" />
                USDC
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Circle" className="h-2 w-2 fill-current" />
                BNB
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Circle" className="h-2 w-2 fill-current" />
                И другие
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Процесс работы:</h2>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Первичная консультация</h3>
                  <p className="text-muted-foreground">Анализируем вашу ситуацию и определяем степень загрязнения активов</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Глубокий аудит</h3>
                  <p className="text-muted-foreground">Проводим полную проверку истории транзакций и источников</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold mb-1">План очистки</h3>
                  <p className="text-muted-foreground">Разрабатываем индивидуальную стратегию устранения рисков</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Реализация</h3>
                  <p className="text-muted-foreground">Выполняем технические и юридические процедуры очистки</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Подтверждение</h3>
                  <p className="text-muted-foreground">Предоставляем документы о чистоте активов и гарантии</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5 text-primary" />
                Сроки выполнения
              </h3>
              <p className="text-muted-foreground">
                Стандартная очистка: 7-14 рабочих дней<br />
                Срочная очистка: 3-5 рабочих дней<br />
                Сложные случаи: индивидуально
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Заказать услугу
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

export default AmlCleaningPage;