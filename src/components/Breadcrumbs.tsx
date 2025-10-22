import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    'services': 'Услуги',
    'aml-cleaning': 'Очистка AML-рисков криптовалют',
    'aml-analysis': 'AML-анализ перед продажей',
    'red-flags': 'Снятие "красных флагов"',
    'asset-recovery': 'Юридический возврат активов',
    'financial-audit': 'Финансовый аудит',
    'legal-defense': 'Судебная защита',
    'hacker-analytics': 'Хакерская аналитика',
    'international-search': 'Международный розыск',
    'unique-tech': 'Уникальные технологии',
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
        <Icon name="Home" className="h-4 w-4" />
        <span>Главная</span>
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const breadcrumbName = breadcrumbNameMap[value] || value;

        return (
          <div key={to} className="flex items-center gap-2">
            <Icon name="ChevronRight" className="h-4 w-4" />
            {isLast ? (
              <span className="text-foreground font-medium">{breadcrumbName}</span>
            ) : (
              <Link to={to} className="hover:text-foreground transition-colors">
                {breadcrumbName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
