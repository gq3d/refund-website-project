import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WarningSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 bg-destructive/5 border-y-4 border-destructive scroll-animate ${isVisible ? 'visible' : ''}`}>
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
                    <span><strong>Затягивание</strong> — после оплаты появляются новые требования и дополнительные «комиссии»</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-destructive">5.</span>
                    <span><strong>Результат</strong> — мошенники пропадают с вашими деньгами</span>
                  </li>
                </ol>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <Icon name="ShieldCheck" className="h-6 w-6" />
                  Как защититься:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Никогда не переводите деньги заранее</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Не доверяйте письмам о «найденных средствах»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Проверяйте компанию через официальные реестры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Обращайтесь только к проверенным специалистам</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg font-semibold text-primary text-center pt-4">
                Работаем только с реальными заблокированными средствами на биржах. Оплата — после результата.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WarningSection;