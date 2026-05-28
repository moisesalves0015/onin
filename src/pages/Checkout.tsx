import { ChevronLeft, MapPin, CreditCard, Wallet, BadgeCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-32 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Checkout</h2>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Endereço de Entrega */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-[15px] font-bold text-white">Endereço de entrega</h3>
            <button className="text-[12px] font-medium text-primary-500">Alterar</button>
          </div>
          
          <div className="bg-dark-800 border border-primary-500 rounded-2xl p-4 flex gap-4 items-start cursor-pointer transition-all">
            <div className="text-primary-500 shrink-0 mt-0.5">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-white mb-1">Casa</p>
              <p className="text-[12px] text-text-secondary leading-relaxed">Rua das Flores, 123 - Apto 45<br/>Bela Vista, São Paulo - SP<br/>01310-100</p>
            </div>
          </div>
        </div>

        {/* Forma de Pagamento */}
        <div>
          <h3 className="text-[15px] font-bold text-white mb-4">Forma de pagamento</h3>
          
          <div className="space-y-3">
            {/* Pix */}
            <div className="bg-dark-800 border border-primary-500 rounded-2xl p-4 flex justify-between items-center cursor-pointer transition-all">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center shrink-0">
                  <Wallet size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white mb-0.5">PIX</p>
                  <p className="text-[11px] text-[#2EBA4A] font-medium">Aprovação imediata + 5% OFF</p>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-4 border-primary-500"></div>
            </div>

            {/* Cartão */}
            <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 flex justify-between items-center cursor-pointer transition-all opacity-70 hover:opacity-100">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-dark-900 border border-dark-500 text-text-secondary flex items-center justify-center shrink-0">
                  <CreditCard size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white mb-0.5">Cartão de Crédito</p>
                  <p className="text-[11px] text-text-secondary">Em até 12x s/ juros</p>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border border-dark-500"></div>
            </div>
          </div>
        </div>

        {/* Resumo Final */}
        <div className="bg-dark-800 border border-dark-500 rounded-2xl p-5">
          <h3 className="text-[15px] font-bold text-white mb-4">Revisão do Pedido</h3>
          
          <div className="space-y-2 mb-4 pb-4 border-b border-dark-500/50">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-text-secondary">1x Parachoque Dianteiro Civic</span>
              <span className="text-white">R$ 850,00</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-text-secondary">Frete Normal</span>
              <span className="text-[#2EBA4A] font-medium">Grátis</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-text-secondary">Desconto Pix (5%)</span>
              <span className="text-primary-500 font-medium">- R$ 42,50</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[15px] font-bold text-white">Total a pagar</span>
            <span className="text-[22px] font-black text-white">R$ 807,50</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/marketplace')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow flex items-center justify-center gap-2"
        >
          <BadgeCheck size={20} />
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
