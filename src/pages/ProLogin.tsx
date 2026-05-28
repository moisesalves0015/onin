import { useNavigate } from 'react-router-dom';

export default function ProLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 relative overflow-hidden animate-fade-in">
      
      {/* Imagem de Fundo Premium Garage */}
      <div className="absolute inset-0 z-0">
        <img src="/images/splash_car_1779938551172.png" className="w-full h-full object-cover opacity-20 mix-blend-screen" alt="Garage background" />
        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]"></div>
        {/* Glow vermelho central */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-75 h-75 bg-[#E50914]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-end flex-1 px-8 pb-12">
        
        {/* Logo ONIN PRO */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-[48px] font-black text-white italic tracking-tighter leading-none flex items-center">
            ONIN <span className="text-[#E50914] ml-2 text-[20px] not-italic tracking-wider uppercase mt-4">PRO</span>
          </h1>
          <p className="text-[16px] text-[#B5B5B5] mt-4 text-center max-w-55 leading-snug">
            Gestão inteligente para sua oficina.
          </p>
        </div>

        <div className="space-y-4 mb-8 w-full">
          <button 
            onClick={() => navigate('/pro/dashboard')}
            className="w-full bg-[#E50914] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)]"
          >
            Entrar na oficina
          </button>
          
          <button 
            className="w-full bg-[#0F0F0F] border border-[#1B1B1B] text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all"
          >
            Criar conta
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-[#1B1B1B]"></div>
          <span className="text-[12px] text-[#7A7A7A]">ou continue com</span>
          <div className="flex-1 h-px bg-[#1B1B1B]"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 h-14 bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-center text-white text-[20px] active:scale-95 transition-all">
            <span className="w-6 h-6 rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-blue-500"></span>
          </button>
          <button className="flex-1 h-14 bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-center text-white text-[20px] active:scale-95 transition-all">
            
          </button>
          <button className="flex-1 h-14 bg-[#0F0F0F] border border-[#1B1B1B] rounded-xl flex items-center justify-center text-[#1877F2] text-[24px] font-bold active:scale-95 transition-all">
            f
          </button>
        </div>

      </div>
    </div>
  );
}
