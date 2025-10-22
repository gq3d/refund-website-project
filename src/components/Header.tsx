import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Icon name="DollarSign" className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Вернём вам деньги</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
          <a href="#directions" className="text-sm font-medium hover:text-primary transition-colors">Направления</a>
          <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">О команде</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79015144440" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <Icon name="Phone" className="h-4 w-4" />
            +7 (901) 514-44-40
          </a>
          <Button size="sm">
            Консультация
          </Button>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-8">
              <a 
                href="#services" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#directions" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Направления
              </a>
              <a 
                href="#team" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                О команде
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </a>
              <Button size="lg" className="mt-4" onClick={() => setIsOpen(false)}>
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Консультация
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;