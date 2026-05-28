import { CheckCircle2, Download, Share2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Comprovante() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      <div className="flex items-center justify-between px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate('/home')} className="p-2 -ml-2 text-text-secondary">
          <ArrowLeft size={24} />
        </button>
        <div className="flex gap-2">
          <button className="p-2 text-text-secondary"><Share2 size={20} strokeWidth={1.5} /></button>
          <button className="p-2 text-text-secondary"><Download size={20} strokeWidth={1.5} /></button>
        </div>
      </div>

      <div className="px-6 pt-10 flex flex-col items-center flex-1">
        
        <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mb-6 text-primary-500 animate-bounce-short">
          <CheckCircle2 size={40} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-[24px] font-black text-white mb-2">Pagamento Aprovado!</h1>
        <p className="text-[14px] text-text-secondary text-center mb-10">Seu pedido foi confirmado e o pagamento processado com sucesso.</p>

        {/* Recibo Ticket */}
        <div className="w-full bg-white rounded-2xl p-6 relative overflow-hidden shadow-[0_10px_40px_rgba(229,9,20,0.1)]">
          {/* Bordas serrilhadas simuladas via CSS simplificado */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-[radial-gradient(circle,transparent_4px,#fff_5px)] bg-size-[12px_12px] -mt-1.5"></div>
          
          <div className="text-center border-b border-gray-200 pb-5 mb-5">
            <h3 className="text-[18px] font-black text-gray-900 uppercase tracking-widest mb-1">ONIN</h3>
            <p className="text-[11px] text-gray-500 font-mono">RECIBO #ONIN-847291</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Valor Pago</p>
                <p className="text-[24px] font-black text-gray-900 leading-none">R$ 807,50</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Data</p>
                <p className="text-[13px] font-bold text-gray-900">12 Mai 2024</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Método</p>
              <p className="text-[13px] font-semibold text-gray-900">PIX</p>
            </div>
            
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Para</p>
              <p className="text-[13px] font-semibold text-gray-900">AutoParts Oficial LTDA.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center mt-2 border border-gray-100">
            <div className="flex gap-1 items-center opacity-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`h-8 bg-gray-900 ${i % 3 === 0 ? 'w-1' : i % 2 === 0 ? 'w-2' : 'w-0.5'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/pedidos')}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow"
        >
          Acompanhar pedido
        </button>
      </div>
    </div>
  );
}
