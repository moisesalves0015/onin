import { ChevronLeft, Edit2, Trash2, ChevronDown, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ProCriarOrcamento() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/pro/orcamentos');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-28">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-[16px] font-semibold text-white ml-2">Criar orçamento</h2>
        </div>
        <button className="text-[12px] font-medium text-[#E50914] pr-2">
          Salvar rascunho
        </button>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Serviços */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[14px] font-bold text-white">Serviços</h3>
            <button className="text-[12px] font-medium text-[#E50914]">Adicionar serviço</button>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-[#1B1B1B] pb-3">
              <div>
                <p className="text-[13px] text-white font-medium mb-1">Troca de pastilhas e discos de freio</p>
                <p className="text-[13px] text-[#B5B5B5]">R$ 250,00</p>
              </div>
              <div className="flex gap-4 text-[#7A7A7A]">
                <Edit2 size={16} />
                <Trash2 size={16} />
              </div>
            </div>
            <div className="flex justify-between items-start border-b border-[#1B1B1B] pb-3">
              <div>
                <p className="text-[13px] text-white font-medium mb-1">Alinhamento</p>
                <p className="text-[13px] text-[#B5B5B5]">R$ 120,00</p>
              </div>
              <div className="flex gap-4 text-[#7A7A7A]">
                <Edit2 size={16} />
                <Trash2 size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Peças */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[14px] font-bold text-white">Peças</h3>
            <button className="text-[12px] font-medium text-[#E50914]">Adicionar peça</button>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-[#1B1B1B] pb-3">
              <div className="flex-1">
                <p className="text-[13px] text-white font-medium mb-1">Disco de freio dianteiro</p>
                <div className="flex justify-between items-center pr-4">
                  <p className="text-[12px] text-[#7A7A7A]">R$ 280,00</p>
                  <p className="text-[12px] text-[#7A7A7A]">Qtd: 2</p>
                  <p className="text-[13px] text-[#B5B5B5]">R$ 560,00</p>
                </div>
              </div>
              <div className="flex gap-4 text-[#7A7A7A] pt-1 shrink-0">
                <Trash2 size={16} />
              </div>
            </div>
            <div className="flex justify-between items-start border-b border-[#1B1B1B] pb-3">
              <div className="flex-1">
                <p className="text-[13px] text-white font-medium mb-1">Pastilha de freio</p>
                <div className="flex justify-between items-center pr-4">
                  <p className="text-[12px] text-[#7A7A7A]">R$ 120,00</p>
                  <p className="text-[12px] text-[#7A7A7A]">Qtd: 1</p>
                  <p className="text-[13px] text-[#B5B5B5]">R$ 120,00</p>
                </div>
              </div>
              <div className="flex gap-4 text-[#7A7A7A] pt-1 shrink-0">
                <Trash2 size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div className="bg-[#0F0F0F] rounded-2xl p-5 border border-[#1B1B1B]">
          <h3 className="text-[14px] font-bold text-white mb-4">Resumo</h3>
          <div className="space-y-2 mb-4 border-b border-[#1B1B1B] pb-4">
            <div className="flex justify-between items-center">
              <p className="text-[13px] text-[#7A7A7A]">Mão de obra</p>
              <p className="text-[13px] text-white">R$ 370,00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[13px] text-[#7A7A7A]">Peças</p>
              <p className="text-[13px] text-white">R$ 680,00</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-white">Total</p>
            <p className="text-[18px] font-black text-[#E50914]">R$ 1.050,00</p>
          </div>
        </div>

        {/* Detalhes extras */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[12px] text-[#7A7A7A] mb-1.5 block">Prazo estimado</label>
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-between p-3.5">
              <span className="text-[13px] text-white">2 a 3 dias úteis</span>
              <ChevronDown size={16} className="text-[#7A7A7A]" />
            </div>
          </div>
          <div>
            <label className="text-[12px] text-[#7A7A7A] mb-1.5 block">Garantia</label>
            <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-between p-3.5">
              <span className="text-[13px] text-white">90 dias</span>
              <ChevronDown size={16} className="text-[#7A7A7A]" />
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0A0A0A] border-t border-[#1F1F1F] max-w-md mx-auto z-20">
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="w-full bg-[#E50914] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] flex justify-center items-center h-13.5 disabled:opacity-70 disabled:active:scale-100"
        >
          {isLoading ? <Loader2 className="animate-spin" size={22} /> : 'Enviar orçamento'}
        </button>
      </div>
    </div>
  );
}
