import { ChevronLeft, ChevronRight, Bell, Shield, Moon, Info, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Configuracoes() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Bell, label: 'Notificações', color: 'text-white' },
    { icon: Shield, label: 'Privacidade e Segurança', color: 'text-white' },
    { icon: Moon, label: 'Aparência', color: 'text-white' },
    { icon: Info, label: 'Sobre o ONIN', color: 'text-white' },
    { icon: LogOut, label: 'Sair da conta', color: 'text-primary-500' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Configurações</h2>
      </div>

      <div className="p-6">
        <div className="space-y-1">
          {menuItems.map((item, i) => (
            <div 
              key={i} 
              onClick={() => item.label === 'Sair da conta' ? navigate('/login') : null}
              className={`flex items-center justify-between py-4 cursor-pointer hover:bg-dark-800 transition-colors ${i !== menuItems.length - 1 ? 'border-b border-dark-500/50' : ''}`}
            >
              <div className={`flex items-center gap-4 ${item.color}`}>
                <item.icon size={22} strokeWidth={1.5} />
                <span className="text-[14px] font-medium">{item.label}</span>
              </div>
              {item.label !== 'Sair da conta' && (
                <ChevronRight size={18} className="text-text-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-[11px] text-text-tertiary">ONIN v1.0.0</p>
      </div>
    </div>
  );
}
