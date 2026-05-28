import { Home, FileText, Wrench, Store, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function ProBottomNavigation() {
  const items = [
    { icon: Home, label: 'Dashboard', path: '/pro/dashboard' },
    { icon: FileText, label: 'Solicitações', path: '/pro/solicitacoes' },
    { icon: Wrench, label: 'Serviços', path: '/pro/servicos' },
    { icon: Store, label: 'Marketplace', path: '/pro/marketplace' },
    { icon: User, label: 'Perfil', path: '/pro/perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] border-t border-[#1F1F1F] pb-safe pt-2 px-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center p-2 gap-1 transition-colors ${
                isActive ? 'text-[#E50914]' : 'text-[#7A7A7A] hover:text-white'
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
