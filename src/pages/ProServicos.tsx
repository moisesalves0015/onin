import { useState } from 'react';
import { ChevronLeft, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProServicos() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todos');

  const servicos = [
    { id: 1, car: 'Honda Civic', plate: 'ABC-1234', client: 'Marcos Silva', status: 'Em reparo', sColor: 'text-[#E50914]', prev: '2 dias', progress: 60, pColor: 'bg-white', img: '/images/splash_car_1779938551172.png' },
    { id: 2, car: 'Toyota Corolla', plate: 'DEF-5678', client: 'Juliana Costa', status: 'Aguardando peças', sColor: 'text-[#FFB800]', prev: '3 dias', progress: 30, pColor: 'bg-white', img: '/images/media__1779940025916.jpg' },
    { id: 3, car: 'Chevrolet Onix', plate: 'GHI-9012', client: 'Carlos Alberto', status: 'Análise', sColor: 'text-[#B5B5B5]', prev: '1 dia', progress: 20, pColor: 'bg-white', img: '/images/workshop_prime_1779938586713.png' },
    { id: 4, car: 'Jeep Compass', plate: 'JKL-3456', client: 'Fernanda Lima', status: 'Finalização', sColor: 'text-[#E50914]', prev: 'Hoje', progress: 90, pColor: 'bg-[#E50914]', img: '/images/splash_car_1779938551172.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-8">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2 flex-1">Serviços em andamento</h2>
      </div>

      <div className="p-6">
        
        {/* Busca */}
        <div className="flex gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]" size={18} strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Buscar serviço..."
              className="w-full bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl py-3 pl-11 pr-4 text-[14px] text-white outline-none focus:border-[#E50914] transition-colors placeholder-[#7A7A7A]"
            />
          </div>
          <button className="w-12 h-11.5 bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-center text-[#B5B5B5] active:scale-95 transition-all">
            <Filter size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-6 pb-1">
          {['Todos', 'Análise', 'Aguard. peças', 'Reparo'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`pb-1 text-[13px] font-medium whitespace-nowrap transition-colors ${filter === f ? 'bg-[#E50914] px-4 py-1.5 rounded-full text-white shadow-[0_0_10px_rgba(229,9,20,0.3)]' : 'text-[#7A7A7A] py-1.5'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Lista */}
        <div className="space-y-4">
          {servicos.map(srv => (
            <div 
              key={srv.id}
              onClick={() => navigate(`/pro/servico/${srv.id}`)}
              className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 cursor-pointer hover:bg-[#151515] transition-colors"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0">
                  <img src={srv.img} className="w-full h-full object-cover" alt="Veículo" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[13px] font-semibold text-white mb-0.5">{srv.car} • {srv.plate}</h4>
                  <p className="text-[12px] text-[#7A7A7A] mb-2">Cliente: {srv.client}</p>
                  <p className={`text-[12px] font-bold ${srv.sColor} mb-1`}>{srv.status}</p>
                  <p className="text-[11px] text-[#B5B5B5]">Previsão: {srv.prev}</p>
                </div>
                <span className="text-[14px] font-bold text-white">{srv.progress}%</span>
              </div>
              
              <div className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden w-full">
                <div className={`h-full ${srv.pColor} rounded-full`} style={{ width: `${srv.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
