import { useState } from 'react';
import { ChevronLeft, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RecuperarSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleRecover = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula envio de email
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="px-6 flex-1 flex flex-col justify-center pb-32">
        <div className="mb-10 text-center">
          {isSent ? (
            <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-500">
              <CheckCircle2 size={40} strokeWidth={1.5} />
            </div>
          ) : (
             <div className="w-20 h-20 bg-dark-800 border border-dark-500 rounded-full flex items-center justify-center mx-auto mb-6 text-text-secondary">
              <Mail size={32} strokeWidth={1.5} />
            </div>
          )}
          
          <h1 className="text-[28px] font-black text-white leading-tight mb-2">
            {isSent ? 'E-mail enviado!' : 'Esqueceu a senha?'}
          </h1>
          <p className="text-[15px] text-text-secondary max-w-70 mx-auto">
            {isSent 
              ? 'Enviamos as instruções de recuperação para o e-mail informado.' 
              : 'Digite seu e-mail abaixo para receber um link de recuperação de senha.'}
          </p>
        </div>

        {!isSent ? (
          <form onSubmit={handleRecover} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
              <input 
                type="email" 
                placeholder="Seu e-mail"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-dark-800 border border-dark-500 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow disabled:opacity-50 disabled:active:scale-100 flex justify-center items-center mt-6 h-13.5"
            >
              {isLoading ? <Loader2 className="animate-spin" size={22} /> : 'Enviar link de recuperação'}
            </button>
          </form>
        ) : (
          <button 
            onClick={() => navigate('/login')}
            className="w-full bg-dark-800 border border-dark-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all hover:bg-dark-700"
          >
            Voltar para o login
          </button>
        )}
      </div>
    </div>
  );
}
