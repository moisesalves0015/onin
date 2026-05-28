import { Plus, Settings, Activity, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VeiculosGaragem() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-32 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-6 pb-4">
        <h2 className="text-[20px] font-bold text-white">Garagem</h2>
      </div>

      <div className="px-6 space-y-6">
        
        {/* Veículo Principal */}
        <div className="bg-dark-800 border border-dark-500 rounded-3xl overflow-hidden relative">
          <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-500 flex items-center justify-center text-white cursor-pointer">
            <Settings size={16} strokeWidth={2} />
          </div>
          
          <div className="h-40 bg-white relative">
            <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Carro" />
            <div className="absolute inset-0 bg-linear-to-t from-dark-800 to-transparent"></div>
          </div>
          
          <div className="p-5 relative -mt-6">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-[20px] font-black text-white leading-none mb-1">Honda Civic</h3>
                <p className="text-[13px] text-text-secondary">Touring 1.5 Turbo • 2018</p>
              </div>
              <span className="bg-dark-900 border border-dark-500 text-white font-mono text-[11px] font-bold px-2 py-1 rounded">ABC-1234</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark-900 border border-dark-500 rounded-xl p-3 flex gap-3 items-center">
                <div className="text-primary-500">
                  <Activity size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider mb-0.5">Quilometragem</p>
                  <p className="text-[13px] font-semibold text-white">42.500 km</p>
                </div>
              </div>
              <div className="bg-dark-900 border border-dark-500 rounded-xl p-3 flex gap-3 items-center">
                <div className="text-primary-500">
                  <Clock size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider mb-0.5">Última revisão</p>
                  <p className="text-[13px] font-semibold text-white">Há 3 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adicionar Novo */}
        <button 
          onClick={() => navigate('/veiculos/adicionar')}
          className="w-full bg-transparent border-2 border-dashed border-dark-500 hover:border-primary-500 text-text-secondary hover:text-white text-[14px] font-semibold py-6 rounded-2xl transition-all flex flex-col items-center justify-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
            <Plus size={20} strokeWidth={2} />
          </div>
          Adicionar novo veículo
        </button>

      </div>
    </div>
  );
}
