import { useState } from 'react';
import { ChevronLeft, Search, Filter, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OficinasList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todas');

  const oficinas = [
    { id: 1, name: 'Auto Center Prime', dist: '1,2 km', rating: 4.8, reviews: 215, spec: 'Mecânica Geral', image: '/images/workshop_prime_1779938586713.png' },
    { id: 2, name: 'Mecânica do Japa', dist: '2,5 km', rating: 4.7, reviews: 128, spec: 'Revisão e Freios', image: '/images/splash_car_1779938551172.png' },
    { id: 3, name: 'Elite Motors', dist: '3,8 km', rating: 4.9, reviews: 412, spec: 'Estética Automotiva', image: '/images/media__1779940025916.jpg' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Oficinas próximas</h2>
      </div>

      <div className="p-6">
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Buscar oficina..."
              className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3 pl-11 pr-4 text-[14px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
            />
          </div>
          <button className="w-12 h-11.5 bg-dark-800 border border-dark-500 rounded-xl flex items-center justify-center text-text-secondary active:scale-95 transition-all">
            <Filter size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
          {['Todas', 'Mais próximas', 'Melhor avaliação', 'Especializadas'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors ${filter === f ? 'bg-primary-500 text-white shadow-red-glow' : 'bg-dark-800 text-text-secondary border border-dark-500'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {oficinas.map(of => (
            <div 
              key={of.id}
              onClick={() => navigate(`/oficina/${of.id}`)}
              className="bg-dark-800 rounded-2xl p-3 border border-dark-500 cursor-pointer hover:bg-dark-700 transition-colors"
            >
              <div className="flex gap-3">
                <img src={of.image} className="w-24 h-24 rounded-xl object-cover" alt="Workshop" />
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-bold text-white text-[15px] mb-1">{of.name}</h4>
                    <p className="text-[12px] text-text-secondary truncate">{of.spec}</p>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex items-center text-[12px] text-text-secondary">
                      <Star size={14} className="text-[#FFB800] fill-[#FFB800] mr-1" />
                      <span className="font-medium text-white">{of.rating}</span>
                      <span className="ml-1">({of.reviews})</span>
                    </div>
                    <div className="flex items-center text-[12px] text-text-secondary">
                      <MapPin size={14} className="mr-1" />
                      <span>{of.dist}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
