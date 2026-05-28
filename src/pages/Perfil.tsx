import { ChevronRight, Settings, HelpCircle, Gift, CreditCard, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Clock, label: 'Histórico de serviços', route: '/historico' },
    { icon: MapPin, label: 'Endereços', route: '/configuracoes' },
    { icon: CreditCard, label: 'Formas de pagamento', route: '/configuracoes' },
    { icon: Gift, label: 'Indique e ganhe', route: '/configuracoes' },
    { icon: HelpCircle, label: 'Ajuda e suporte', route: '/configuracoes' },
    { icon: Settings, label: 'Configurações', route: '/configuracoes' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24">
      {/* Header Profile Area */}
      <div className="pt-6 pb-8 px-6 bg-linear-to-b from-[#2e0103] to-dark-900 rounded-b-[40px] relative">
        <div className="absolute top-6 right-6">
          <button className="text-text-secondary hover:text-white">
            <Settings size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <img 
            src="/images/mechanic_profile_1779938566880.png" 
            className="w-16 h-16 rounded-full object-cover" 
            alt="Marcos Silva"
          />
          <div>
            <h2 className="text-[18px] font-bold text-white mb-0.5">Marcos Silva</h2>
            <p className="text-[13px] text-text-secondary">marcos.silva@email.com</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-4">
        {/* Meus Veículos */}
        <h3 className="text-[12px] font-bold text-text-secondary mb-3">Meus veículos</h3>
        
        <div 
          onClick={() => navigate('/veiculos')}
          className="bg-dark-900 border border-dark-500 rounded-2xl p-4 flex items-center justify-between mb-6 cursor-pointer hover:bg-dark-800 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-21 h-13 bg-dark-800 rounded-lg flex items-center justify-center overflow-hidden">
               <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover opacity-80" alt="Civic" />
            </div>
            <div>
              <p className="font-semibold text-white text-[14px] mb-0.5">Honda Civic</p>
              <p className="text-[12px] text-text-secondary">ABC-1234</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-text-secondary" />
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, i) => (
            <div 
              key={i} 
              onClick={() => navigate(item.route)}
              className={`flex items-center justify-between py-4 cursor-pointer hover:bg-dark-800 transition-colors ${i !== menuItems.length - 1 ? 'border-b border-dark-500/50' : ''}`}
            >
              <div className="flex items-center gap-4 text-text-secondary">
                <item.icon size={22} strokeWidth={1.5} />
                <span className="text-[14px] font-medium text-white">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-text-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
