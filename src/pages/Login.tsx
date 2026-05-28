import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 relative">
      {/* Imagem de Fundo (Topo) */}
      <div className="absolute top-0 left-0 right-0 h-[55%] pointer-events-none">
        <img 
          src="/images/splash_car_1779938551172.png" 
          alt="Sports Car" 
          className="w-full h-full object-cover object-bottom"
        />
        {/* Glow Vermelho e Gradiente */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-dark-900/40 to-dark-900" />
      </div>
      
      {/* Conteúdo (Inferior) */}
      <div className="flex-1 flex flex-col justify-end px-6 pb-12 relative z-10">
        
        {/* Logo e Slogan */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-1 mb-2">
            <h1 className="text-[32px] font-bold tracking-widest text-white leading-none">
              <span className="text-primary-500">O</span>NIN
            </h1>
          </div>
          <p className="text-[13px] font-medium text-text-secondary">
            Seu carro em boas mãos.
          </p>
        </div>

        {/* Botões Principais */}
        <div className="space-y-4 mb-8">
          <button 
            onClick={handleLogin}
            className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl transition-all active:scale-95"
          >
            Entrar
          </button>
          <button 
            onClick={handleLogin}
            className="w-full bg-dark-800 border border-dark-500 text-white text-[15px] font-semibold py-4 rounded-xl transition-all active:scale-95"
          >
            Criar conta
          </button>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-dark-500"></div>
          <span className="text-[11px] font-medium text-text-tertiary uppercase tracking-wider">
            ou continue com
          </span>
          <div className="flex-1 h-px bg-dark-500"></div>
        </div>

        {/* Login Social */}
        <div className="flex justify-center gap-4">
          <button className="w-14 h-14 bg-dark-800 border border-dark-500 rounded-2xl flex items-center justify-center transition-all hover:bg-dark-700">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
          <button className="w-14 h-14 bg-dark-800 border border-dark-500 rounded-2xl flex items-center justify-center transition-all hover:bg-dark-700">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6 9.39c-.1-2.34 1.9-3.48 2-3.54-1.11-1.63-2.84-1.85-3.47-1.88-1.47-.15-2.88.88-3.64.88-.75 0-1.88-.86-3.08-.83-1.57.02-3.02.9-3.83 2.33-1.66 2.89-.42 7.16 1.19 9.53.79 1.15 1.73 2.45 3 2.4 1.22-.05 1.69-.79 3.16-.79 1.48 0 1.9.79 3.18.77 1.3-.02 2.12-1.18 2.91-2.33.91-1.33 1.28-2.62 1.3-2.69-.03-.02-2.52-.97-2.62-3.85zm-2.73-6.28c.67-.81 1.11-1.94.99-3.06-1 .04-2.19.67-2.88 1.48-.61.71-1.14 1.87-.99 2.97 1.11.09 2.22-.57 2.88-1.39z"/>
            </svg>
          </button>
          <button className="w-14 h-14 bg-dark-800 border border-dark-500 rounded-2xl flex items-center justify-center transition-all hover:bg-dark-700">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.954 10.124 11.854v-8.385H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.988 24 12z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
