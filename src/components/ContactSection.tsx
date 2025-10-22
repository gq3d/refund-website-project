import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
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
                  Написать email
                </Button>
              </a>
            </div>

            <div className="pt-12 border-t border-white/20 mt-16">
              <p className="text-lg text-white/80 mb-6">Работаем 24/7. Ответим на звонок в течение 5 минут</p>
              <div className="flex flex-wrap justify-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="h-5 w-5" />
                  <span>Полная конфиденциальность</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="h-5 w-5" />
                  <span>Оплата после результата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="FileText" className="h-5 w-5" />
                  <span>Официальный договор</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
