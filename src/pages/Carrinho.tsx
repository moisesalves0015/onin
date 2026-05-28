import { useState } from 'react';
import { ChevronLeft, Trash2, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
  const navigate = useNavigate();
  const [qtd, setQtd] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-32 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2 flex items-center gap-2">
          <ShoppingCart size={18} />
          Carrinho
        </h2>
      </div>

      <div className="p-6">
        {/* Lista de Itens */}
        <div className="space-y-4 mb-8">
          <div className="bg-dark-800 border border-dark-500 rounded-2xl p-3 flex gap-4">
            <div className="w-20 h-20 bg-white rounded-xl shrink-0 overflow-hidden">
              <img src="/images/auto_part_1779938601183.png" className="w-full h-full object-cover" alt="Produto" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-[13px] font-semibold text-white leading-tight pr-2">Parachoque Dianteiro Honda Civic</h3>
                  <button className="text-text-tertiary hover:text-primary-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-[15px] font-bold text-white mt-2">R$ 850,00</p>
              </div>
              
              <div className="flex justify-between items-end mt-2">
                <span className="text-[11px] text-text-secondary">Vendido por AutoParts</span>
                
                <div className="flex items-center gap-3 bg-dark-900 border border-dark-500 rounded-lg px-2 py-1">
                  <button 
                    onClick={() => setQtd(Math.max(1, qtd - 1))}
                    className="text-text-secondary active:scale-90"
                  >
                    <Minus size={14} strokeWidth={2} />
                  </button>
                  <span className="text-[13px] font-medium text-white min-w-3 text-center">{qtd}</span>
                  <button 
                    onClick={() => setQtd(qtd + 1)}
                    className="text-text-secondary active:scale-90"
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cupom */}
        <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 flex gap-3 mb-8">
          <input 
            type="text" 
            placeholder="Cupom de desconto"
            className="flex-1 bg-transparent text-[14px] text-white outline-none placeholder-text-tertiary"
          />
          <button className="text-[13px] font-bold text-primary-500">Aplicar</button>
        </div>

        {/* Resumo */}
        <div className="space-y-3">
          <h3 className="text-[16px] font-bold text-white mb-2">Resumo do pedido</h3>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-text-secondary">Subtotal (1 item)</span>
            <span className="text-white">R$ 850,00</span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-text-secondary">Frete</span>
            <span className="text-[#2EBA4A] font-medium">Grátis</span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-text-secondary">Descontos</span>
            <span className="text-white">R$ 0,00</span>
          </div>
          
          <div className="border-t border-dark-500 pt-3 mt-3 flex justify-between items-center">
            <span className="text-[15px] font-bold text-white">Total</span>
            <span className="text-[20px] font-black text-white">R$ 850,00</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Ir para pagamento
        </button>
      </div>
    </div>
  );
}
