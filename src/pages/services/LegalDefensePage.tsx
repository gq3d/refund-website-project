import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const LegalDefensePage = () => {
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
              <Icon name="Briefcase" className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Судебная защита</h1>
            <p className="text-xl text-muted-foreground">
              Защита владельцев заблокированных криптоактивов в судах
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Судебная защита в криптовалютных спорах</h2>
            <p className="text-muted-foreground mb-6">
              Криптовалютное право — молодая и сложная область, где отсутствуют чёткие прецеденты. 
              Наши юристы специализируются на защите прав владельцев цифровых активов в российских и 
              зарубежных судах, арбитражах и регуляторных органах.
            </p>

            <h2 className="text-2xl font-bold mb-4">Мы защищаем в случаях:</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="Building" className="h-5 w-5 text-primary" />
                    Споры с биржами
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Незаконная блокировка счёта</li>
                    <li>• Отказ в выводе средств</li>
                    <li>• Необоснованная конфискация</li>
                    <li>• Нарушение условий договора</li>
                    <li>• Утечка персональных данных</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="UserX" className="h-5 w-5 text-primary" />
                    Мошенничество и кража
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Хищение криптовалюты</li>
                    <li>• Фишинговые атаки</li>
                    <li>• Пирамиды и скам-проекты</li>
                    <li>• Мошенничество при P2P</li>
                    <li>• Невозврат средств</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                    Корпоративные споры
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Споры между партнёрами</li>
                    <li>• Раздел крипто-активов</li>
                    <li>• Нарушения при ICO/IEO</li>
                    <li>• Споры с инвесторами</li>
                    <li>• Контрактные обязательства</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="ShieldAlert" className="h-5 w-5 text-primary" />
                    Регуляторные вопросы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Проверки ФНС и Росфинмониторинга</li>
                    <li>• Обвинения в отмывании</li>
                    <li>• Налоговые споры</li>
                    <li>• Легализация криптодоходов</li>
                    <li>• Взаимодействие с ЦБ РФ</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Наши услуги судебной защиты:</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="FileText" className="h-5 w-5 text-primary" />
                    Подготовка позиции и документов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Анализируем вашу ситуацию, изучаем документы, блокчейн-данные. Готовим правовую позицию, 
                    исковое заявление или отзыв. Собираем доказательную базу: скриншоты, экспертизы, выписки.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Правовой анализ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Подготовка иска</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Сбор доказательств</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Блокчейн-экспертиза</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Gavel" className="h-5 w-5 text-primary" />
                    Представительство в судах
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Защищаем ваши интересы в судах общей юрисдикции, арбитражных судах, международных 
                    арбитражах. Участвуем в заседаниях, подаём ходатайства, обжалуем решения.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Суды РФ всех инстанций</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Зарубежные суды</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Международный арбитраж</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Третейские суды</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Megaphone" className="h-5 w-5 text-primary" />
                    Обжалование решений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Если суд первой инстанции вынес неблагоприятное решение — обжалуем в апелляции, 
                    кассации, надзорной инстанции. Добиваемся пересмотра по новым обстоятельствам.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Апелляционная жалоба</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Кассация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Надзор</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Пересмотр по новым обстоятельствам</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Shield" className="h-5 w-5 text-primary" />
                    Защита от обвинений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Если вас обвиняют в отмывании, мошенничестве с криптовалютами, нелегальной деятельности — 
                    строим защиту в уголовных и административных делах. Работаем со следствием, прокуратурой.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Уголовная защита</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Административные дела</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Взаимодействие со следствием</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Снятие обвинений</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Handshake" className="h-5 w-5 text-primary" />
                    Мирное урегулирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Стараемся решить спор до суда: проводим переговоры, медиацию, составляем мировое соглашение. 
                    Это экономит время и деньги, сохраняет репутацию.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Переговоры с оппонентом</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Медиация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Мировое соглашение</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Претензионная работа</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                    Исполнение решений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    После победы в суде — контролируем исполнение решения. Работаем с приставами, банками, 
                    биржами для фактического возврата средств или компенсации.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Исполнительное производство</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Взыскание с должника</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Арест счетов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Получение компенсации</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-4">Наши преимущества:</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Icon name="Award" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Узкая специализация</h3>
                      <p className="text-sm text-muted-foreground">Только криптовалютное право, глубокая экспертиза</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Icon name="Globe" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Международная практика</h3>
                      <p className="text-sm text-muted-foreground">Партнёры в 15+ странах, опыт зарубежных споров</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Icon name="TrendingUp" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Высокий процент побед</h3>
                      <p className="text-sm text-muted-foreground">87% выигранных дел по возврату активов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Icon name="Cpu" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Технические компетенции</h3>
                      <p className="text-sm text-muted-foreground">Понимание блокчейна, собственные аналитики</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Стоимость услуг:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Консультация (1 час)</span>
                  <span className="font-semibold">от $199</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Подготовка документов</span>
                  <span className="font-semibold">от $999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Представительство в суде (1 инстанция)</span>
                  <span className="font-semibold">от $4,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Апелляция/Кассация</span>
                  <span className="font-semibold">от $2,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Международный арбитраж</span>
                  <span className="font-semibold">от $14,999</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Возможна работа по модели Success Fee (оплата при положительном решении)
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                Консультация юриста
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

export default LegalDefensePage;
