import { useState } from 'react';
import { ChevronLeft, Heart, HeartOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Favoritos() {
  const navigate = useNavigate();
  const { favorites } = useAppContext();
  const [tab, setTab] = useState<'produtos' | 'oficinas'>('produtos');

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Favoritos</h2>
      </div>

      <div className="px-6 pt-6 flex-1">
        
        {/* Tabs */}
        <div className="flex border-b border-dark-500 mb-6">
          <button 
            onClick={() => setTab('produtos')}
            className={`flex-1 pb-3 text-[14px] font-medium transition-colors ${tab === 'produtos' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-text-secondary'}`}
          >
            Peças e Produtos
          </button>
          <button 
            onClick={() => setTab('oficinas')}
            className={`flex-1 pb-3 text-[14px] font-medium transition-colors ${tab === 'oficinas' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-text-secondary'}`}
          >
            Oficinas
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-32 opacity-50">
            <HeartOff size={48} className="text-text-tertiary mb-4" strokeWidth={1} />
            <h3 className="text-[16px] font-semibold text-white mb-1">Nenhum favorito ainda</h3>
            <p className="text-[13px] text-text-secondary text-center">Os produtos e oficinas que você curtir aparecerão aqui.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tab === 'produtos' && favorites.includes('prod_1') && (
              <div 
                onClick={() => navigate('/produto/1')}
                className="bg-dark-800 border border-dark-500 rounded-2xl p-3 flex gap-4 items-center cursor-pointer hover:bg-dark-700 transition-colors relative"
              >
                <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0">
                  <img src="/images/auto_part_1779938601183.png" className="w-full h-full object-cover" alt="Peça" />
                </div>
                <div className="flex-1 pr-6">
                  <h3 className="text-[13px] font-semibold text-white leading-tight mb-1">Parachoque Dianteiro Honda Civic</h3>
                  <p className="text-[15px] font-bold text-white">R$ 850,00</p>
                </div>
                <button className="absolute top-4 right-4 text-primary-500">
                  <Heart size={20} className="fill-primary-500" />
                </button>
              </div>
            )}
            
            {tab === 'oficinas' && favorites.includes('oficina_1') && (
              <div 
                onClick={() => navigate('/oficina/1')}
                className="bg-dark-800 border border-dark-500 rounded-2xl p-3 flex gap-4 items-center cursor-pointer hover:bg-dark-700 transition-colors relative"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src="/images/workshop_prime_1779938586713.png" className="w-full h-full object-cover" alt="Oficina" />
                </div>
                <div className="flex-1 pr-6">
                  <h3 className="text-[14px] font-bold text-white mb-1">Auto Center Prime</h3>
                  <p className="text-[11px] text-[#FFB800] font-medium">★ 4.8 (215 avaliações)</p>
                </div>
                <button className="absolute top-4 right-4 text-primary-500">
                  <Heart size={20} className="fill-primary-500" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
