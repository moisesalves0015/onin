import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Acompanhamento() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 relative pb-24">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Acompanhamento</h2>
      </div>

      <div className="p-6 pb-2 border-b border-dark-500">
        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="text-[12px] text-text-secondary mb-1">Ordem de serviço</p>
            <p className="text-[14px] font-bold text-white">#ONIN-48739</p>
          </div>
          <span className="border border-[#FFB800] text-[#FFB800] text-[10px] font-medium px-3 py-1 rounded-full">
            Em andamento
          </span>
        </div>
        <div className="mb-5">
          <p className="text-[12px] text-text-secondary mb-1">Oficina</p>
          <p className="text-[14px] font-bold text-white">Auto Center Prime</p>
        </div>
        <div className="mb-4">
          <p className="text-[12px] text-text-secondary mb-1">Veículo</p>
          <p className="text-[14px] font-bold text-white">Honda Civic • ABC-1234</p>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="absolute left-8.75 top-8 bottom-17.5 w-px bg-dark-500"></div>
        <div className="absolute left-8.75 top-8 h-30 w-px bg-[#2EBA4A]"></div>

        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex gap-4 relative z-10 items-start">
            <div className="bg-dark-900 py-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#2EBA4A"/>
                <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-white">Veículo recebido</p>
              <p className="text-[12px] text-text-secondary">10/05/2024 08:30</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 relative z-10 items-start">
            <div className="bg-dark-900 py-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#2EBA4A"/>
                <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-white">Em análise</p>
              <p className="text-[12px] text-text-secondary">10/05/2024 09:15</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 relative z-10 items-start">
            <div className="bg-dark-900 py-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FFB800"/>
                <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#FFB800]">Aguardando peças</p>
              <p className="text-[12px] text-text-secondary">10/05/2024 11:30</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-4 relative z-10 items-center h-7">
            <div className="bg-dark-900 py-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="#1B1B1B"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-medium text-text-secondary">Em reparo</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex gap-4 relative z-10 items-center h-7">
            <div className="bg-dark-900 py-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="#1B1B1B"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-medium text-text-secondary">Finalização</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex gap-4 relative z-10 items-center h-7">
            <div className="bg-dark-900 py-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="#1B1B1B"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-medium text-text-secondary">Pronto para retirada</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/servico/detalhes')}
          className="w-full bg-transparent border border-dark-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all hover:bg-dark-800"
        >
          Ver detalhes do serviço
        </button>
      </div>
    </div>
  );
}
