import { Home, ClipboardList, Store, Car, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function BottomNavigation() {
  const items = [
    { icon: Home, label: 'Início', path: '/home' },
    { icon: ClipboardList, label: 'Solicitações', path: '/orcamentos' },
    { icon: Store, label: 'Marketplace', path: '/marketplace' },
    { icon: Car, label: 'Veículos', path: '/veiculos' },
    { icon: User, label: 'Perfil', path: '/perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-900 border-t border-dark-500 pb-safe pt-2 px-6 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center p-2 gap-1 ${
                isActive ? 'text-primary-500' : 'text-text-secondary hover:text-white'
              }`
            }
          >
            <item.icon size={22} strokeWidth={1.5} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
