import { ChevronLeft, Search, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HistoricoServicos() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Histórico de serviços</h2>
      </div>

      <div className="p-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Buscar por oficina, serviço..."
            className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-white outline-none placeholder-text-tertiary"
          />
        </div>

        {/* Lista */}
        <div className="space-y-4">
          
          <div 
            onClick={() => navigate('/servico/detalhes')}
            className="bg-dark-800 border border-dark-500 rounded-2xl p-4 cursor-pointer hover:bg-dark-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-900 border border-dark-500 flex items-center justify-center shrink-0">
                  <span className="text-[16px]">🔧</span>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-white">Auto Center Prime</h3>
                  <p className="text-[12px] text-text-secondary">Troca de Parachoque</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-text-tertiary" />
            </div>
            
            <div className="flex justify-between items-center pt-3 border-t border-dark-500/50">
              <div className="flex items-center gap-1.5 text-text-secondary">
                <Calendar size={14} />
                <span className="text-[11px]">12 Mai 2024</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-white">R$ 1.250,00</span>
                <span className="text-[10px] font-medium bg-[#2EBA4A]/20 text-[#2EBA4A] px-2 py-0.5 rounded">Concluído</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 cursor-pointer hover:bg-dark-700 transition-colors opacity-70">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-900 border border-dark-500 flex items-center justify-center shrink-0">
                  <span className="text-[16px]">⚙️</span>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-white">Mecânica do Japa</h3>
                  <p className="text-[12px] text-text-secondary">Revisão de 40.000km</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-text-tertiary" />
            </div>
            
            <div className="flex justify-between items-center pt-3 border-t border-dark-500/50">
              <div className="flex items-center gap-1.5 text-text-secondary">
                <Calendar size={14} />
                <span className="text-[11px]">15 Fev 2024</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-white">R$ 850,00</span>
                <span className="text-[10px] font-medium bg-[#2EBA4A]/20 text-[#2EBA4A] px-2 py-0.5 rounded">Concluído</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
