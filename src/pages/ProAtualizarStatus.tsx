import { useState } from 'react';
import { ChevronLeft, ChevronDown, Plus, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProAtualizarStatus() {
  const navigate = useNavigate();
  const [notify, setNotify] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-28">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2 flex-1">Atualizar status</h2>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Status Atual */}
        <div>
          <label className="text-[12px] text-[#7A7A7A] mb-2 block">Status atual</label>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E50914]"></div>
            <span className="text-[14px] font-bold text-white">Em reparo</span>
          </div>
        </div>

        {/* Novo Status */}
        <div>
          <label className="text-[12px] text-[#7A7A7A] mb-2 block">Novo status</label>
          <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-between p-4">
            <span className="text-[14px] text-white">Selecione o próximo status</span>
            <ChevronDown size={18} className="text-[#7A7A7A]" />
          </div>
        </div>

        {/* Adicionar observação */}
        <div>
          <label className="text-[12px] text-[#7A7A7A] mb-2 block">Adicionar observação</label>
          <textarea 
            placeholder="Descreva o que foi feito..."
            className="w-full bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl p-4 text-[14px] text-white outline-none focus:border-[#E50914] transition-colors placeholder-[#7A7A7A] min-h-25 resize-none"
          ></textarea>
        </div>

        {/* Fotos / Vídeos */}
        <div>
          <label className="text-[12px] text-[#7A7A7A] mb-2 block">Adicionar fotos/vídeos</label>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 border border-[#1B1B1B]">
              <img src="/images/auto_part_1779938601183.png" className="w-full h-full object-cover" alt="Thumb" />
            </div>
            <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 border border-[#1B1B1B]">
              <img src="/images/media__1779940025916.jpg" className="w-full h-full object-cover" alt="Thumb" />
            </div>
            <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 border border-[#1B1B1B]">
              <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover" alt="Thumb" />
            </div>
            <button className="w-18 h-18 rounded-xl bg-[#0F0F0F] border border-[#1B1B1B] shrink-0 flex items-center justify-center text-[#B5B5B5] hover:border-[#E50914] hover:text-[#E50914] transition-colors">
              <Plus size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Toggle Notificar */}
        <div className="flex justify-between items-center py-2">
          <label className="text-[14px] text-white font-medium">Notificar cliente</label>
          <div 
            onClick={() => setNotify(!notify)}
            className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${notify ? 'bg-[#E50914]' : 'bg-[#1B1B1B]'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${notify ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0A0A0A] border-t border-[#1F1F1F] max-w-md mx-auto z-20">
        <button 
          onClick={handleUpdate}
          disabled={isLoading}
          className="w-full bg-[#E50914] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] flex justify-center items-center h-13.5 disabled:opacity-70 disabled:active:scale-100"
        >
          {isLoading ? <Loader2 className="animate-spin" size={22} /> : 'Atualizar e notificar'}
        </button>
      </div>
    </div>
  );
}
