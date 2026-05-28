import { ChevronLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DetalhesOrcamento() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Detalhes do orçamento</h2>
      </div>

      <div className="p-6">
        {/* Header Oficina */}
        <div className="flex items-center gap-4 mb-8">
          <img src="/images/workshop_prime_1779938586713.png" className="w-16 h-16 rounded-xl object-cover border border-dark-500" alt="Oficina" />
          <div>
            <h3 className="text-[18px] font-bold text-white mb-1">Auto Center Prime</h3>
            <div className="flex items-center text-[12px] text-text-secondary gap-2">
              <span className="text-[#FFB800]">★ 4,8</span>
              <span>1,2 km de distância</span>
            </div>
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="bg-dark-800 rounded-2xl p-5 border border-dark-500 mb-6">
          <p className="text-[13px] text-text-secondary mb-1">Valor total estimado</p>
          <p className="text-[32px] font-bold text-white mb-6">R$ 1.250,00</p>
          
          <div className="space-y-3">
            <div className="flex justify-between text-[13px]">
              <span className="text-text-secondary">Mão de obra</span>
              <span className="text-white font-medium">R$ 450,00</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-text-secondary">Peças (Parachoque + presilhas)</span>
              <span className="text-white font-medium">R$ 800,00</span>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-dark-800 border border-dark-500 flex items-center justify-center shrink-0">
              <span className="text-[16px]">⏱️</span>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-0.5">Prazo de entrega</h4>
              <p className="text-[12px] text-text-secondary">2 dias úteis após a aprovação</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-dark-800 border border-dark-500 flex items-center justify-center shrink-0">
              <span className="text-[16px]">🛡️</span>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-0.5">Garantia</h4>
              <p className="text-[12px] text-text-secondary">90 dias para peças e mão de obra</p>
            </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto flex gap-3 z-20">
        <button 
          onClick={() => navigate('/chat/1')}
          className="flex-[0.3] bg-dark-800 text-white font-semibold py-4 rounded-xl border border-dark-500 hover:bg-dark-700 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
        </button>
        <button 
          onClick={() => navigate('/confirmacao')}
          className="flex-1 bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow flex items-center justify-center gap-2"
        >
          <CheckCircle2 size={20} />
          Aceitar orçamento
        </button>
      </div>
    </div>
  );
}
