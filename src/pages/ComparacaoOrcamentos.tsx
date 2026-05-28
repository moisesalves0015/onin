import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ComparacaoOrcamentos() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-8 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Comparar orçamentos</h2>
      </div>

      <div className="p-6 flex-1">
        <p className="text-[14px] text-text-secondary mb-6 text-center">Compare as propostas recebidas e escolha a melhor opção para você.</p>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Opção A */}
          <div className="border border-primary-500 bg-primary-500/5 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-500 flex items-center justify-center mb-3 text-[20px] overflow-hidden">
                <img src="/images/workshop_prime_1779938586713.png" className="w-full h-full object-cover" alt="Oficina" />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-1 leading-tight">Auto Center Prime</h3>
              <p className="text-[12px] text-[#FFB800] mb-4">★ 4.8 (215)</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Valor total</p>
                  <p className="text-[18px] font-black text-white">R$ 1.250</p>
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Prazo</p>
                  <p className="text-[13px] font-semibold text-white">2 dias úteis</p>
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Distância</p>
                  <p className="text-[13px] font-semibold text-white">1,2 km</p>
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Garantia</p>
                  <p className="text-[13px] font-semibold text-white">90 dias</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/orcamento/1')}
              className="w-full bg-primary-500 text-white text-[13px] font-semibold py-3 rounded-xl active:scale-95 transition-all shadow-red-glow flex justify-center items-center gap-1.5"
            >
              <CheckCircle2 size={16} /> Ver detalhes
            </button>
          </div>

          {/* Opção B */}
          <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div>
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-500 flex items-center justify-center mb-3 text-[20px] overflow-hidden">
                <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Oficina" />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-1 leading-tight">Mecânica do Japa</h3>
              <p className="text-[12px] text-[#FFB800] mb-4">★ 4.7 (128)</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Valor total</p>
                  <p className="text-[18px] font-black text-white">R$ 980</p>
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Prazo</p>
                  <p className="text-[13px] font-semibold text-white">4 dias úteis</p>
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Distância</p>
                  <p className="text-[13px] font-semibold text-white">2,5 km</p>
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">Garantia</p>
                  <p className="text-[13px] font-semibold text-white">30 dias</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/orcamento/2')}
              className="w-full bg-dark-900 border border-dark-500 text-white text-[13px] font-semibold py-3 rounded-xl active:scale-95 transition-all hover:bg-dark-700"
            >
              Ver detalhes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
