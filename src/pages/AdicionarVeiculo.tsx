import { ChevronLeft, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdicionarVeiculo() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Adicionar veículo</h2>
      </div>

      <div className="p-6 space-y-6">
        
        {/* Foto */}
        <div>
          <label className="block text-[13px] font-medium text-text-secondary mb-2">Foto principal do veículo</label>
          <div className="w-full h-32 bg-dark-800 border-2 border-dashed border-dark-500 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary-500 transition-colors">
            <div className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center">
              <Camera size={20} className="text-text-secondary" strokeWidth={1.5} />
            </div>
            <span className="text-[12px] font-medium text-text-secondary">Tirar ou escolher foto</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-text-secondary mb-1.5">Placa</label>
            <input 
              type="text" 
              placeholder="ABC-1234"
              className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none uppercase placeholder-text-tertiary font-mono"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">Marca</label>
              <input 
                type="text" 
                placeholder="Ex: Honda"
                className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none placeholder-text-tertiary"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">Modelo</label>
              <input 
                type="text" 
                placeholder="Ex: Civic"
                className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none placeholder-text-tertiary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">Ano Fabricação</label>
              <input 
                type="number" 
                placeholder="2018"
                className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none placeholder-text-tertiary"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">Cor</label>
              <input 
                type="text" 
                placeholder="Ex: Preto"
                className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none placeholder-text-tertiary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/veiculos')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Salvar veículo
        </button>
      </div>
    </div>
  );
}
