import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, MapPin, Search, ChevronRight } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: "Encontre a oficina ideal",
      description: "Esqueça a dor de cabeça. Receba orçamentos de diversas oficinas parceiras sem sair de casa.",
      icon: Search,
      image: "/images/workshop_prime_1779938586713.png"
    },
    {
      title: "Perto de você",
      description: "Oficinas rigorosamente selecionadas e avaliadas a poucos quilômetros de distância.",
      icon: MapPin,
      image: "/images/splash_car_1779938551172.png"
    },
    {
      title: "Compre com segurança",
      description: "Acesse nosso Marketplace. Peças originais com garantia e compra protegida ONIN.",
      icon: ShieldCheck,
      image: "/images/auto_part_1779938601183.png"
    }
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark-900">
      
      {/* Container que emula o dispositivo mobile ou preenche tela */}
      <div className="w-full max-w-md h-screen bg-dark-900 flex flex-col justify-between relative overflow-hidden border-x border-[#1B1B1B]">
        
        {/* Glows Decorativos */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-75 h-75 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Top Header com Botão Pular */}
        <div className="h-16 px-6 flex justify-between items-center z-20 relative">
          <span className="text-[12px] font-black italic tracking-tighter text-white">ONIN</span>
          <button 
            onClick={() => navigate('/login')}
            className="text-[12px] font-bold uppercase tracking-wider text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Pular
          </button>
        </div>

        {/* Área Visual do Slide */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 relative z-10">
          
          {/* Container de Imagem com Acabamento Premium */}
          <div className="w-full aspect-4/3 rounded-3xl overflow-hidden border border-[#1B1B1B] relative shadow-2xl group mb-10 bg-dark-900">
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === step ? 'opacity-90' : 'opacity-0 pointer-events-none'}`}
              >
                <img 
                  src={slide.image} 
                  className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] transition-transform duration-1000 scale-100 hover:scale-105"
                  alt={slide.title} 
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
              </div>
            ))}

            {/* Ícone Dinâmico Flutuante */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0B0B0B]/85 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center justify-center text-primary-500 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
              {(() => {
                const Icon = slides[step].icon;
                return <Icon size={28} className="animate-pulse" />;
              })()}
            </div>
          </div>

          {/* Texto Informativo */}
          <div className="text-center space-y-4 px-2 min-h-30">
            <h2 className="text-[24px] font-black text-white italic tracking-tight uppercase leading-none">
              {slides[step].title}
            </h2>
            <p className="text-[14px] text-text-secondary leading-relaxed font-light">
              {slides[step].description}
            </p>
          </div>
        </div>

        {/* Rodapé do Onboarding */}
        <div className="p-8 space-y-8 z-20 relative bg-linear-to-t from-dark-900 to-transparent">
          
          {/* Indicadores de Slide */}
          <div className="flex justify-center gap-2">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setStep(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === step ? 'w-8 bg-primary-500 shadow-[0_0_10px_#E50914]' : 'w-2 bg-dark-500 hover:bg-[#333]'}`}
              />
            ))}
          </div>

          {/* Ações */}
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-text-tertiary">Etapa {step + 1} de 3</span>
            <button 
              onClick={handleNext}
              className="bg-primary-500 hover:bg-primary-500/90 text-white text-[14px] font-bold py-3.5 px-6 rounded-xl active:scale-95 transition-all shadow-red-glow cursor-pointer flex items-center gap-1"
            >
              {step === slides.length - 1 ? 'Começar' : 'Próximo'}
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
