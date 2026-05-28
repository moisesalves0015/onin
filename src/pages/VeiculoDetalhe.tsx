import { ChevronLeft, Edit2, Activity, Clock, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VeiculoDetalhe() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1"></div>
        <button className="p-2 -mr-2 text-primary-500">
          <Edit2 size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="w-full h-56 relative bg-white">
        <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Veículo" />
        <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[28px] font-black text-white leading-none mb-1">Honda Civic</h1>
              <p className="text-[14px] text-text-secondary">Touring 1.5 Turbo • 2018</p>
            </div>
            <span className="bg-dark-900 border border-dark-500 text-white font-mono text-[13px] font-bold px-3 py-1.5 rounded-lg shadow-lg">ABC-1234</span>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-6">
        
        {/* Status */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 flex gap-3 items-center">
            <div className="text-primary-500">
              <Activity size={20} strokeWidth={2} />
            </div>
            <div>
              <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider mb-0.5">Quilometragem</p>
              <p className="text-[15px] font-semibold text-white">42.500 km</p>
            </div>
          </div>
          <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 flex gap-3 items-center">
            <div className="text-primary-500">
              <Clock size={20} strokeWidth={2} />
            </div>
            <div>
              <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider mb-0.5">Última revisão</p>
              <p className="text-[15px] font-semibold text-white">12 Mai 2024</p>
            </div>
          </div>
        </div>

        {/* Serviços Recentes */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-white">Últimos serviços</h3>
            <button className="text-[13px] font-semibold text-primary-500">Ver todos</button>
          </div>
          
          <div className="space-y-3">
            <div className="bg-dark-800 border border-dark-500 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center text-text-secondary">
                  <Wrench size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-white mb-0.5">Troca de parachoque</h4>
                  <p className="text-[11px] text-text-tertiary">Auto Center Prime • 12 Mai 2024</p>
                </div>
              </div>
              <span className="text-[14px] font-bold text-white">R$ 1.250</span>
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/solicitar')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Novo serviço
        </button>
      </div>
    </div>
  );
}
