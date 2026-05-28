import { useState } from 'react';
import { ChevronLeft, Search, MessageSquarePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChatsList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const chats = [
    { id: 1, name: 'Auto Center Prime', lastMsg: 'Pode vir direto, procure pelo Roberto.', time: '09:48', unread: 2, image: '/images/workshop_prime_1779938586713.png' },
    { id: 2, name: 'Suporte ONIN', lastMsg: 'Seu reembolso foi processado com sucesso!', time: 'Ontem', unread: 0, image: null },
    { id: 3, name: 'AutoParts SP', lastMsg: 'O parachoque já foi despachado via transportadora.', time: '12 Mai', unread: 0, image: '/images/media__1779940025916.jpg' },
  ];

  const filtered = chats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Mensagens</h2>
      </div>

      <div className="p-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Buscar conversa..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 opacity-50">
            <MessageSquarePlus size={48} className="text-text-tertiary mb-4" strokeWidth={1} />
            <p className="text-[14px] text-text-secondary">Nenhuma conversa encontrada</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filtered.map(chat => (
              <div 
                key={chat.id}
                onClick={() => navigate(`/chat/${chat.id}`)}
                className="flex items-center gap-4 py-4 cursor-pointer hover:bg-dark-800 transition-colors border-b border-dark-500/50 last:border-0"
              >
                <div className="relative shrink-0">
                  {chat.image ? (
                    <img src={chat.image} className="w-14 h-14 rounded-full object-cover border border-dark-500" alt={chat.name} />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-[18px]">
                      {chat.name.charAt(0)}
                    </div>
                  )}
                  {chat.id === 1 && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#2EBA4A] rounded-full border-2 border-dark-900"></div>}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-white text-[15px] truncate pr-2">{chat.name}</h4>
                    <span className={`text-[11px] shrink-0 ${chat.unread > 0 ? 'text-primary-500 font-bold' : 'text-text-tertiary'}`}>{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`text-[13px] truncate pr-4 ${chat.unread > 0 ? 'text-white font-medium' : 'text-text-secondary'}`}>
                      {chat.lastMsg}
                    </p>
                    {chat.unread > 0 && (
                      <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
