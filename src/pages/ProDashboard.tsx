import { Bell, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-8">
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 sticky top-0 z-10 bg-dark-900">
        <h1 className="text-[20px] font-black text-white italic tracking-tighter flex items-center">
          ONIN <span className="text-[#E50914] ml-1 text-[11px] not-italic tracking-wider uppercase mt-1.5">PRO</span>
        </h1>
        <div className="relative">
          <Bell className="text-white" size={24} strokeWidth={1.5} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#E50914] rounded-full border-2 border-[#050505] flex items-center justify-center text-[8px] font-bold text-white">
            3
          </div>
        </div>
      </div>

      <div className="px-6 space-y-8">
        
        {/* Saudação */}
        <div>
          <h2 className="text-[20px] font-bold text-white tracking-tight">Olá, Auto Center Prime 👏</h2>
          <p className="text-[14px] text-[#B5B5B5] mt-1">Aqui está o resumo do dia</p>
        </div>

        {/* Resumo do dia */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-white">Resumo do dia</h3>
            <button className="flex items-center gap-1 bg-[#0F0F0F] border border-[#1B1B1B] text-[#B5B5B5] px-3 py-1.5 rounded-lg text-[11px] font-medium">
              Hoje, 10 de Maio <ChevronDown size={14} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4">
              <p className="text-[11px] text-[#7A7A7A] mb-1">Novos orçamentos</p>
              <h4 className="text-[24px] font-black text-white mb-2">8</h4>
              <p className="text-[10px] text-[#2EBA4A] font-medium">+12% vs ontem</p>
            </div>
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4">
              <p className="text-[11px] text-[#7A7A7A] mb-1">Em andamento</p>
              <h4 className="text-[24px] font-black text-white mb-2">12</h4>
              <p className="text-[10px] text-[#2EBA4A] font-medium">+5% vs ontem</p>
            </div>
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4">
              <p className="text-[11px] text-[#7A7A7A] mb-1">Aguard. peças</p>
              <h4 className="text-[24px] font-black text-white mb-2">4</h4>
              <p className="text-[10px] text-[#E50914] font-medium">-2% vs ontem</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4">
              <p className="text-[11px] text-[#7A7A7A] mb-1">Finalizados</p>
              <h4 className="text-[24px] font-black text-white mb-2">6</h4>
              <p className="text-[10px] text-[#2EBA4A] font-medium">+8% vs ontem</p>
            </div>
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute bottom-0 right-0 left-0 h-8 opacity-20">
                {/* Simula um gráfico com svg */}
                <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-[#E50914] fill-none" strokeWidth="3">
                  <path d="M0,30 L20,15 L40,25 L60,5 L80,10 L100,0" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[11px] text-[#7A7A7A] mb-1">Faturamento do dia</p>
                <h4 className="text-[20px] font-black text-white mb-2">R$ 8.450,00</h4>
                <p className="text-[10px] text-[#2EBA4A] font-medium">+15% vs ontem</p>
              </div>
            </div>
          </div>
        </div>

        {/* Novas solicitações */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-white">Novas solicitações</h3>
            <button 
              onClick={() => navigate('/pro/solicitacoes')}
              className="text-[12px] font-semibold text-[#E50914]"
            >
              Ver todas
            </button>
          </div>

          <div 
            onClick={() => navigate('/pro/solicitacao/1')}
            className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:bg-[#151515] transition-colors"
          >
            <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0">
              <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Veículo" />
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] font-semibold text-white mb-0.5">Honda Civic • ABC-1234</h4>
              <p className="text-[12px] text-[#B5B5B5] mb-2">Problema no freio<br/>Funilaria e pintura</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#7A7A7A]">2 min atrás</span>
                <span className="bg-[#E50914]/20 text-[#E50914] text-[9px] font-bold uppercase px-2 py-0.5 rounded border border-[#E50914]/30">Alta</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
