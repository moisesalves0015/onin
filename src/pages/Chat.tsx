import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Paperclip, Send, Phone, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Chat() {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 relative">
      {/* Header */}
      <div className="flex items-center px-4 h-18 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-3 ml-2 flex-1">
          <img src="/images/workshop_prime_1779938586713.png" className="w-10 h-10 rounded-full object-cover border border-dark-500" alt="Oficina" />
          <div>
            <h2 className="text-[15px] font-bold text-white leading-tight">Auto Center Prime</h2>
            <p className="text-[11px] text-[#2EBA4A] font-medium">Online</p>
          </div>
        </div>
        <div className="flex gap-2 text-text-secondary">
          <button className="p-2"><Phone size={20} strokeWidth={1.5} /></button>
          <button className="p-2"><MoreVertical size={20} strokeWidth={1.5} /></button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        
        {/* Date Separator */}
        <div className="flex justify-center my-4">
          <span className="text-[10px] font-medium text-text-tertiary bg-dark-800 px-3 py-1 rounded-full border border-dark-500">
            HOJE
          </span>
        </div>

        {/* Msg Oficina */}
        <div className="flex gap-3">
          <img src="/images/workshop_prime_1779938586713.png" className="w-8 h-8 rounded-full object-cover shrink-0 mt-auto border border-dark-500" alt="Oficina" />
          <div className="bg-dark-800 border border-dark-500 rounded-2xl rounded-bl-none px-4 py-3 max-w-[80%]">
            <p className="text-[14px] text-white leading-relaxed">Olá Marcos! Recebemos sua solicitação de orçamento. O parachoque está bem danificado. Acha que consegue trazer o carro amanhã cedo para uma vistoria rápida?</p>
            <span className="text-[10px] text-text-tertiary block text-right mt-1">09:41</span>
          </div>
        </div>

        {/* Msg User */}
        <div className="flex justify-end gap-3">
          <div className="bg-primary-500 rounded-2xl rounded-br-none px-4 py-3 max-w-[80%] shadow-red-glow/20 shadow-lg">
            <p className="text-[14px] text-white leading-relaxed">Consigo sim! Que horas a oficina abre?</p>
            <span className="text-[10px] text-white/70 block text-right mt-1">09:45</span>
          </div>
        </div>

        {/* Msg Oficina */}
        <div className="flex gap-3">
          <img src="/images/workshop_prime_1779938586713.png" className="w-8 h-8 rounded-full object-cover shrink-0 mt-auto border border-dark-500" alt="Oficina" />
          <div className="bg-dark-800 border border-dark-500 rounded-2xl rounded-bl-none px-4 py-3 max-w-[80%]">
            <p className="text-[14px] text-white leading-relaxed">Abrimos às 08:00. Pode vir direto, procure pelo Roberto.</p>
            <span className="text-[10px] text-text-tertiary block text-right mt-1">09:48</span>
          </div>
        </div>
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20 pb-safe">
        <div className="flex items-center gap-3">
          <button className="p-2 text-text-secondary hover:text-white transition-colors shrink-0">
            <Paperclip size={22} strokeWidth={1.5} />
          </button>
          <div className="flex-1 bg-dark-800 border border-dark-500 rounded-full flex items-center px-4 py-1">
            <input 
              type="text" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-transparent border-none outline-none text-[14px] text-white py-2 placeholder-text-tertiary"
            />
          </div>
          <button className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${newMessage.trim() ? 'bg-primary-500 text-white shadow-red-glow' : 'bg-dark-800 border border-dark-500 text-text-tertiary'}`}>
            <Send size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
