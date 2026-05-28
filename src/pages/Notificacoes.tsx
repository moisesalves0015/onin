import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Notificacoes() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Notificações</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-6 py-2 overflow-x-auto no-scrollbar border-b border-dark-500 mb-2">
        <button className="px-4 py-1.5 bg-primary-500 text-white rounded-lg text-[13px] font-medium whitespace-nowrap">Todas</button>
        <button className="px-4 py-1.5 bg-dark-800 border border-dark-500 text-text-secondary rounded-lg text-[13px] font-medium whitespace-nowrap">Orçamentos</button>
        <button className="px-4 py-1.5 bg-dark-800 border border-dark-500 text-text-secondary rounded-lg text-[13px] font-medium whitespace-nowrap">Serviços</button>
        <button className="px-4 py-1.5 bg-dark-800 border border-dark-500 text-text-secondary rounded-lg text-[13px] font-medium whitespace-nowrap">Sistema</button>
      </div>

      {/* Lista */}
      <div className="flex-1 px-6">
        {/* Notificação 1 */}
        <div className="py-4 border-b border-dark-500/50 flex gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#0066FF]/20 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-semibold text-white text-[13px]">Novo orçamento recebido</h4>
              <span className="text-[11px] text-text-tertiary">Agora</span>
            </div>
            <p className="text-[12px] text-text-secondary leading-tight">Auto Center Prime enviou um orçamento para sua solicitação</p>
          </div>
        </div>

        {/* Notificação 2 */}
        <div className="py-4 border-b border-dark-500/50 flex gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#2EBA4A]/20 flex items-center justify-center shrink-0">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2EBA4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-semibold text-white text-[13px]">Status atualizado</h4>
              <span className="text-[11px] text-text-tertiary">2h</span>
            </div>
            <p className="text-[12px] text-text-secondary leading-tight">Seu serviço #ONIN-48739 foi atualizado para "Aguardando peças"</p>
          </div>
        </div>

        {/* Notificação 3 */}
        <div className="py-4 border-b border-dark-500/50 flex gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#FFB800]/20 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-semibold text-white text-[13px]">Mensagem da oficina</h4>
              <span className="text-[11px] text-text-tertiary">3h</span>
            </div>
            <p className="text-[12px] text-text-secondary leading-tight">Auto Center Prime enviou uma mensagem</p>
          </div>
        </div>

        {/* Notificação 4 */}
        <div className="py-4 border-b border-dark-500/50 flex gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center shrink-0">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-semibold text-white text-[13px]">Orçamento recebido</h4>
              <span className="text-[11px] text-text-tertiary">5h</span>
            </div>
            <p className="text-[12px] text-text-secondary leading-tight">Mecânica do Japa enviou um orçamento</p>
          </div>
        </div>

        {/* Notificação 5 */}
        <div className="py-4 border-b border-dark-500/50 flex gap-3">
          <div className="w-9 h-9 rounded-lg bg-dark-500 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-semibold text-white text-[13px]">Avalie seu atendimento</h4>
              <span className="text-[11px] text-text-tertiary">1d</span>
            </div>
            <p className="text-[12px] text-text-secondary leading-tight">Como foi sua experiência com a oficina?</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow">
          Marcar todas como lidas
        </button>
      </div>
    </div>
  );
}
