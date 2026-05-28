import { Settings, LogOut, ChevronRight, Edit2, Users, CreditCard, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProPerfil() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Edit2, label: 'Editar perfil público', desc: 'Atualizar fotos, descrição e endereço' },
    { icon: LayoutDashboard, label: 'Meus serviços', desc: 'Gerenciar catálogo de serviços e especialidades' },
    { icon: Users, label: 'Equipe e acessos', desc: 'Adicionar mecânicos e atendentes' },
    { icon: CreditCard, label: 'Assinatura PRO', desc: 'Plano atual: Premium Automotivo' },
    { icon: Settings, label: 'Configurações do sistema', desc: 'Notificações, Integrações e API' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in pb-24">
      
      {/* Header Fixo */}
      <div className="flex items-center justify-between px-6 h-16 sticky top-0 z-20 bg-dark-900 border-b border-[#1B1B1B]">
        <h2 className="text-[16px] font-semibold text-white">Perfil da Oficina</h2>
        <button className="p-2 -mr-2 text-[#B5B5B5]">
          <Settings size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="overflow-y-auto no-scrollbar pb-6">
        {/* Banner */}
        <div className="relative h-40">
          <img 
            src="/images/workshop_prime_1779938586713.png" 
            alt="Banner da Oficina" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/40 to-transparent" />
        </div>

        {/* Info Box (Flutuando sobre o banner) */}
        <div className="px-6 -mt-12 relative z-10">
          <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-5 shadow-2xl flex flex-col">
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-16 h-16 rounded-xl bg-dark-800 border border-dark-500 flex flex-col items-center justify-center p-1 overflow-hidden">
                <span className="text-[10px] font-black text-white italic tracking-tighter leading-none">AUTO</span>
                <span className="text-[10px] font-black text-white italic tracking-tighter leading-none">CENTER</span>
                <span className="text-[10px] font-black text-[#E50914] italic tracking-tighter leading-none">PRIME</span>
              </div>
              
              <span className="bg-[#0038FF]/10 border border-[#0038FF]/30 text-[#0066FF] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                Verificado
              </span>
            </div>
            
            <h2 className="text-[20px] font-bold text-white mb-1">Auto Center Prime</h2>
            
            <div className="flex items-center text-[12px] text-[#B5B5B5] gap-3 mb-3">
              <span className="flex items-center gap-1 text-[#FFB800] font-bold">
                ★ 4,8
              </span>
              <span>215 avaliações</span>
            </div>
            
            <p className="text-[11px] text-[#7A7A7A]">Av. Paulista, 1000 - São Paulo, SP</p>
          </div>
        </div>

        {/* Resumo Visão do Cliente */}
        <div className="px-6 mt-6">
          <h3 className="text-[13px] font-bold text-white mb-3">Visão pública (O que o cliente vê)</h3>
          <div className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 space-y-4">
            <div>
              <p className="text-[11px] text-[#7A7A7A] mb-1">Sobre a oficina</p>
              <p className="text-[12px] text-white leading-relaxed line-clamp-2">
                Há mais de 15 anos oferecendo serviços de qualidade com honestidade e transparência. Trabalhamos com todas as marcas nacionais e importadas.
              </p>
            </div>
            <div>
              <p className="text-[11px] text-[#7A7A7A] mb-2">Especialidades ativas</p>
              <div className="flex flex-wrap gap-1.5">
                {['Mecânica geral', 'Funilaria', 'Pintura'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-[#1A1A1A] border border-[#333333] rounded-md text-[10px] font-medium text-[#B5B5B5]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-6 mt-8">
          <h3 className="text-[13px] font-bold text-[#7A7A7A] uppercase tracking-wider mb-3">Gerenciamento</h3>
          <div className="space-y-2">
            {menuItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-[#151515] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#B5B5B5]">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-semibold text-white">{item.label}</h4>
                  <p className="text-[11px] text-[#7A7A7A]">{item.desc}</p>
                </div>
                <ChevronRight size={18} className="text-[#333333]" />
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="px-6 mt-8 mb-6">
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-[#0F0F0F] border border-[#1B1B1B] rounded-2xl p-4 flex items-center justify-center gap-2 text-[#E50914] font-semibold active:scale-95 transition-transform"
          >
            <LogOut size={18} />
            Sair do modo Oficina
          </button>
        </div>

      </div>
    </div>
  );
}
