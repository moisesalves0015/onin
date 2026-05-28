import { useState } from 'react';
import { Camera, ChevronLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SolicitarOrcamento() {
  const navigate = useNavigate();
  const [vistoria, setVistoria] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 relative pb-24">
      {/* Header */}
      <div className="flex items-center px-4 h-16 border-b border-dark-500 sticky top-0 z-10 bg-dark-900">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Solicitar orçamento</h2>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        
        {/* Photos */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[14px] font-medium text-white">Adicione fotos do problema</span>
            <span className="text-[12px] text-text-secondary">0/10</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            <div className="w-21 h-21 bg-dark-800 border border-dark-500 rounded-xl flex flex-col items-center justify-center gap-1 shrink-0">
              <Camera size={22} className="text-text-secondary" strokeWidth={1.5} />
              <span className="text-[11px] text-text-secondary font-medium">Adicionar</span>
            </div>
            <img src="/images/splash_car_1779938551172.png" className="w-21 h-21 rounded-xl object-cover shrink-0 border border-dark-500" alt="Exemplo" />
            <img src="/images/auto_part_1779938601183.png" className="w-21 h-21 rounded-xl object-cover shrink-0 border border-dark-500" alt="Exemplo 2" />
          </div>
        </div>

        {/* Categoria */}
        <div>
          <label className="block text-[13px] font-medium text-text-secondary mb-2">Categoria do serviço</label>
          <div className="relative">
            <select className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white appearance-none outline-none">
              <option>Funilaria e pintura</option>
              <option>Mecânica geral</option>
              <option>Revisão</option>
              <option>Suspensão e Freios</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-[13px] font-medium text-text-secondary mb-2">Descrição do problema</label>
          <textarea 
            className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none min-h-30 resize-none placeholder-text-tertiary"
            placeholder="Descreva o problema do seu veículo..."
          ></textarea>
        </div>

        {/* Localização */}
        <div>
          <label className="block text-[13px] font-medium text-text-secondary mb-2">Localização</label>
          <div className="relative">
            <input 
              type="text" 
              className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 pr-12 text-[14px] text-white outline-none"
              defaultValue="Av. Paulista, 1000 - São Paulo, SP"
            />
            <MapPin size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Vistoria Switch */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-[14px] font-medium text-white">Preciso de vistoria presencial</span>
          <div 
            onClick={() => setVistoria(!vistoria)}
            className={`w-11 h-6 rounded-full p-0.5 cursor-pointer transition-colors duration-200 ${vistoria ? 'bg-primary-500' : 'bg-dark-500'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${vistoria ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/processando')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Enviar solicitação
        </button>
      </div>
    </div>
  );
}
