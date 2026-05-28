import { ChevronLeft, MoreVertical, Paperclip, Camera, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProChat() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-dark-900 animate-fade-in relative">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 shrink-0 bg-dark-900 border-b border-[#1B1B1B] z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center gap-3 ml-1 flex-1">
          <div className="relative">
            <div className="w-10 h-10 bg-[#0F0F0F] rounded-full border border-[#1B1B1B] flex items-center justify-center overflow-hidden">
               {/* Avatar */}
               <span className="text-[#B5B5B5] font-bold text-[14px]">MS</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#2EBA4A] rounded-full border-2 border-[#050505]"></div>
          </div>
          <div>
            <h2 className="text-[14px] font-semibold text-white leading-none mb-1">Marcos Silva</h2>
            <p className="text-[11px] text-[#2EBA4A]">Online</p>
          </div>
        </div>

        <button className="p-2 -mr-2 text-[#B5B5B5]">
          <MoreVertical size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        
        {/* Left Bubble */}
        <div className="flex flex-col items-start max-w-[80%]">
          <div className="bg-[#0F0F0F] border border-[#1B1B1B] text-white text-[13px] rounded-2xl rounded-tl-sm p-3 shadow-md">
            Bom dia! Alguma novidade sobre o meu carro?
          </div>
          <span className="text-[10px] text-[#7A7A7A] mt-1 ml-1">09:30</span>
        </div>

        {/* Right Bubble */}
        <div className="flex flex-col items-end w-full">
          <div className="flex flex-col items-end max-w-[80%]">
            <div className="bg-[#E50914] text-white text-[13px] rounded-2xl rounded-tr-sm p-3 shadow-md">
              Bom dia, Marcos! Estamos aguardando a peça chegar. Assim que chegar já iniciamos o reparo.
            </div>
            <div className="flex items-center gap-1 mt-1 mr-1">
              <span className="text-[10px] text-[#7A7A7A]">09:32</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#E50914]">
                <path d="M4 12L9 17L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 17L9 22L20 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Left Bubble */}
        <div className="flex flex-col items-start max-w-[80%]">
          <div className="bg-[#0F0F0F] border border-[#1B1B1B] text-white text-[13px] rounded-2xl rounded-tl-sm p-3 shadow-md">
            Ok, obrigado!
          </div>
          <span className="text-[10px] text-[#7A7A7A] mt-1 ml-1">09:33</span>
        </div>

        {/* Image Bubble (Left) */}
        <div className="flex flex-col items-start max-w-[70%] mt-4">
          <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl rounded-tl-sm p-1 shadow-md">
            <img src="/images/auto_part_1779938601183.png" className="w-full h-auto rounded-xl object-cover" alt="Anexo" />
          </div>
          <span className="text-[10px] text-[#7A7A7A] mt-1 ml-1">09:35</span>
        </div>

      </div>

      {/* Input Bottom */}
      <div className="shrink-0 bg-[#0A0A0A] border-t border-[#1F1F1F] p-4 pb-6 flex gap-3 items-center">
        <div className="flex-1 bg-[#0F0F0F] border border-[#1B1B1B] rounded-full flex items-center px-4 h-12">
          <input 
            type="text" 
            placeholder="Digite uma mensagem..."
            className="w-full bg-transparent text-[13px] text-white outline-none placeholder-[#7A7A7A]"
          />
          <button className="p-2 -mr-2 text-[#B5B5B5] hover:text-white transition-colors">
            <Paperclip size={18} strokeWidth={1.5} />
          </button>
          <button className="p-2 mr-1 text-[#B5B5B5] hover:text-white transition-colors">
            <Camera size={18} strokeWidth={1.5} />
          </button>
        </div>
        <button className="w-12 h-12 rounded-full bg-[#E50914] flex items-center justify-center text-white shrink-0 active:scale-95 transition-transform shadow-red-glow">
          <Mic size={20} />
        </button>
      </div>

    </div>
  );
}
