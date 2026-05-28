import { useState } from 'react';
import { ChevronLeft, Share2, Heart, ShieldCheck, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DetalhesProduto() {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header Transparente */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-500 flex items-center justify-center text-white">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-500 flex items-center justify-center text-white">
            <Share2 size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-500 flex items-center justify-center text-white"
          >
            <Heart size={20} className={isFavorite ? "fill-primary-500 text-primary-500" : ""} strokeWidth={isFavorite ? 0 : 1.5} />
          </button>
        </div>
      </div>

      {/* Imagem do Produto */}
      <div className="w-full h-80 bg-white flex items-center justify-center relative">
        <img src="/images/auto_part_1779938601183.png" className="w-full h-full object-cover" alt="Produto" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
          <div className="w-2 h-2 rounded-full bg-dark-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-dark-500/50"></div>
        </div>
      </div>

      <div className="p-6">
        {/* Titulo e Preço */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-[20px] font-bold text-white leading-tight flex-1 pr-4">Parachoque Dianteiro Honda Civic 2017-2021 Original</h1>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#FFB800] text-[13px] font-medium">★ 4.9</span>
            <span className="text-text-secondary text-[12px]">(128 avaliações)</span>
            <span className="text-text-tertiary mx-1">•</span>
            <span className="text-[#2EBA4A] text-[12px] font-medium">Em estoque</span>
          </div>
          <p className="text-[28px] font-black text-white">R$ 850,00</p>
          <p className="text-[12px] text-text-secondary">em até 10x de R$ 85,00 sem juros</p>
        </div>

        {/* Frete e Garantia */}
        <div className="space-y-3 mb-8">
          <div className="bg-dark-800 border border-dark-500 rounded-xl p-4 flex gap-3 items-center">
            <Truck className="text-primary-500 shrink-0" size={24} strokeWidth={1.5} />
            <div>
              <p className="text-[13px] font-semibold text-white mb-0.5">Frete Grátis</p>
              <p className="text-[11px] text-text-secondary">Chega entre 15 e 18 de Maio</p>
            </div>
          </div>
          <div className="bg-dark-800 border border-dark-500 rounded-xl p-4 flex gap-3 items-center">
            <ShieldCheck className="text-primary-500 shrink-0" size={24} strokeWidth={1.5} />
            <div>
              <p className="text-[13px] font-semibold text-white mb-0.5">Compra Garantida ONIN</p>
              <p className="text-[11px] text-text-secondary">Receba o produto que está esperando ou devolvemos o dinheiro.</p>
            </div>
          </div>
        </div>

        {/* Compatibilidade */}
        <div className="mb-8">
          <h3 className="text-[16px] font-bold text-white mb-3">Compatibilidade</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-dark-800 border border-dark-500 text-text-secondary px-3 py-1.5 rounded-lg text-[12px]">Honda Civic 2017</span>
            <span className="bg-dark-800 border border-dark-500 text-text-secondary px-3 py-1.5 rounded-lg text-[12px]">Honda Civic 2018</span>
            <span className="bg-dark-800 border border-dark-500 text-text-secondary px-3 py-1.5 rounded-lg text-[12px]">Honda Civic 2019</span>
            <span className="bg-dark-800 border border-dark-500 text-text-secondary px-3 py-1.5 rounded-lg text-[12px]">Honda Civic 2020</span>
          </div>
        </div>

        {/* Descrição */}
        <div>
          <h3 className="text-[16px] font-bold text-white mb-3">Descrição</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed">
            Parachoque dianteiro original Honda, fabricado em plástico ABS de alta resistência. Encaixe perfeito, mantendo a originalidade do seu veículo. Não acompanha presilhas e faróis de neblina.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto flex gap-3 z-20">
        <button 
          onClick={() => navigate('/carrinho')}
          className="flex-1 bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
