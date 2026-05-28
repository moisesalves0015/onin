import { useState } from 'react';
import { ChevronLeft, MoreVertical, MapPin, Sparkles, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProSolicitacaoDetalhes() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Descrição');

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-24">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2 flex-1">Detalhes da solicitação</h2>
        <button className="p-2 -mr-2 text-[#B5B5B5]">
          <MoreVertical size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="p-6">
        
        {/* Veículo Hero Info */}
        <div className="flex gap-4 items-center mb-6">
          <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0">
            <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Veículo" />
          </div>
          <div className="flex-1">
            <h3 className="text-[16px] font-bold text-white mb-1.5">Honda Civic • ABC-1234</h3>
            <div className="flex gap-2 mb-1.5">
              <span className="text-[#E50914] bg-[#E50914]/10 border border-[#E50914]/30 text-[9px] font-bold uppercase px-2 py-0.5 rounded">Alta prioridade</span>
              <span className="text-[10px] text-[#7A7A7A]">2 min atrás</span>
            </div>
            <div className="flex items-center text-[11px] text-[#B5B5B5] gap-3">
              <span className="flex items-center gap-1"><MapPin size={12} className="text-[#E50914]" /> 2.3 km de distância</span>
              <span>São Paulo, SP</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#1B1B1B] mb-6">
          {['Fotos', 'Descrição', 'Histórico'].map(t => (
            <button 
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 pb-3 text-[13px] font-medium transition-colors ${tab === t ? 'text-[#E50914] border-b-2 border-[#E50914]' : 'text-[#7A7A7A]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === 'Descrição' && (
          <div className="space-y-6">
            
            {/* Fotos Thumbnails */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Carro" />
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <img src="/images/workshop_prime_1779938586713.png" className="w-full h-full object-cover" alt="Peça" />
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <img src="/images/auto_part_1779938601183.png" className="w-full h-full object-cover" alt="Roda" />
              </div>
              <div className="w-20 h-20 rounded-xl bg-[#0F0F0F] border border-[#1B1B1B] shrink-0 flex items-center justify-center text-[#7A7A7A] text-[16px] font-medium">
                +2
              </div>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-white mb-2">Descrição do cliente</h4>
              <p className="text-[13px] text-[#B5B5B5] leading-relaxed bg-[#0F0F0F] p-4 rounded-xl border border-[#1B1B1B]">
                Ao frear, o carro puxa para o lado direito e faz um barulho estranho.
              </p>
            </div>

            {/* AI Suggestion */}
            <div className="bg-[#0F0F0F] border border-[#E50914]/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(229,9,20,0.1)] relative overflow-hidden">
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles size={14} className="text-[#E50914]" />
                <span className="text-[11px] font-bold text-white tracking-wider">ONIN <span className="text-[#E50914]">sugere</span></span>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#B5B5B5] border border-[#333333] shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-[#7A7A7A] uppercase font-bold tracking-wider mb-0.5">Possível problema detectado</p>
                  <h4 className="text-[13px] font-semibold text-white leading-tight">Desgaste nos discos de freio e pastilhas</h4>
                  <p className="text-[12px] text-[#2EBA4A] font-medium mt-1">Confiança: 92%</p>
                </div>
                
                {/* Minimalist Progress Circle */}
                <div className="relative w-10 h-10 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1A1A1A" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E50914" strokeWidth="3" strokeDasharray="92, 100" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] text-[#7A7A7A] mb-0.5">Média de preço</p>
                <p className="text-[16px] font-bold text-white">R$ 450 - R$ 780</p>
              </div>
              <div>
                <p className="text-[11px] text-[#7A7A7A] mb-0.5">Tempo estimado</p>
                <p className="text-[16px] font-bold text-white">2 - 4 dias</p>
              </div>
            </div>
            
          </div>
        )}

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0A0A0A] border-t border-[#1F1F1F] max-w-md mx-auto z-20 space-y-3">
        <div className="flex gap-3">
          <button className="flex-1 bg-[#0F0F0F] border border-[#1B1B1B] text-white text-[13px] font-semibold py-3.5 rounded-xl active:scale-95 transition-all">
            Conversar
          </button>
          <button className="flex-1 bg-[#0F0F0F] border border-[#1B1B1B] text-white text-[13px] font-semibold py-3.5 rounded-xl active:scale-95 transition-all">
            Solicitar vistoria
          </button>
        </div>
        <button 
          onClick={() => navigate('/pro/orcamento/criar')}
          className="w-full bg-[#E50914] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)]"
        >
          Criar orçamento
        </button>
      </div>
    </div>
  );
}
