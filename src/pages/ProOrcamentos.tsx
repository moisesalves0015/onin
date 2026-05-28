import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProOrcamentos() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Ativos');

  const orcamentos = [
    { id: 1, car: 'Honda Civic', plate: 'ABC-1234', price: 'R$ 1.050,00', time: 'Enviado há 5 min', status: 'Visualizado', sColor: 'text-[#FFB800] border-[#FFB800]/30', img: '/images/splash_car_1779938551172.png' },
    { id: 2, car: 'Toyota Corolla', plate: 'DEF-5678', price: 'R$ 890,00', time: 'Enviado há 15 min', status: 'Aceito', sColor: 'text-[#2EBA4A] border-[#2EBA4A]/30', img: '/images/media__1779940025916.jpg' },
    { id: 3, car: 'Chevrolet Onix', plate: 'GHI-9012', price: 'R$ 650,00', time: 'Enviado há 2 horas', status: 'Enviado', sColor: 'text-[#3B82F6] border-[#3B82F6]/30', img: '/images/workshop_prime_1779938586713.png' },
    { id: 4, car: 'Jeep Compass', plate: 'JKL-3456', price: 'R$ 1.250,00', time: 'Enviado há 3 horas', status: 'Expirado', sColor: 'text-[#7A7A7A] border-[#7A7A7A]/30', img: '/images/splash_car_1779938551172.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-8">
      
      {/* Header */}
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-[#1B1B1B]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#B5B5B5]">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2 flex-1">Orçamentos enviados</h2>
      </div>

      <div className="p-6">
        
        {/* Tabs */}
        <div className="flex justify-between border-b border-[#1B1B1B] mb-6">
          {['Ativos', 'Aceitos', 'Recusados', 'Expirados'].map(t => (
            <button 
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-[12px] font-medium transition-colors ${tab === t ? 'text-[#E50914] border-b-2 border-[#E50914]' : 'text-[#7A7A7A]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Lista */}
        <div className="space-y-4">
          {orcamentos.map(orc => (
            <div 
              key={orc.id}
              className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:bg-[#151515] transition-colors"
            >
              <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0">
                <img src={orc.img} className="w-full h-full object-cover" alt="Veículo" />
              </div>
              <div className="flex-1">
                <h4 className="text-[13px] font-semibold text-white mb-0.5">{orc.car} • {orc.plate}</h4>
                <p className="text-[15px] font-bold text-white mb-2">{orc.price}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#7A7A7A]">{orc.time}</span>
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${orc.sColor}`}>
                    {orc.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
