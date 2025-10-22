import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const RedFlagsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-12">
        <Breadcrumbs />

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="AlertTriangle" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Снятие "красных флагов"</h1>
            <p className="text-xl text-muted-foreground">
              Устранение блокировок и подозрительных меток с криптовалютных адресов
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Что такое "красные флаги"?</h2>
            <p className="text-muted-foreground mb-6">
              Красные флаги — это метки и предупреждения, которые присваивают вашим криптоадресам 
              аналитические сервисы, биржи и регуляторы. Даже один флаг может привести к блокировке 
              счёта, отказу в выводе средств или проверке со стороны правоохранительных органов.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-destructive">Типы красных флагов:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Flag" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Связь с санкционными адресами</p>
                    <p className="text-sm text-muted-foreground">Ваши монеты контактировали с адресами из списков OFAC, EU, UN</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Flag" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Метка "украденные средства"</p>
                    <p className="text-sm text-muted-foreground">Активы связаны с взломами бирж, хакерскими атаками, кражами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Flag" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Прохождение через миксеры</p>
                    <p className="text-sm text-muted-foreground">Использование Tornado Cash, ChipMixer, Wasabi и подобных сервисов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Flag" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Связь с даркнет-рынками</p>
                    <p className="text-sm text-muted-foreground">Транзакции с адресами Hydra, Silk Road и других нелегальных площадок</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Flag" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Подозрение в отмывании</p>
                    <p className="text-sm text-muted-foreground">Сложные схемы перевода средств, имитирующие laundering</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Flag" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Мошенничество и скам</p>
                    <p className="text-sm text-muted-foreground">Участие в пирамидах, хайп-проектах, фишинговых схемах</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Как мы снимаем флаги:</h2>
            <div className="grid gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Search" className="h-5 w-5 text-primary" />
                    Диагностика и анализ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Определяем все флаги на ваших адресах, источник их появления и причину присвоения. 
                    Используем базы Chainalysis, Elliptic, CipherTrace, Crystal Blockchain.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Срок: 1-2 дня | Стоимость включена в услугу
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="FileText" className="h-5 w-5 text-primary" />
                    Сбор доказательной базы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Готовим документы, подтверждающие законное происхождение средств: договоры, чеки, 
                    выписки, скриншоты транзакций, налоговые декларации.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Срок: 3-5 дней | Требует вашего участия
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Building2" className="h-5 w-5 text-primary" />
                    Взаимодействие с биржами
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Подаём официальные запросы в саппорт бирж и аналитических сервисов на пересмотр 
                    статуса адресов. Ведём переписку от вашего имени с юридическим сопровождением.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Срок: 7-14 дней | Зависит от скорости ответа биржи
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Gavel" className="h-5 w-5 text-primary" />
                    Юридическое обжалование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    При отказе биржи — подаём претензию с требованием разблокировки. Привлекаем 
                    юристов по криптовалютному праву, готовим досудебные и судебные документы.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Срок: 14-30 дней | Стоимость обсуждается отдельно
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Shuffle" className="h-5 w-5 text-primary" />
                    Техническая очистка адресов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Если флаги не снимаются официально — применяем технические методы для разрыва 
                    связей с проблемными адресами. Переводим активы на чистые кошельки.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Срок: 3-7 дней | Гарантия чистоты
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="h-5 w-5 text-primary" />
                    Профилактика новых флагов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Настраиваем систему мониторинга ваших адресов. Предупреждаем о рискованных 
                    транзакциях. Обучаем безопасным практикам использования криптовалют.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Доступно в рамках абонентского обслуживания
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Процесс работы:</h2>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Бесплатная проверка</h3>
                  <p className="text-muted-foreground">Присылаете адреса — мы проверяем наличие флагов и даём предварительную оценку</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Детальная диагностика</h3>
                  <p className="text-muted-foreground">Определяем причины флагов, анализируем историю, оцениваем сложность снятия</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold mb-1">План действий</h3>
                  <p className="text-muted-foreground">Предлагаем стратегию: официальное снятие, техническая очистка или комбинация</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Реализация</h3>
                  <p className="text-muted-foreground">Выполняем необходимые действия: переписка с биржами, юридическая работа, техническая очистка</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Проверка результата</h3>
                  <p className="text-muted-foreground">Подтверждаем снятие флагов, выдаём сертификат чистоты адресов</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="DollarSign" className="h-5 w-5 text-primary" />
                Стоимость услуги
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Диагностика и анализ: <span className="font-semibold text-foreground">Бесплатно</span></p>
                <p>• Простое снятие флагов (1-2 флага): <span className="font-semibold text-foreground">от $499</span></p>
                <p>• Сложное снятие (3+ флага, санкции): <span className="font-semibold text-foreground">от $1,499</span></p>
                <p>• Техническая очистка адресов: <span className="font-semibold text-foreground">от $799</span></p>
                <p>• Юридическое обжалование: <span className="font-semibold text-foreground">от $2,999</span></p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Точная стоимость определяется после диагностики
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-green-700 dark:text-green-400">
                <Icon name="CheckCircle" className="h-5 w-5" />
                Гарантии
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Работаем по договору с чёткими обязательствами
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Если не снимем флаги официально — применим техническую очистку
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Возврат 50% при невозможности решить проблему
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Конфиденциальность и защита ваших данных
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Бесплатная проверка
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

export default RedFlagsPage;