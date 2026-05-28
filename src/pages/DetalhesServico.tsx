import { ChevronLeft, MessageCircle, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DetalhesServico() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Detalhes do serviço</h2>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Info Card */}
        <div className="bg-dark-800 border border-dark-500 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[12px] text-text-secondary mb-1">Status atual</p>
              <p className="text-[15px] font-bold text-[#FFB800]">Aguardando peças</p>
            </div>
            <span className="text-[11px] font-medium bg-dark-900 px-2 py-1 rounded text-text-secondary border border-dark-500">#ONIN-48739</span>
          </div>
          
          <div className="flex items-center gap-3">
            <img src="/images/splash_car_1779938551172.png" className="w-14 h-14 rounded-xl object-cover" alt="Veículo" />
            <div>
              <p className="text-[14px] font-bold text-white mb-0.5">Honda Civic</p>
              <p className="text-[12px] text-text-secondary">ABC-1234 • Cor: Preto</p>
            </div>
          </div>
        </div>

        {/* Previsão */}
        <div>
          <h3 className="text-[15px] font-bold text-white mb-4">Previsão e Valores</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[14px] text-text-secondary">Entrega estimada</span>
            <span className="text-[14px] font-semibold text-white">12/05/2024 às 16:00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-text-secondary">Valor do serviço</span>
            <span className="text-[14px] font-semibold text-white">R$ 1.250,00</span>
          </div>
        </div>

        {/* Peças utilizadas */}
        <div>
          <h3 className="text-[15px] font-bold text-white mb-4">Peças utilizadas</h3>
          <div className="space-y-3">
            <div className="bg-dark-900 border border-dark-500 rounded-xl p-3 flex gap-3 items-center">
              <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center">
                 <span className="text-[18px]">⚙️</span>
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-white mb-0.5">Parachoque dianteiro original</p>
                <p className="text-[11px] text-text-secondary">Fornecedor: AutoParts SP</p>
              </div>
            </div>
            <div className="bg-dark-900 border border-dark-500 rounded-xl p-3 flex gap-3 items-center">
              <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center">
                 <span className="text-[18px]">🔩</span>
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-white mb-0.5">Kit de presilhas frontais</p>
                <p className="text-[11px] text-text-secondary">Fornecedor: AutoParts SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Observações */}
        <div>
          <h3 className="text-[15px] font-bold text-white mb-4">Observações da oficina</h3>
          <p className="text-[13px] text-text-secondary bg-dark-800 p-4 rounded-xl border border-dark-500 leading-relaxed">
            As peças originais foram encomendadas e chegam amanhã de manhã. O veículo já foi desmontado e preparado para a pintura das novas peças.
          </p>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto flex gap-3 z-20">
        <button className="flex-1 bg-dark-800 text-white text-[15px] font-semibold py-4 rounded-xl border border-dark-500 hover:bg-dark-700 active:scale-95 transition-all flex items-center justify-center gap-2">
          <HelpCircle size={20} />
          Suporte
        </button>
        <button 
          onClick={() => navigate('/chat/1')}
          className="flex-[1.5] bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Falar com a oficina
        </button>
      </div>
    </div>
  );
}
