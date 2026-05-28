import { useState } from 'react';
import { ChevronLeft, MoreVertical, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProServicoDetalhes() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Timeline');

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-24">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2 flex-1">Detalhes do serviço</h2>
        <button className="p-2 -mr-2 text-[#B5B5B5]">
          <MoreVertical size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="p-6">
        
        {/* Veículo Hero Info */}
        <div className="flex gap-4 items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-xl overflow-hidden shrink-0">
            <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Veículo" />
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] font-semibold text-white mb-0.5">Honda Civic • ABC-1234</h3>
            <p className="text-[12px] text-[#7A7A7A]">Cliente: Marcos Silva</p>
          </div>
          <span className="text-[12px] font-bold text-[#E50914]">Em reparo</span>
        </div>

        {/* Tabs */}
        <div className="flex justify-between border-b border-[#1B1B1B] mb-8">
          {['Timeline', 'Detalhes', 'Fotos', 'Peças'].map(t => (
            <button 
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-[13px] font-medium transition-colors ${tab === t ? 'text-white border-b-2 border-white' : 'text-[#7A7A7A]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        {tab === 'Timeline' && (
          <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-[#1B1B1B] before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#2EBA4A] bg-dark-900 text-[#2EBA4A] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-9">
                <Check size={12} strokeWidth={3} />
              </div>
              <div className="w-[calc(100%-1rem)] md:w-[calc(50%-2rem)]">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-semibold text-white">Veículo recebido</h4>
                  <time className="text-[11px] text-[#7A7A7A]">10/05/2024 08:30</time>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#2EBA4A] bg-dark-900 text-[#2EBA4A] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-9">
                <Check size={12} strokeWidth={3} />
              </div>
              <div className="w-[calc(100%-1rem)] md:w-[calc(50%-2rem)]">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-semibold text-white">Análise realizada</h4>
                  <time className="text-[11px] text-[#7A7A7A]">10/05/2024 09:15</time>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#1B1B1B] bg-dark-900 text-[#7A7A7A] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-9">
                <Check size={12} strokeWidth={3} />
              </div>
              <div className="w-[calc(100%-1rem)] md:w-[calc(50%-2rem)] opacity-50">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-semibold text-white">Aguardando peças</h4>
                  <time className="text-[11px] text-[#7A7A7A]">10/05/2024 11:30</time>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-dark-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-9">
              </div>
              <div className="w-[calc(100%-1rem)] md:w-[calc(50%-2rem)]">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-semibold text-white">Em reparo</h4>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#1B1B1B] bg-dark-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-9">
              </div>
              <div className="w-[calc(100%-1rem)] md:w-[calc(50%-2rem)] opacity-40">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-semibold text-white">Finalização</h4>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#1B1B1B] bg-dark-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-9">
              </div>
              <div className="w-[calc(100%-1rem)] md:w-[calc(50%-2rem)] opacity-40">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-semibold text-white">Pronto para retirada</h4>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0A0A0A] border-t border-[#1F1F1F] max-w-md mx-auto z-20 space-y-3">
        <button 
          onClick={() => navigate('/pro/status')}
          className="w-full bg-[#0F0F0F] border border-[#1B1B1B] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all"
        >
          Atualizar status
        </button>
        <button 
          onClick={() => navigate('/pro/chat')}
          className="w-full bg-[#E50914] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)]"
        >
          Conversar com cliente
        </button>
      </div>
    </div>
  );
}
