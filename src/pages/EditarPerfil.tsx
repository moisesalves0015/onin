import { useState } from 'react';
import { ChevronLeft, Camera, Loader2, User, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function EditarPerfil() {
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setUser({ ...user, ...formData });
      setIsLoading(false);
      navigate('/perfil');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Editar perfil</h2>
      </div>

      <div className="px-6 py-8">
        
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary-500 flex items-center justify-center text-white text-[32px] font-bold border-4 border-dark-900">
              {formData.name.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-dark-800 border border-dark-500 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform">
              <Camera size={14} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-text-secondary ml-1">Nome completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3.5 pl-12 pr-4 text-[14px] text-white outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-text-secondary ml-1">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3.5 pl-12 pr-4 text-[14px] text-white outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-text-secondary ml-1">Celular</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} strokeWidth={1.5} />
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-dark-800 border border-dark-500 rounded-xl py-3.5 pl-12 pr-4 text-[14px] text-white outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={handleSave}
          disabled={isLoading}
          className="w-full bg-primary-500 text-white text-[15px] font-semibold py-4 rounded-xl active:scale-95 transition-all shadow-red-glow flex justify-center items-center h-13.5 disabled:opacity-70 disabled:active:scale-100"
        >
          {isLoading ? <Loader2 className="animate-spin" size={22} /> : 'Salvar alterações'}
        </button>
      </div>
    </div>
  );
}
