import { useState } from 'react';
import { ChevronLeft, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProSolicitacoes() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todas');

  const reqs = [
    { id: 1, car: 'Honda Civic', plate: 'ABC-1234', problem: 'Problema no freio dianteiro', spec: 'Funilaria e pintura', prio: 'Alta', prioColor: 'text-[#E50914] bg-[#E50914]/20 border-[#E50914]/30', time: '2 min atrás', img: '/images/splash_car_1779938551172.png' },
    { id: 2, car: 'Toyota Corolla', plate: 'DEF-5678', problem: 'Barulho na suspensão', spec: 'Suspensão', prio: 'Média', prioColor: 'text-[#FFB800] bg-[#FFB800]/20 border-[#FFB800]/30', time: '8 min atrás', img: '/images/media__1779940025916.jpg' },
    { id: 3, car: 'Chevrolet Onix', plate: 'GHI-9012', problem: 'Revisão geral', spec: 'Mecânica geral', prio: 'Baixa', prioColor: 'text-[#2EBA4A] bg-[#2EBA4A]/20 border-[#2EBA4A]/30', time: '15 min atrás', img: '/images/workshop_prime_1779938586713.png' },
    { id: 4, car: 'Jeep Compass', plate: 'JKL-3456', problem: 'Luz do motor acesa', spec: 'Elétrica', prio: 'Média', prioColor: 'text-[#FFB800] bg-[#FFB800]/20 border-[#FFB800]/30', time: '25 min atrás', img: '/images/splash_car_1779938551172.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-8">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Novas solicitações</h2>
        <div className="flex-1"></div>
        <button className="p-2 -mr-2 text-[#B5B5B5]">
          <Filter size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="p-6">
        
        {/* Busca */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]" size={18} strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Buscar solicitações..."
            className="w-full bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-white outline-none focus:border-[#E50914] transition-colors placeholder-[#7A7A7A]"
          />
        </div>

        {/* Filtros */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
          <button 
            onClick={() => setFilter('Todas')}
            className={`px-4 py-2 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors ${filter === 'Todas' ? 'bg-[#E50914] text-white shadow-[0_0_10px_rgba(229,9,20,0.3)]' : 'bg-[#0F0F0F] text-[#B5B5B5] border border-[#1B1B1B]'}`}
          >
            Todas
          </button>
          
          <button 
            onClick={() => setFilter('Não lidas')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors ${filter === 'Não lidas' ? 'bg-[#E50914] text-white shadow-[0_0_10px_rgba(229,9,20,0.3)]' : 'bg-[#0F0F0F] text-[#B5B5B5] border border-[#1B1B1B]'}`}
          >
            Não lidas
            <span className="bg-[#E50914] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">8</span>
          </button>

          <button 
            onClick={() => setFilter('Alta prioridade')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors ${filter === 'Alta prioridade' ? 'bg-[#E50914] text-white shadow-[0_0_10px_rgba(229,9,20,0.3)]' : 'bg-[#0F0F0F] text-[#B5B5B5] border border-[#1B1B1B]'}`}
          >
            Alta prioridade
            <span className="bg-[#E50914] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </button>
        </div>

        {/* Lista */}
        <div className="space-y-3">
          {reqs.map(req => (
            <div 
              key={req.id}
              onClick={() => navigate(`/pro/solicitacao/${req.id}`)}
              className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:bg-[#151515] transition-colors"
            >
              <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0">
                <img src={req.img} className="w-full h-full object-cover" alt="Veículo" />
              </div>
              <div className="flex-1">
                <h4 className="text-[14px] font-semibold text-white mb-0.5">{req.car} • {req.plate}</h4>
                <p className="text-[12px] text-[#B5B5B5] leading-tight mb-2">
                  {req.problem}<br/>
                  <span className="text-[#7A7A7A] text-[11px]">{req.spec}</span>
                </p>
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${req.prioColor}`}>{req.prio}</span>
                  <span className="text-[10px] text-[#7A7A7A]">{req.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
