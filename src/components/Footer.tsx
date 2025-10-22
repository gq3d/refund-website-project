import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="DollarSign" className="h-8 w-8 text-secondary" />
                <span className="text-xl font-bold">Вернём вам деньги</span>
              </div>
              <p className="text-white/70">
                Профессиональный возврат криптовалютных активов с бирж
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <a href="tel:+79015144440" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (901) 514-44-40
                </a>
                <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@example.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <div className="space-y-2 text-white/70">
                <a href="#services" className="block hover:text-secondary transition-colors">Услуги</a>
                <a href="#directions" className="block hover:text-secondary transition-colors">Направления</a>
                <a href="#team" className="block hover:text-secondary transition-colors">О команде</a>
                <a href="#contact" className="block hover:text-secondary transition-colors">Контакты</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>© 2024 Вернём вам деньги. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
