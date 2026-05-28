import { ChevronLeft, Calendar, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ConfirmacaoServico() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Confirmar serviço</h2>
      </div>

      <div className="p-6">
        <h3 className="text-[20px] font-bold text-white mb-6">Resumo da contratação</h3>

        {/* Info Blocks */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center shrink-0 border border-dark-500">
              <Car className="text-text-secondary" size={20} />
            </div>
            <div>
              <p className="text-[12px] text-text-secondary mb-0.5">Veículo selecionado</p>
              <p className="text-[14px] font-semibold text-white">Honda Civic • ABC-1234</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <img src="/images/workshop_prime_1779938586713.png" className="w-12 h-12 rounded-xl object-cover border border-dark-500" alt="Oficina" />
            <div>
              <p className="text-[12px] text-text-secondary mb-0.5">Oficina escolhida</p>
              <p className="text-[14px] font-semibold text-white">Auto Center Prime</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center shrink-0 border border-dark-500">
              <Calendar className="text-text-secondary" size={20} />
            </div>
            <div>
              <p className="text-[12px] text-text-secondary mb-0.5">Prazo estimado</p>
              <p className="text-[14px] font-semibold text-white">2 dias úteis</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center shrink-0 border border-dark-500">
              <MapPin className="text-text-secondary" size={20} />
            </div>
            <div>
              <p className="text-[12px] text-text-secondary mb-0.5">Endereço de entrega</p>
              <p className="text-[14px] font-semibold text-white leading-tight">Av. Paulista, 1000<br/>São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="bg-dark-800 rounded-2xl p-5 border border-dark-500">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-dark-500/50">
            <span className="text-[14px] text-text-secondary">Subtotal do serviço</span>
            <span className="text-[14px] font-medium text-white">R$ 1.250,00</span>
          </div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-dark-500/50">
            <span className="text-[14px] text-text-secondary">Taxa de conveniência</span>
            <span className="text-[14px] font-medium text-white">R$ 25,00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-bold text-white">Total a pagar na retirada</span>
            <span className="text-[20px] font-bold text-primary-500">R$ 1.275,00</span>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/acompanhamento')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Confirmar serviço
        </button>
      </div>
    </div>
  );
}
