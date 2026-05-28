import { Bell, ArrowRight, MapPin, Clock, Sparkles, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pb-2">
        <h1 className="text-2xl font-bold tracking-widest text-white leading-none">
          <span className="text-primary-500">O</span>NIN
        </h1>
        <button 
          onClick={() => navigate('/notificacoes')} 
          className="relative text-white"
        >
          <Bell size={22} strokeWidth={1.5} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-primary-500 rounded-full border border-dark-900"></span>
        </button>
      </div>

      <div className="px-6 pt-4">
        {/* Saudação */}
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-white tracking-tight">Olá, Marcos! 👋</h2>
          <p className="text-[14px] text-text-secondary mt-1">O que você precisa hoje?</p>
        </div>

        {/* Card Principal */}
        <div 
          onClick={() => navigate('/solicitar')}
          className="bg-linear-to-r from-primary-500 to-dark-800 rounded-3xl p-5 mb-8 cursor-pointer shadow-red-glow relative overflow-hidden"
        >
          <div className="relative z-10 w-[80%]">
            <h3 className="text-lg font-bold text-white mb-1">Solicitar orçamento</h3>
            <p className="text-white/80 text-[12px] leading-tight">
              Envie fotos do problema e receba orçamentos de oficinas próximas.
            </p>
          </div>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ArrowRight className="text-white" size={16} />
          </div>
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { icon: MapPin, label: 'Oficinas próximas' },
            { icon: Clock, label: 'Serviços rápidos' },
            { icon: Sparkles, label: 'Estética automotiva' },
            { icon: Settings, label: 'Peças e acessórios' },
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer">
              <div className="w-16 h-16 bg-dark-800 border border-dark-500 rounded-2xl flex items-center justify-center">
                <cat.icon size={24} className="text-text-secondary" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] text-center text-text-secondary leading-tight max-w-15">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Recomendadas */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-white">Oficinas recomendadas</h3>
            <span className="text-primary-500 text-[13px] font-medium cursor-pointer">Ver todas</span>
          </div>
          
          <div className="space-y-3">
            {/* Card Oficina 1 */}
            <div className="bg-dark-800 rounded-2xl p-3 flex gap-3 border border-dark-500 cursor-pointer">
              <img 
                src="/images/workshop_prime_1779938586713.png" 
                className="w-21 h-18 rounded-xl object-cover"
                alt="Workshop" 
              />
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-white text-[14px]">Auto Center Prime</h4>
                  <span className="text-[11px] text-text-secondary">1,2 km</span>
                </div>
                <div className="flex items-center text-[11px] text-text-secondary mt-0.5">
                  <span className="text-[#FFB800] mr-1">★ 4,8</span>
                  <span>(215)</span>
                </div>
                <p className="text-[11px] text-text-secondary mt-1 truncate">Especialista em mecânica geral</p>
              </div>
            </div>

            {/* Card Oficina 2 */}
            <div className="bg-dark-800 rounded-2xl p-3 flex gap-3 border border-dark-500 cursor-pointer">
              <img 
                src="/images/splash_car_1779938551172.png" 
                className="w-21 h-18 rounded-xl object-cover"
                alt="Workshop 2" 
              />
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-white text-[14px]">Mecânica do Japa</h4>
                  <span className="text-[11px] text-text-secondary">2,5 km</span>
                </div>
                <div className="flex items-center text-[11px] text-text-secondary mt-0.5">
                  <span className="text-[#FFB800] mr-1">★ 4,7</span>
                  <span>(128)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
