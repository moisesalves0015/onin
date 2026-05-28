import { ChevronLeft, Share, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OficinaPerfil() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('serviços');

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24">
      {/* Banner / Header */}
      <div className="relative h-55">
        <img 
          src="/images/workshop_prime_1779938586713.png" 
          alt="Oficina" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-transparent to-transparent" />
        
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <button onClick={() => navigate(-1)} className="p-2 text-white">
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <div className="flex gap-4">
            <button className="text-white">
              <Heart size={22} strokeWidth={2} />
            </button>
            <button className="text-white">
              <Share size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Info Card Flutuante */}
      <div className="px-6 -mt-8 relative z-10">
        <div className="bg-dark-900 flex flex-col">
          <div className="w-18 h-18 rounded-xl bg-dark-800 border border-dark-500 flex flex-col items-center justify-center p-1 mb-3">
             <span className="text-[12px] font-black text-white italic tracking-tighter leading-none">AUTO</span>
             <span className="text-[12px] font-black text-white italic tracking-tighter leading-none">CENTER</span>
             <span className="text-[12px] font-black text-primary-500 italic tracking-tighter leading-none">PRIME</span>
          </div>
          
          <h2 className="text-[22px] font-bold text-white mb-1">Auto Center Prime</h2>
          
          <div className="flex items-center text-[12px] text-text-secondary gap-2 mb-2">
            <span className="text-[#FFB800]">★ 4,8</span>
            <span>(215 avaliações)</span>
            <span className="bg-[#0038FF]/20 text-[#0066FF] px-2 py-0.5 rounded text-[10px] font-medium flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z" fill="#0066FF"/>
                <path d="M3.5 5L4.5 6L6.5 4" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Verificado
            </span>
          </div>
          
          <p className="text-[12px] text-text-secondary">1,2 km • Av. Paulista, 1000 - São Paulo, SP</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 mt-6 border-b border-dark-500">
        {['Serviços', 'Avaliações', 'Galeria', 'Sobre'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`flex-1 pb-3 text-[14px] font-medium transition-colors border-b-2 ${activeTab === tab.toLowerCase() ? 'border-primary-500 text-white' : 'border-transparent text-text-secondary'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conteúdo Aba */}
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-[15px] font-semibold text-white mb-2">Sobre a oficina</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed">
            Há mais de 15 anos oferecendo serviços de qualidade com honestidade e transparência. Trabalhamos com todas as marcas nacionais e importadas.
          </p>
        </div>
        
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-3">Especialidades</h3>
          <div className="flex flex-wrap gap-2">
            {['Mecânica geral', 'Funilaria', 'Pintura', 'Elétrica'].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-dark-800 border border-dark-500 rounded-lg text-[12px] text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto flex gap-3 z-20">
        <button className="flex-[0.4] bg-transparent text-white font-semibold py-4 rounded-xl border border-dark-500 transition-colors flex items-center justify-center gap-2">
          Chat
        </button>
        <button 
          onClick={() => navigate('/acompanhamento')}
          className="flex-1 bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all"
        >
          Solicitar orçamento
        </button>
      </div>
    </div>
  );
}
