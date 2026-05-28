import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Marketplace() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-6 pb-4">
        <h2 className="text-[20px] font-bold text-white">Marketplace</h2>
        <div className="flex gap-4">
          <button className="text-text-secondary">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="relative text-text-secondary">
            <Bell size={22} strokeWidth={1.5} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary-500 rounded-full border border-dark-900"></span>
          </button>
        </div>
      </div>

      <div className="px-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Buscar peças, acessórios..."
            className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-white outline-none placeholder-text-tertiary"
          />
        </div>

        {/* Categorias */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-8 -mx-6 px-6">
          {[
            { label: 'Todas', icon: '88', active: true },
            { label: 'Motor', icon: '⚙️' },
            { label: 'Suspensão', icon: '🔩' },
            { label: 'Freios', icon: '🥏' },
            { label: 'Elétrica', icon: '⚡' },
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer shrink-0">
              <div className={`w-13 h-13 rounded-full flex items-center justify-center text-[18px] transition-all border ${cat.active ? 'bg-primary-500 border-primary-500 text-white' : 'bg-dark-800 border-dark-500 text-text-secondary'}`}>
                {cat.icon}
              </div>
              <span className={`text-[11px] font-medium ${cat.active ? 'text-white' : 'text-text-secondary'}`}>{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Cotações Recentes */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-white">Cotações recentes</h3>
            <span className="text-primary-500 text-[12px] font-medium cursor-pointer">Ver todas</span>
          </div>

          <div className="space-y-3">
            {/* Cotação 1 */}
            <div onClick={() => navigate('/produto/1')} className="bg-dark-800 border border-dark-500 rounded-2xl p-3 flex gap-3 items-center cursor-pointer hover:bg-dark-700 transition-colors">
              <img src="/images/auto_part_1779938601183.png" className="w-21 h-18 rounded-xl object-cover" alt="Peça" />
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="font-semibold text-white text-[14px] mb-0.5">Parachoque dianteiro</h4>
                <p className="text-[11px] text-text-secondary mb-2">Honda Civic 2018</p>
                <div>
                  <p className="text-[11px] text-text-secondary">3 cotações recebidas</p>
                  <p className="text-[11px] text-[#2EBA4A] mt-0.5">Menor preço: R$ 850,00</p>
                </div>
              </div>
            </div>

            {/* Cotação 2 */}
            <div className="bg-dark-800 border border-dark-500 rounded-2xl p-3 flex gap-3 items-center">
              <img src="/images/auto_part_1779938601183.png" className="w-21 h-18 rounded-xl object-cover opacity-60" alt="Peça" />
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="font-semibold text-white text-[14px] mb-0.5">Farol esquerdo</h4>
                <p className="text-[11px] text-text-secondary mb-2">Toyota Corolla 2020</p>
                <div>
                  <p className="text-[11px] text-text-secondary">5 cotações recebidas</p>
                  <p className="text-[11px] text-[#2EBA4A] mt-0.5">Menor preço: R$ 1.250,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar (above bottom navigation) */}
      <div className="fixed bottom-20 left-0 right-0 px-6 max-w-md mx-auto z-10 pointer-events-none">
        <button className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all pointer-events-auto shadow-red-glow">
          Nova cotação de peça
        </button>
      </div>
    </div>
  );
}
