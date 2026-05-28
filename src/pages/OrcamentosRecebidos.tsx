import { useState } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OrcamentosRecebidos() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('recebidos');

  const orcamentos = [
    {
      id: 1,
      nome: 'Auto Center Prime',
      nota: 4.8,
      avaliacoes: 215,
      distancia: '1,2 km',
      preco: 'R$ 1.250,00',
      prazo: '2 dias úteis',
      tag: 'Mais barato',
      verificado: false,
    },
    {
      id: 2,
      nome: 'Oficina do Alê',
      nota: 4.6,
      avaliacoes: 89,
      distancia: '2,1 km',
      preco: 'R$ 1.450,00',
      prazo: '3 dias úteis',
    },
    {
      id: 3,
      nome: 'Mecânica do Japa',
      nota: 4.7,
      avaliacoes: 128,
      distancia: '2,5 km',
      preco: 'R$ 1.650,00',
      prazo: '2 dias úteis',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Orçamentos recebidos</h2>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-dark-500 mx-6 mt-2">
        <button 
          onClick={() => setActiveTab('recebidos')}
          className={`flex-1 pb-3 text-[14px] font-medium transition-colors border-b-2 ${activeTab === 'recebidos' ? 'border-primary-500 text-white' : 'border-transparent text-text-secondary'}`}
        >
          Recebidos (5)
        </button>
        <button 
          onClick={() => setActiveTab('vistoria')}
          className={`flex-1 pb-3 text-[14px] font-medium transition-colors border-b-2 ${activeTab === 'vistoria' ? 'border-primary-500 text-white' : 'border-transparent text-text-secondary'}`}
        >
          Vistoria (2)
        </button>
      </div>

      {/* Lista */}
      <div className="flex-1 overflow-y-auto">
        {orcamentos.map((orc, index) => (
          <div key={orc.id} className={`p-6 ${index !== orcamentos.length - 1 ? 'border-b border-dark-500' : ''}`}>
            
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-white text-[15px]">{orc.nome}</h3>
              <span className="text-[12px] text-text-secondary">{orc.distancia}</span>
            </div>
            
            <div className="flex items-center text-[12px] text-text-secondary mb-4">
              <span className="text-[#FFB800] mr-1">★ {orc.nota}</span>
              <span>({orc.avaliacoes})</span>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[16px] font-bold text-white mb-1">{orc.preco}</p>
                <p className="text-[12px] text-text-secondary mb-2">Prazo: {orc.prazo}</p>
                {orc.tag && (
                  <span className="inline-block bg-[#005C12]/20 border border-[#005C12]/30 text-[#2EBA4A] text-[10px] font-medium px-2 py-0.5 rounded">
                    {orc.tag}
                  </span>
                )}
              </div>
              <button 
                onClick={() => navigate(`/orcamento/${orc.id}`)}
                className="bg-primary-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold active:scale-95 transition-all"
              >
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
        
        {/* Ordenar */}
        <div className="p-6 pt-2 flex items-center gap-2 cursor-pointer w-max">
          <span className="text-[12px] text-text-secondary">Ordenar por:</span>
          <span className="text-[12px] text-white flex items-center gap-1">Relevância <ChevronDown size={14} /></span>
        </div>
      </div>
    </div>
  );
}
