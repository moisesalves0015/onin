import { useState } from 'react';
import { ChevronLeft, User, Mail, Phone, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Cadastro() {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula API call
    setTimeout(() => {
      setUser({
        name: formData.name || 'Usuário',
        email: formData.email,
        phone: formData.phone,
        isLoggedIn: true
      });
      setIsLoading(false);
      navigate('/home');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="px-6 flex-1 flex flex-col justify-center pb-20">
        <div className="mb-10">
          <h1 className="text-[28px] font-black text-white leading-tight mb-2">Criar conta</h1>
          <p className="text-[15px] text-text-secondary">Preencha seus dados para acessar o ONIN.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Nome completo"
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-dark-800 border border-dark-500 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
            <input 
              type="email" 
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-dark-800 border border-dark-500 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
            <input 
              type="tel" 
              placeholder="Celular"
              required
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-dark-800 border border-dark-500 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Senha"
              required
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              className="w-full bg-dark-800 border border-dark-500 rounded-xl py-4 pl-12 pr-12 text-[15px] text-white outline-none focus:border-primary-500 transition-colors placeholder-text-tertiary"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary"
            >
              {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
            </button>
          </div>

          <button 
            type="submit"
            disabled={isLoading || !formData.email || !formData.password || !formData.name}
            className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow disabled:opacity-50 disabled:active:scale-100 flex justify-center items-center mt-6 h-13.5"
          >
            {isLoading ? <Loader2 className="animate-spin" size={22} /> : 'Criar conta'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[14px] text-text-secondary">
            Já tem uma conta? <span onClick={() => navigate('/login')} className="text-primary-500 font-bold cursor-pointer">Entrar</span>
          </p>
        </div>
      </div>
    </div>
  );
}
