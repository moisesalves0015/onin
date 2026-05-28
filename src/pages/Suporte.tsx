import { useState } from 'react';
import { ChevronLeft, HelpCircle, MessageCircle, FileText, ChevronRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Suporte() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'faq' | 'chamados'>('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { id: 1, q: 'Como funcionam os orçamentos?', a: 'Você envia uma solicitação com os detalhes do problema. Nossa IA e oficinas parceiras analisam e enviam propostas em poucas horas.' },
    { id: 2, q: 'Como solicitar um reembolso?', a: 'Acesse o menu "Pedidos", selecione o item desejado e clique em "Solicitar devolução". O prazo é de 7 dias após o recebimento.' },
    { id: 3, q: 'As peças têm garantia?', a: 'Sim, todas as peças compradas no Marketplace ONIN possuem garantia mínima de 90 dias contra defeitos de fabricação.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Ajuda e suporte</h2>
      </div>

      <div className="px-6 pt-6 flex-1">
        
        {/* Banner */}
        <div className="bg-linear-to-r from-primary-500 to-[#7a0309] rounded-2xl p-5 mb-6 shadow-red-glow">
          <HelpCircle size={32} className="text-white mb-3" strokeWidth={1.5} />
          <h3 className="text-[18px] font-bold text-white mb-1">Como podemos ajudar?</h3>
          <p className="text-[13px] text-white/80">Nossa equipe de especialistas está pronta para resolver qualquer problema.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-dark-500 mb-6">
          <button 
            onClick={() => setTab('faq')}
            className={`flex-1 pb-3 text-[14px] font-medium transition-colors ${tab === 'faq' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-text-secondary'}`}
          >
            Dúvidas frequentes
          </button>
          <button 
            onClick={() => setTab('chamados')}
            className={`flex-1 pb-3 text-[14px] font-medium transition-colors ${tab === 'chamados' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-text-secondary'}`}
          >
            Meus chamados
          </button>
        </div>

        {tab === 'faq' && (
          <div className="space-y-3 pb-24">
            {faqs.map(faq => (
              <div 
                key={faq.id} 
                className="bg-dark-800 border border-dark-500 rounded-xl overflow-hidden transition-all"
              >
                <div 
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="p-4 flex justify-between items-center cursor-pointer"
                >
                  <h4 className="text-[14px] font-medium text-white pr-4">{faq.q}</h4>
                  {openFaq === faq.id ? <ChevronDown size={20} className="text-primary-500 shrink-0" /> : <ChevronRight size={20} className="text-text-tertiary shrink-0" />}
                </div>
                {openFaq === faq.id && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-[13px] text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}

            <button 
              onClick={() => navigate('/chat/2')}
              className="w-full bg-dark-800 border border-dark-500 text-white text-[15px] font-semibold py-4 rounded-xl mt-6 active:scale-95 transition-all flex justify-center items-center gap-2 hover:bg-dark-700"
            >
              <MessageCircle size={20} /> Falar com atendente
            </button>
          </div>
        )}

        {tab === 'chamados' && (
          <div className="space-y-4 pb-24">
            <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-text-secondary" />
                  <span className="text-[14px] font-semibold text-white">Ticket #10492</span>
                </div>
                <span className="text-[10px] font-medium bg-[#FFB800]/20 text-[#FFB800] px-2 py-0.5 rounded uppercase">Em análise</span>
              </div>
              <p className="text-[13px] text-text-secondary mb-3">Problema com entrega de peça atrasada.</p>
              <p className="text-[11px] text-text-tertiary">Aberto em 12/05/2024</p>
            </div>
            
            <div className="bg-dark-800 border border-dark-500 rounded-2xl p-4 opacity-70">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-text-secondary" />
                  <span className="text-[14px] font-semibold text-white">Ticket #09312</span>
                </div>
                <span className="text-[10px] font-medium bg-[#2EBA4A]/20 text-[#2EBA4A] px-2 py-0.5 rounded uppercase">Resolvido</span>
              </div>
              <p className="text-[13px] text-text-secondary mb-3">Reembolso de serviço não prestado.</p>
              <p className="text-[11px] text-text-tertiary">Aberto em 05/04/2024</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
