import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Atualizacoes() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('fotos');

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Atualizações do serviço</h2>
      </div>

      {/* Tabs */}
      <div className="flex px-6 mt-2 border-b border-dark-500">
        <button 
          onClick={() => setActiveTab('fotos')}
          className={`flex-1 pb-3 text-[14px] font-medium transition-colors border-b-2 ${activeTab === 'fotos' ? 'border-primary-500 text-white' : 'border-transparent text-text-secondary'}`}
        >
          Fotos
        </button>
        <button 
          onClick={() => setActiveTab('mensagens')}
          className={`flex-1 pb-3 text-[14px] font-medium transition-colors border-b-2 ${activeTab === 'mensagens' ? 'border-primary-500 text-white' : 'border-transparent text-text-secondary'}`}
        >
          Mensagens
        </button>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {activeTab === 'fotos' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-[14px] font-semibold text-white mb-3">Hoje</h3>
              <div className="grid grid-cols-2 gap-3">
                <img src="/images/auto_part_1779938601183.png" className="w-full h-30 object-cover rounded-xl border border-dark-500" alt="Foto" />
                <img src="/images/auto_part_1779938601183.png" className="w-full h-30 object-cover rounded-xl border border-dark-500" alt="Foto" />
                <img src="/images/workshop_prime_1779938586713.png" className="w-full h-35 object-cover rounded-xl border border-dark-500 col-span-2" alt="Foto" />
              </div>
            </div>
            
            <div>
              <h3 className="text-[14px] font-semibold text-white mb-3">Ontem</h3>
              <div className="grid grid-cols-2 gap-3">
                <img src="/images/splash_car_1779938551172.png" className="w-full h-30 object-cover rounded-xl border border-dark-500" alt="Foto" />
                <img src="/images/splash_car_1779938551172.png" className="w-full h-30 object-cover rounded-xl border border-dark-500" alt="Foto" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all">
          Enviar mensagem
        </button>
      </div>
    </div>
  );
}
