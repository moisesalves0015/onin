import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  BarChart3, 
  Star, 
  Smartphone, 
  Camera, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  Sparkles, 
  ChevronDown, 
  MessageSquare, 
  Cpu, 
  TrendingUp, 
  ThumbsUp 
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const navigate = useNavigate();
  
  // States para interatividade
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedMockup, setSelectedMockup] = useState<'home' | 'orcamento' | 'acompanhamento' | 'marketplace' | 'oficina'>('home');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-slide depoimentos
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 text-white font-sans overflow-x-hidden selection:bg-primary-500 selection:text-white relative">
      
      {/* Luzes de Fundo (Cinematic Glows) */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-primary-500/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-1/4 w-175 h-175 bg-primary-500/5 rounded-full blur-[200px] pointer-events-none z-0"></div>
      <div className="absolute top-[50%] left-10 w-125 h-125 bg-primary-500/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-10 w-150 h-150 bg-red-900/5 rounded-full blur-[180px] pointer-events-none z-0"></div>

      {/* HEADER FIXO - TRANSPARENTE ULTRA-PREMIUM */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#050505]/70 backdrop-blur-xl border-b border-[#1B1B1B] z-50 flex items-center justify-between px-6 lg:px-12 transition-all duration-300">
        <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="h-2 w-2 rounded-full bg-primary-500 mr-2.5 shadow-[0_0_12px_#E50914] animate-pulse"></span>
          <h1 className="text-[24px] font-black text-white italic tracking-tighter flex items-center transition-all group-hover:text-primary-500">
            ONIN <span className="text-primary-500 ml-1.5 text-[11px] not-italic tracking-widest uppercase bg-primary-500/10 px-2 py-0.5 rounded border border-primary-500/25 font-black">PRO</span>
          </h1>
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-text-secondary">
          <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#mockups" className="hover:text-white transition-colors">Interfaces</a>
          <a href="#usuarios" className="hover:text-white transition-colors">Motoristas</a>
          <a href="#oficinas" className="hover:text-white transition-colors">Oficinas</a>
          <a href="#ia-onin" className="hover:text-white transition-colors">Inteligência Artificial</a>
          <a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a>
        </nav>

        {/* CTAs Cabeçalho */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="text-[14px] font-semibold text-text-secondary hover:text-white px-4 py-2 transition-colors active:scale-95 cursor-pointer"
          >
            Entrar
          </button>
          
          <div className="h-4 w-px bg-[#1B1B1B]"></div>

          <button 
            onClick={() => navigate('/pro/login')}
            className="bg-primary-500 hover:bg-primary-500/90 text-white text-[13px] font-bold py-2.5 px-5 rounded-lg active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] cursor-pointer flex items-center gap-2 tracking-wide uppercase"
          >
            <Wrench size={14} />
            Sou Oficina
          </button>
        </div>
      </header>

      {/* SEÇÃO 01 — HERO CINEMATIC */}
      <section className="relative min-h-screen pt-32 pb-24 px-6 flex flex-col justify-center items-center text-center border-b border-[#1B1B1B] overflow-hidden z-10">
        
        {/* Imagem de Fundo Premium */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/splash_car_1779938551172.png" 
            alt="Tesla Porsche cinematic lighting" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.25] contrast-[1.25]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/80 to-dark-900/20"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-900 opacity-95"></div>
        </div>

        {/* Efeito Parallax/Glow Central */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-[11px] font-black tracking-widest text-primary-400 uppercase shadow-[0_0_25px_rgba(229,9,20,0.15)] animate-pulse">
            <Sparkles size={13} className="text-primary-500" />
            A nova era da tecnologia automotiva
          </span>

          <h2 className="text-[48px] md:text-[88px] font-black tracking-tighter leading-[0.95] italic text-white uppercase">
            A nova geração<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-primary-500 drop-shadow-[0_2px_15px_rgba(229,9,20,0.3)]">
              dos serviços automotivos.
            </span>
          </h2>
          
          <p className="text-[16px] md:text-[21px] text-text-secondary max-w-3xl mx-auto leading-relaxed font-light">
            Solicite orçamentos, acompanhe serviços e encontre oficinas confiáveis em uma única plataforma integrada de alta performance. Seu carro em boas mãos.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto relative z-20">
            <button 
              onClick={() => navigate('/onboarding')}
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-150 text-[15px] font-black py-4.5 px-8 rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Smartphone size={18} />
              Solicitar orçamento
            </button>
            <button 
              onClick={() => navigate('/pro/login')}
              className="w-full sm:w-auto bg-dark-800 hover:bg-dark-700 border border-[#1B1B1B] hover:border-primary-500/40 text-white text-[15px] font-bold py-4.5 px-8 rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Wrench size={18} className="text-text-secondary group-hover:text-primary-500 transition-colors" />
              Sou uma oficina
            </button>
          </div>
        </div>

        {/* Floating UI Card 1 (Esquerda) */}
        <div className="hidden xl:flex absolute left-12 bottom-24 bg-dark-800/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 w-72 text-left shadow-2xl animate-bounce" style={{ animationDuration: '6s' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center">
              <CheckCircle2 className="text-green-400" size={20} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-white">Orçamento Aprovado</p>
              <p className="text-[10px] text-text-tertiary">Audi A3 Sportback</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-[12px] border-t border-[#1B1B1B] pt-2">
            <span className="text-text-secondary">Peças Brembo</span>
            <span className="font-black text-white">R$ 1.420,00</span>
          </div>
        </div>

        {/* Floating UI Card 2 (Direita) */}
        <div className="hidden xl:flex absolute right-12 bottom-24 bg-dark-800/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 w-72 text-left shadow-2xl animate-bounce" style={{ animationDuration: '8s' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center">
              <Sparkles className="text-primary-400" size={20} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-white">Diagnóstico por IA</p>
              <p className="text-[10px] text-text-tertiary">Análise de Ruído</p>
            </div>
          </div>
          <p className="text-[11px] text-text-secondary leading-relaxed">
            Detectada 92% de probabilidade de desgaste nas pastilhas dianteiras.
          </p>
        </div>
      </section>

      {/* SEÇÃO 02 — COMO FUNCIONA */}
      <section id="como-funciona" className="py-28 px-6 relative z-10 max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Fluxo Simplificado</span>
          <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic">COMO FUNCIONA A PLATAFORMA</h2>
          <p className="text-text-secondary text-[16px] font-light">
            Conectamos você ao melhor serviço em apenas 4 etapas dinâmicas, com total controle direto pelo smartphone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", icon: Camera, title: "Tire fotos do problema", desc: "Abra o aplicativo, tire fotos ou envie áudios descrevendo o que seu veículo apresenta." },
            { step: "02", icon: Sparkles, title: "Receba orçamentos", desc: "Nossa inteligência artificial analisa e oficinas próximas formulam propostas detalhadas." },
            { step: "03", icon: Wrench, title: "Escolha a oficina", desc: "Compare preços, reputação, distância e prazos. Aprove tudo com um toque." },
            { step: "04", icon: Clock, title: "Acompanhe em tempo real", desc: "Veja a timeline do serviço com fotos diárias da execução até a entrega final." }
          ].map((item, index) => (
            <div key={index} className="bg-dark-800/40 backdrop-blur-md border border-[#1B1B1B] hover:border-primary-500/30 rounded-2xl p-6.5 relative transition-all duration-350 group flex flex-col justify-between h-62.5">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-all duration-350">
                    <item.icon size={22} className="text-primary-500" />
                  </div>
                  <span className="text-[36px] font-black italic text-primary-500/10 group-hover:text-primary-500/20 transition-colors leading-none">{item.step}</span>
                </div>
                <h4 className="text-[17px] font-bold text-white group-hover:text-primary-450 transition-colors">{item.title}</h4>
                <p className="text-[13px] text-text-secondary leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 03 — INTERFACES MOCKUPS DO APP */}
      <section id="mockups" className="py-28 bg-[#080808] border-y border-[#1B1B1B] relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Showcase Interativo</span>
            <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic uppercase">EXPERIMENTE A INTERFACE DO APP</h2>
            <p className="text-text-secondary text-[16px] font-light">
              Navegue pelas abas abaixo e conheça o layout minimalista e ultra-tecnológico criado exatamente para o ecossistema ONIN.
            </p>

            {/* Menu de Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-dark-900 border border-[#1B1B1B] rounded-xl max-w-3xl mx-auto mt-8">
              {(['home', 'orcamento', 'acompanhamento', 'marketplace', 'oficina'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedMockup(tab)}
                  className={`py-2.5 px-5 text-[12px] font-extrabold uppercase rounded-lg tracking-wider transition-all cursor-pointer ${selectedMockup === tab ? 'bg-primary-500 text-white shadow-md' : 'text-text-secondary hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Lado Esquerdo - Detalhes da Interface */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {selectedMockup === 'home' && (
                <div className="space-y-4">
                  <span className="text-[12px] font-black uppercase text-primary-500 tracking-wider">Garagem Integrada</span>
                  <h3 className="text-[28px] md:text-[38px] font-black leading-tight">Painel Principal do Veículo</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-light">
                    O ponto de partida do motorista. Visualize seus veículos cadastrados, veja notificações de serviços preventivos, acesse o suporte e inicie orçamentos em segundos.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Histórico completo de revisões.
                    </li>
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Acesso rápido à carteira de pagamentos.
                    </li>
                  </ul>
                </div>
              )}

              {selectedMockup === 'orcamento' && (
                <div className="space-y-4">
                  <span className="text-[12px] font-black uppercase text-primary-500 tracking-wider">Orçamento por Imagem</span>
                  <h3 className="text-[28px] md:text-[38px] font-black leading-tight">Cotações Sem Complicação</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-light">
                    Envie fotos da avaria ou do painel de instrumentos. O motor de inteligência artificial do ONIN classifica as falhas estruturais e encaminha uma pré-análise instantânea para as oficinas parceiras.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Upload rápido de fotos e gravação de áudio.
                    </li>
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Detecção automática de marca e ano do carro.
                    </li>
                  </ul>
                </div>
              )}

              {selectedMockup === 'acompanhamento' && (
                <div className="space-y-4">
                  <span className="text-[12px] font-black uppercase text-primary-500 tracking-wider">Transparência Visual</span>
                  <h3 className="text-[28px] md:text-[38px] font-black leading-tight">Acompanhamento Fotográfico</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-light">
                    Monitore o veículo com total rastreabilidade. Receba alertas sempre que uma peça for substituída ou o carro avançar nas fases de pintura, alinhamento e lavagem.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Fotos da peça antiga versus peça nova instalada.
                    </li>
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Chat direto integrado com o mecânico chefe.
                    </li>
                  </ul>
                </div>
              )}

              {selectedMockup === 'marketplace' && (
                <div className="space-y-4">
                  <span className="text-[12px] font-black uppercase text-primary-500 tracking-wider">Cotação de Peças</span>
                  <h3 className="text-[28px] md:text-[38px] font-black leading-tight">Marketplace Automotivo</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-light">
                    Acesso a uma vasta rede de distribuidores de autopeças oficiais. Compre acessórios, pastilhas, amortecedores e pneus com garantia direta da fabricante e preços competitivos.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Peças genuínas homologadas.
                    </li>
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Entrega expressa direto na oficina parceira.
                    </li>
                  </ul>
                </div>
              )}

              {selectedMockup === 'oficina' && (
                <div className="space-y-4">
                  <span className="text-[12px] font-black uppercase text-primary-500 tracking-wider">Painel Profissional</span>
                  <h3 className="text-[28px] md:text-[38px] font-black leading-tight">Gestão Inteligente de Oficinas</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-light">
                    O centro de operações do mecânico e administrador. Receba novos leads, gerencie a agenda do pátio físico, envie orçamentos estruturados e analise relatórios de faturamento.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Emissão de orçamentos em 30 segundos.
                    </li>
                    <li className="flex items-center gap-2.5 text-[14px] text-white">
                      <CheckCircle2 size={16} className="text-primary-500" /> Controle financeiro avançado.
                    </li>
                  </ul>
                </div>
              )}

              <div className="pt-4">
                <button 
                  onClick={() => navigate('/onboarding')}
                  className="bg-white hover:bg-gray-100 text-black text-[14px] font-black py-3.5 px-7 rounded-xl active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  Experimentar Fluxo <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Lado Direito - Mockup do Telefone */}
            <div className="lg:col-span-7 flex justify-center relative">
              <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-[110px] pointer-events-none scale-75"></div>
              <div className="relative border border-[#1B1B1B] bg-dark-900 rounded-[2.5rem] p-4.5 shadow-2xl max-w-sm w-full overflow-hidden transition-all duration-500 hover:border-primary-500/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl border-x border-b border-[#1B1B1B] z-20"></div>
                
                {/* Interface Mockup */}
                <div className="relative bg-dark-900 rounded-4xl p-5 aspect-9/16 overflow-y-auto no-scrollbar flex flex-col justify-between text-left">
                  
                  {/* Mockup HOME */}
                  {selectedMockup === 'home' && (
                    <div className="space-y-6 pt-3 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[11px] text-text-tertiary">Garagem ONIN</p>
                          <h4 className="font-black text-[15px] text-white">Audi A3 Sportback</h4>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-dark-800 border border-[#1B1B1B] flex items-center justify-center font-bold text-[11px]">
                          UA
                        </div>
                      </div>

                      {/* Card Principal */}
                      <div className="bg-dark-800 border border-[#1B1B1B] rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] bg-primary-500/10 text-primary-400 px-2 py-0.5 rounded font-black tracking-wider uppercase border border-primary-500/20">Ativo</span>
                          <span className="text-[11px] text-text-secondary font-medium">Auto Center Prime</span>
                        </div>
                        <h5 className="text-[14px] font-bold text-white">Revisão Preventiva Geral</h5>
                        <p className="text-[11px] text-text-secondary">Próxima etapa: Alinhamento das Rodas</p>
                      </div>

                      {/* Outros Veículos */}
                      <div className="space-y-2">
                        <p className="text-[11px] font-extrabold uppercase text-text-tertiary">Outros Carros</p>
                        <div className="bg-dark-800/60 border border-[#1B1B1B] rounded-xl p-3 flex justify-between items-center">
                          <span className="text-[12px] font-bold text-white">Porsche Macan GTS</span>
                          <span className="text-[10px] text-green-400">Pronto</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mockup ORÇAMENTO */}
                  {selectedMockup === 'orcamento' && (
                    <div className="space-y-6 pt-3 animate-fade-in">
                      <h4 className="font-black text-[16px] text-white">Novo Orçamento</h4>
                      <p className="text-[11px] text-text-secondary">Envie fotos da área afetada para pré-diagnóstico com IA.</p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="border border-dashed border-[#1B1B1B] bg-dark-800 rounded-xl aspect-square flex flex-col items-center justify-center gap-1.5 cursor-pointer">
                          <Camera size={20} className="text-text-secondary" />
                          <span className="text-[10px] text-text-secondary">Foto Dianteira</span>
                        </div>
                        <div className="border border-dashed border-[#1B1B1B] bg-dark-800 rounded-xl aspect-square flex flex-col items-center justify-center gap-1.5 cursor-pointer">
                          <Camera size={20} className="text-text-secondary" />
                          <span className="text-[10px] text-text-secondary">Foto Traseira</span>
                        </div>
                      </div>

                      <div className="bg-dark-800 border border-[#1B1B1B] rounded-xl p-3.5 space-y-1">
                        <p className="text-[10px] text-text-tertiary">Análise de IA Estimada</p>
                        <p className="text-[12px] font-bold text-white">Verificando ruído na frenagem...</p>
                      </div>
                    </div>
                  )}

                  {/* Mockup ACOMPANHAMENTO */}
                  {selectedMockup === 'acompanhamento' && (
                    <div className="space-y-6 pt-3 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <h4 className="font-black text-[16px] text-white">Acompanhamento</h4>
                        <span className="text-[10px] text-primary-400 font-bold uppercase">Reparo</span>
                      </div>

                      {/* Timeline Curta */}
                      <div className="relative pl-6 space-y-6 border-l border-[#1B1B1B] ml-2">
                        <div className="relative">
                          <div className="absolute -left-8.5 top-0.5 w-5 h-5 rounded-full bg-green-500 border-4 border-black flex items-center justify-center"></div>
                          <p className="text-[12px] font-bold text-white">Desmontagem Concluída</p>
                          <p className="text-[10px] text-text-tertiary">Ontem, às 14:30</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-8.5 top-0.5 w-5 h-5 rounded-full bg-primary-500 border-4 border-black animate-pulse"></div>
                          <p className="text-[12px] font-bold text-white">Substituição das Pastilhas</p>
                          <p className="text-[10px] text-text-secondary">Em andamento - Oficina Prime</p>
                        </div>
                        <div className="relative opacity-40">
                          <div className="absolute -left-8.5 top-0.5 w-5 h-5 rounded-full bg-[#1B1B1B] border-4 border-black"></div>
                          <p className="text-[12px] font-bold text-white">Alinhamento & Lavagem</p>
                          <p className="text-[10px] text-text-tertiary">Aguardando etapa anterior</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mockup MARKETPLACE */}
                  {selectedMockup === 'marketplace' && (
                    <div className="space-y-6 pt-3 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <h4 className="font-black text-[16px] text-white">Marketplace</h4>
                        <Search size={16} className="text-text-secondary" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-dark-800 border border-[#1B1B1B] rounded-xl p-3 text-left space-y-2">
                          <div className="h-16 bg-[#151515] rounded-lg flex items-center justify-center text-[10px] font-black text-[#E50914] italic">BREMBO</div>
                          <p className="text-[11px] font-bold text-white line-clamp-1">Pastilha Dianteira</p>
                          <p className="text-[12px] font-black text-white">R$ 540,00</p>
                        </div>
                        <div className="bg-dark-800 border border-[#1B1B1B] rounded-xl p-3 text-left space-y-2">
                          <div className="h-16 bg-[#151515] rounded-lg flex items-center justify-center text-[10px] font-black text-[#E50914] italic">MOTUL</div>
                          <p className="text-[11px] font-bold text-white line-clamp-1">Óleo 5W30 Sintético</p>
                          <p className="text-[12px] font-black text-white">R$ 89,00</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mockup OFICINA */}
                  {selectedMockup === 'oficina' && (
                    <div className="space-y-5 pt-3 animate-fade-in">
                      <div className="flex justify-between items-center border-b border-[#1B1B1B] pb-2">
                        <span className="text-[12px] font-black text-white italic">OFICINA PRIME</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      </div>

                      {/* Grid Financeiro */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-dark-800 p-2.5 rounded-lg">
                          <p className="text-[9px] text-text-tertiary uppercase">Faturamento</p>
                          <p className="text-[13px] font-black text-white mt-0.5">R$ 18.430</p>
                        </div>
                        <div className="bg-dark-800 p-2.5 rounded-lg">
                          <p className="text-[9px] text-text-tertiary uppercase">Ativos</p>
                          <p className="text-[13px] font-black text-primary-500 mt-0.5">8 Carros</p>
                        </div>
                      </div>

                      {/* Solicitação Urgente */}
                      <div className="bg-dark-800 border border-[#1B1B1B] rounded-xl p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] bg-primary-500/10 text-primary-400 px-1.5 py-0.5 rounded font-black border border-primary-500/20">Solicitação</span>
                          <span className="text-[9px] text-text-tertiary">Há 5m</span>
                        </div>
                        <p className="text-[12px] font-bold text-white">Audi A3 • Substituição de Pastilhas</p>
                      </div>
                    </div>
                  )}

                  {/* Mockup Footer bar */}
                  <div className="pt-3 border-t border-[#1B1B1B] flex justify-between items-center text-[10px] text-text-secondary">
                    <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> ONIN Proteção</span>
                    <span className="font-bold text-primary-500">Acessar App</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 04 — PARA USUÁRIOS */}
      <section id="usuarios" className="py-28 px-6 relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Para Quem Dirige</span>
          <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic">SEU CARRO EM BOAS MÃOS.</h2>
          <p className="text-text-secondary text-[16px] font-light">
            Desenvolvido para eliminar a falta de visibilidade, a burocracia e as surpresas desagradáveis na hora de consertar seu automóvel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Camera, title: "Orçamento por foto", desc: "Esqueça perder tardes em oficinas. Mande uma foto ou vídeo curta do problema e receba avaliações preliminares online." },
            { icon: ShieldCheck, title: "Oficinas verificadas", desc: "Apenas centros automotivos homologados que atendem aos rígidos padrões de qualidade técnica e atendimento do ONIN." },
            { icon: Clock, title: "Acompanhamento visual", desc: "Acompanhe fotos e o status de cada etapa do conserto do carro diretamente na timeline integrada do app." },
            { icon: BarChart3, title: "Histórico do veículo", desc: "Tenha a ficha técnica do seu carro atualizada digitalmente para facilitar futuras manutenções e valorizar a revenda." },
            { icon: Star, title: "Avaliações reais", desc: "Acesse reviews transparentes e notas detalhadas dadas por outros proprietários exigentes após a conclusão do serviço." },
            { icon: ThumbsUp, title: "Transparência total", desc: "Aprovação prévia obrigatória para qualquer peça sobressalente adicionada. Sem cobranças inesperadas." }
          ].map((item, index) => (
            <div key={index} className="bg-dark-800/35 border border-[#1B1B1B] hover:border-primary-500/20 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-11 h-11 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center">
                  <item.icon size={20} className="text-primary-500" />
                </div>
                <h3 className="text-[19px] font-bold text-white">{item.title}</h3>
                <p className="text-[13.5px] text-text-secondary leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 05 — PARA OFICINAS */}
      <section id="oficinas" className="py-28 bg-[#080808] border-y border-[#1B1B1B] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Esquerda - Conteúdo Informativo */}
            <div className="flex-1 space-y-8 text-left">
              <span className="inline-block px-3.5 py-1.5 bg-primary-500/10 border border-primary-500/25 text-primary-400 rounded-lg text-[11px] font-black uppercase tracking-wider">
                ONIN PRO SISTEMA
              </span>
              <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter leading-tight italic uppercase">
                TRANSFORME SUA OFICINA EM UMA OPERAÇÃO INTELIGENTE.
              </h2>
              <p className="text-[16px] text-text-secondary leading-relaxed font-light">
                Substitua sistemas lentos, planilhas e papéis. Envie orçamentos profissionais instantaneamente, reduza o tempo de pátio parado e fidelize clientes mostrando clareza operacional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: MessageSquare, title: "Receba solicitações", desc: "Novas demandas de reparo direto da sua região direto na tela." },
                  { icon: Clock, title: "Criação de orçamentos", desc: "Monte propostas com peças e mão de obra em menos de 30 segundos." },
                  { icon: Cpu, title: "IA integrada", desc: "Auxílio inteligente na estimativa de horas de serviço e checagem de peças." },
                  { icon: TrendingUp, title: "Dashboard & Analytics", desc: "Controle seu faturamento diário, tickets médios e produtividade da equipe." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <item.icon size={16} className="text-primary-500" />
                      <h4 className="font-bold text-white text-[14px]">{item.title}</h4>
                    </div>
                    <p className="text-[12.5px] text-text-secondary leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => navigate('/pro/login')}
                  className="bg-primary-500 hover:bg-primary-500/90 text-white text-[14px] font-black py-4 px-8 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  Cadastrar minha oficina <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Direita - Visual Mockup */}
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-[130px] rounded-full"></div>
              
              {/* Card Flutuante de Analytics */}
              <div className="relative bg-dark-900 border border-[#1B1B1B] rounded-2xl p-6 shadow-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-[#1B1B1B] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-500 flex items-center justify-center font-black italic text-[#E50914] text-[13px]">OP</div>
                    <div>
                      <h4 className="font-bold text-white text-[15px]">Painel de Controle</h4>
                      <p className="text-[11px] text-text-tertiary">Oficina Prime Auto Center</p>
                    </div>
                  </div>
                  <span className="text-[11px] bg-green-500/10 text-green-400 px-2.5 py-1 rounded font-bold border border-green-500/20">Operação Ativa</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-[#1B1B1B] space-y-1">
                    <p className="text-[10px] text-text-tertiary uppercase font-bold">Faturamento (Mês)</p>
                    <p className="text-[18px] font-black text-white">R$ 48.910</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-[#1B1B1B] space-y-1">
                    <p className="text-[10px] text-text-tertiary uppercase font-bold">Serviços Ativos</p>
                    <p className="text-[18px] font-black text-primary-500">14</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-[#1B1B1B] space-y-1">
                    <p className="text-[10px] text-text-tertiary uppercase font-bold">Ticket Médio</p>
                    <p className="text-[18px] font-black text-white">R$ 1.850</p>
                  </div>
                </div>

                {/* Lista de Entrada Recente */}
                <div className="space-y-3">
                  <p className="text-[11px] font-bold text-text-secondary uppercase">Solicitações de Entrada</p>
                  <div className="bg-dark-800 border border-[#1B1B1B] rounded-xl p-4 flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center font-bold text-primary-500 text-[11px]">A3</div>
                      <div>
                        <p className="text-[12px] font-bold text-white">Audi A3 Sportback</p>
                        <p className="text-[10px] text-text-tertiary">Troca de Pastilhas Dianteiras</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-black text-white">R$ 1.420,00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 06 — IA ONIN (FUTURISTA) */}
      <section id="ia-onin" className="py-28 px-6 relative z-10 max-w-6xl mx-auto overflow-hidden">
        
        {/* Glow de Fundo e Linhas Holográficas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Lado Esquerdo - Holograma/UI Futurista Simulado */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="border border-primary-500/20 bg-dark-900/60 backdrop-blur-xl rounded-4xl p-8 w-full max-w-md shadow-3xl text-left relative overflow-hidden">
              {/* Linhas Tecnológicas Decorativas */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 border border-primary-500/10 rounded-full pointer-events-none"></div>
              <div className="absolute -left-10 -top-10 w-40 h-40 border border-primary-500/10 rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <Cpu size={24} className="text-primary-500 animate-pulse" />
                <h4 className="text-[14px] font-black tracking-widest text-primary-400 uppercase">Motor de IA ONIN</h4>
              </div>

              {/* Console de Diagnóstico Simulado */}
              <div className="bg-black/40 rounded-xl p-4.5 border border-[#1B1B1B] space-y-3 font-mono text-[11px]">
                <p className="text-text-tertiary">// ANALISANDO MULTIMÍDIA AUTOMOTIVA...</p>
                <p className="text-white">&gt; FOTO_DIANTEIRA.PNG CARREGADA</p>
                <p className="text-white">&gt; DETECTADO: PARACHOQUE AVARIADO</p>
                <div className="h-0.5 bg-primary-500/30 w-full rounded my-2 animate-pulse"></div>
                <div className="flex justify-between items-center">
                  <span className="text-[#FFB800]">&gt; NÍVEL DE URGÊNCIA:</span>
                  <span className="bg-[#FFB800]/10 text-[#FFB800] px-2 py-0.5 rounded font-black uppercase text-[9px] border border-[#FFB800]/20">MÉDIO</span>
                </div>
                <p className="text-text-secondary">&gt; PRAZO ESTIMADO DE REPARO: 48 HORAS</p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-[13px] text-text-secondary leading-relaxed font-light">
                  A nossa inteligência artificial cruza os dados do manual de serviço do veículo e sugere peças ideais para o reparo necessário.
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Texto IA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Tecnologia Preditiva</span>
            <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter leading-none italic uppercase">
              INTELIGÊNCIA ARTIFICIAL APLICADA AO SETOR AUTOMOTIVO.
            </h2>
            <p className="text-[16px] text-text-secondary leading-relaxed font-light">
              Utilizamos inteligência computacional para guiar o motorista e a oficina do diagnóstico até a cotação. Eliminamos os erros de especificação e os prazos fantasiosos.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { label: "Diagnóstico inicial rápido", desc: "Geração de relatórios automáticos baseados nas fotos enviadas pelo proprietário." },
                { label: "Previsão de prazo realista", desc: "Cálculo preciso com base na complexidade do serviço e na lotação das oficinas." },
                { label: "Sugestão inteligente de valores", desc: "Comparação instantânea com a média regional do mercado para garantir preços justos." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[15px]">{item.label}</h4>
                    <p className="text-[12.5px] text-text-secondary leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 07 — MARKETPLACE AUTOMOTIVO */}
      <section id="marketplace" className="py-28 bg-[#080808] border-y border-[#1B1B1B] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Peças e Acessórios</span>
            <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic">MARKETPLACE DE ALTA PERFORMANCE</h2>
            <p className="text-text-secondary text-[16px] font-light">
              Adquira autopeças de qualidade certificada direto de fornecedores homologados para manter o desempenho máximo do seu automóvel.
            </p>
          </div>

          {/* Cards de Exibição do Marketplace */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { brand: "BREMBO", name: "Jogo de Pastilhas Dianteiras", type: "Freios de Alta Performance", price: "R$ 540,00", img: "/images/auto_part_1779938601183.png" },
              { brand: "MICHELIN", name: "Pneu Pilot Sport 5 SUV", type: "Pneus Premium", price: "R$ 1.250,00", img: "/images/auto_part_1779938601183.png" },
              { brand: "MOTUL", name: "Óleo Sintético 8100 5W40", type: "Fluidos e Lubrificantes", price: "R$ 98,00", img: "/images/auto_part_1779938601183.png" },
              { brand: "BILSTEIN", name: "Amortecedor Traseiro B4", type: "Suspensão Premium", price: "R$ 780,00", img: "/images/auto_part_1779938601183.png" }
            ].map((part, index) => (
              <div key={index} className="bg-dark-900 border border-[#1B1B1B] hover:border-primary-500/30 rounded-2xl p-5 text-left transition-all duration-350 group flex flex-col justify-between h-90">
                <div className="space-y-4">
                  
                  {/* Container da Imagem com acabamento premium */}
                  <div className="h-40 bg-[#0E0E0E] border border-[#1B1B1B] rounded-xl flex items-center justify-center p-3 relative overflow-hidden">
                    <img src={part.img} className="max-h-full max-w-full object-contain filter brightness-[0.9] contrast-[1.1] transition-transform duration-500 group-hover:scale-105" alt={part.name} />
                    <span className="absolute top-2.5 left-2.5 text-[9px] bg-primary-500/10 text-primary-400 border border-primary-500/25 px-2 py-0.5 rounded font-black tracking-wider uppercase">{part.brand}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] text-text-tertiary uppercase tracking-wider">{part.type}</p>
                    <h4 className="text-[14px] font-bold text-white group-hover:text-primary-450 transition-colors line-clamp-1">{part.name}</h4>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-[#1B1B1B]/60 pt-3">
                  <span className="text-[16px] font-black text-white">{part.price}</span>
                  <span className="text-[11px] font-bold text-primary-500 group-hover:text-primary-400 flex items-center gap-0.5 cursor-pointer">Cotar <ChevronRight size={12} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 08 — TIMELINE DE SERVIÇO */}
      <section className="py-28 px-6 relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Estilo Uber / iFood</span>
          <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic">TIMELINE DE SERVIÇO</h2>
          <p className="text-text-secondary text-[16px] font-light">
            Não fique na dúvida. Saiba exatamente onde seu veículo está com nosso rastreamento de status padronizado.
          </p>
        </div>

        {/* Barra de Timeline Horizontal (Visual) */}
        <div className="bg-dark-800 border border-[#1B1B1B] rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            
            {[
              { title: "Solicitado", desc: "Aguardando orçamentos das oficinas." },
              { title: "Análise Técnica", desc: "Mecânico avaliando as fotos e sintomas." },
              { title: "Peças Disponíveis", desc: "Aguardando peças do distribuidor." },
              { title: "Em Reparo", desc: "Mecânico trabalhando no veículo." },
              { title: "Finalizado", desc: "Carro pronto, testado e lavado." }
            ].map((step, idx) => (
              <div key={idx} className="relative space-y-3 md:text-center text-left">
                
                {/* Indicador de Status */}
                <div className="flex md:justify-center items-center gap-3 md:gap-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[12px] border ${idx <= 3 ? 'bg-primary-500 border-primary-400 text-white shadow-red-glow' : 'bg-dark-900 border-[#1B1B1B] text-text-tertiary'}`}>
                    {idx + 1}
                  </div>
                  {/* Linha Conectora */}
                  {idx < 4 && (
                    <div className={`hidden md:block absolute left-[calc(20%*${idx}+10%)] top-4 w-[60%] h-px ${idx < 3 ? 'bg-primary-500' : 'bg-[#1B1B1B]'}`} />
                  )}
                </div>

                <div className="md:pt-2">
                  <h4 className="text-[14px] font-bold text-white">{step.title}</h4>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-light mt-1 max-w-37.5 md:mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SEÇÃO 09 — ESTATÍSTICAS */}
      <section className="bg-[#080808] border-b border-[#1B1B1B] py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          
          <div className="space-y-2">
            <span className="text-[44px] md:text-[56px] font-black tracking-tight text-white italic drop-shadow-[0_0_20px_rgba(229,9,20,0.2)]">
              +1.200
            </span>
            <p className="text-[12px] uppercase tracking-widest font-black text-text-tertiary">Oficinas Conectadas</p>
          </div>

          <div className="space-y-2">
            <span className="text-[44px] md:text-[56px] font-black tracking-tight text-white italic drop-shadow-[0_0_20px_rgba(229,9,20,0.2)]">
              45k
            </span>
            <p className="text-[12px] uppercase tracking-widest font-black text-text-tertiary">Serviços Realizados</p>
          </div>

          <div className="space-y-2">
            <span className="text-[44px] md:text-[56px] font-black tracking-tight text-white italic drop-shadow-[0_0_20px_rgba(229,9,20,0.2)]">
              99.6%
            </span>
            <p className="text-[12px] uppercase tracking-widest font-black text-text-tertiary">Avaliações Positivas</p>
          </div>

          <div className="space-y-2">
            <span className="text-[44px] md:text-[56px] font-black tracking-tight text-white italic drop-shadow-[0_0_20px_rgba(229,9,20,0.2)]">
              18 min
            </span>
            <p className="text-[12px] uppercase tracking-widest font-black text-text-tertiary">Tempo Médio Resposta</p>
          </div>

        </div>
      </section>

      {/* SEÇÃO 10 — DEPOIMENTOS */}
      <section className="py-28 px-6 relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Depoimentos</span>
          <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic">O QUE DIZEM NOSSOS CLIENTES</h2>
        </div>

        {/* Bloco Depoimento Único com Slide */}
        <div className="bg-dark-800 border border-[#1B1B1B] rounded-2xl p-8 md:p-12 relative overflow-hidden text-left shadow-xl transition-all duration-500">
          <div className="space-y-6 relative z-10">
            
            {/* Estrelas */}
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>

            <p className="text-[16px] md:text-[20px] text-white leading-relaxed font-light italic">
              "{testimonials[testimonialIndex].comment}"
            </p>

            <div className="flex items-center gap-4 border-t border-[#1B1B1B] pt-6">
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-500 flex items-center justify-center text-[12px] font-bold">
                {testimonials[testimonialIndex].avatarText}
              </div>
              <div>
                <h5 className="font-bold text-white text-[15px]">{testimonials[testimonialIndex].name}</h5>
                <p className="text-[11px] text-text-secondary">{testimonials[testimonialIndex].role}</p>
              </div>
            </div>

          </div>

          {/* Dots Indicadores */}
          <div className="absolute right-8 bottom-8 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${testimonialIndex === idx ? 'bg-primary-500 scale-125' : 'bg-dark-500'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 — FAQ ACCORDION */}
      <section id="faq" className="py-28 bg-[#080808] border-y border-[#1B1B1B] relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary-500 text-[12px] font-black tracking-widest uppercase">Perguntas Frequentes</span>
            <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter italic">FAQ ONIN</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-dark-900 border border-[#1B1B1B] rounded-xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-dark-800 transition-colors"
                >
                  <span className="font-bold text-[15px] md:text-[16px] text-white pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-text-secondary transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary-500' : ''}`} 
                  />
                </button>

                {activeFaq === idx && (
                  <div className="p-6 pt-0 border-t border-[#1B1B1B] bg-dark-900 animate-fade-in">
                    <p className="text-[13.5px] text-text-secondary leading-relaxed font-light pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 12 — CTA FINAL */}
      <section className="py-32 px-6 bg-linear-to-t from-[#0A0A0A] to-[#050505] relative z-10 text-center overflow-hidden">
        
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="text-[36px] md:text-[68px] font-black tracking-tighter italic uppercase leading-none">
            ENTRE PARA A NOVA GERAÇÃO AUTOMOTIVA.
          </h2>
          <p className="text-text-secondary text-[16px] md:text-[19px] max-w-xl mx-auto leading-relaxed font-light">
            Seja você um proprietário em busca de confiança ou uma oficina visando maior eficiência, o ONIN é o seu ecossistema.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button 
              onClick={() => navigate('/onboarding')}
              className="w-full sm:w-auto bg-primary-500 hover:bg-primary-500/90 text-white text-[14px] font-black py-4.5 px-8 rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              Começar agora <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('/pro/login')}
              className="w-full sm:w-auto bg-dark-800 hover:bg-dark-700 border border-[#1B1B1B] text-white text-[14px] font-bold py-4.5 px-8 rounded-xl active:scale-95 transition-all cursor-pointer uppercase tracking-wide"
            >
              Cadastrar oficina
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 13 — FOOTER PREMIUM */}
      <footer className="py-20 px-6 bg-[#030303] border-t border-[#1B1B1B] relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-left">
          
          <div className="space-y-4">
            <h2 className="text-[22px] font-black text-white italic tracking-tighter flex items-center">
              ONIN <span className="text-primary-500 ml-1.5 text-[10px] not-italic tracking-wider uppercase mt-1">PRO</span>
            </h2>
            <p className="text-[13px] text-text-secondary leading-relaxed font-light">
              O ecossistema automotivo inteligente criado para modernizar a prestação de serviços mecânicos com transparência extrema e IA.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">Para Clientes</h5>
            <ul className="space-y-2.5 text-[13px] text-text-tertiary">
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/login')}>Fazer Login</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/onboarding')}>Criar Conta</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Como funciona</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Pesquisar Oficinas</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">Para Oficinas</h5>
            <ul className="space-y-2.5 text-[13px] text-text-tertiary">
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/pro/login')}>Acessar Painel PRO</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/pro/login')}>Cadastrar Oficina</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Solução de Pagamentos</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Casos de Sucesso</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">Suporte & Contato</h5>
            <ul className="space-y-2.5 text-[13px] text-text-tertiary">
              <li><span className="hover:text-white cursor-pointer transition-colors">Central de Ajuda</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Fale Conosco</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Termos de Serviço</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Privacidade</span></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-[#1b1b1b]/60 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-text-tertiary text-left">
          <p>© {new Date().getFullYear()} ONIN Tecnologia Automotiva Ltda. CNPJ 00.000.000/0001-00</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Dados estáticos da página
const testimonials = [
  {
    comment: "A transparência na timeline com fotos mudou completamente como eu encaro o conserto do carro. Recomendo fortemente.",
    name: "Rodrigo Melo",
    role: "Proprietário de Audi A3 Sportback",
    avatarText: "RM"
  },
  {
    comment: "Nossa oficina aumentou o faturamento em 32% após adotar o orçamentador inteligente do ONIN PRO. Os clientes aprovam na hora.",
    name: "Marcos Silva",
    role: "Diretor da Oficina Prime Auto Center",
    avatarText: "MS"
  },
  {
    comment: "Fazer o diagnóstico por IA me deu a segurança que eu precisava antes de levar o carro no mecânico. Muito prático.",
    name: "Ana Júlia",
    role: "Proprietária de Porsche Macan",
    avatarText: "AJ"
  }
];

const faqs = [
  {
    question: "Como a plataforma garante a confiabilidade dos serviços?",
    answer: "Todas as oficinas parceiras passam por auditorias técnicas, mantêm portfólios verificados e possuem avaliações autenticadas por clientes reais. A ONIN também retém os pagamentos de forma segura até a conclusão e validação do conserto."
  },
  {
    question: "Como o orçamento por fotos e IA funciona?",
    answer: "Nosso motor de IA processa as imagens e descrições do veículo, identifica peças potencialmente desgastadas ou danificadas, e gera uma pré-avaliação que serve como guia para as oficinas parceiras formularem propostas detalhadas em minutos."
  },
  {
    question: "Qual é o custo para utilizar a plataforma como motorista?",
    answer: "Para motoristas, o aplicativo ONIN é 100% gratuito. Você pode comparar orçamentos, acompanhar a manutenção e efetuar pagamentos com total transparência sem qualquer tarifa adicional."
  },
  {
    question: "Como as oficinas se tornam parceiras do ONIN PRO?",
    answer: "As oficinas interessadas podem se cadastrar clicando em 'Sou Oficina' ou 'Cadastrar oficina'. O time técnico da ONIN realiza uma vistoria técnica das dependências físicas antes da liberação do painel operacional."
  }
];
