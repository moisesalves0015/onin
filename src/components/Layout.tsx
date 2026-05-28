import { Outlet, useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

export default function Layout() {
  const location = useLocation();
  
  const hideNavRoutes = [
    '/splash', 
    '/login', 
    '/cadastro',
    '/recuperar-senha',
    '/onboarding', 
    '/solicitar',
    '/processando',
    '/confirmacao',
    '/comparacao',
    '/oficinas',
    '/chats',
    '/suporte',
    '/servico/detalhes',
    '/avaliacao',
    '/avaliacoes',
    '/carrinho',
    '/checkout',
    '/pagamento',
    '/comprovante',
    '/pedidos',
    '/favoritos',
    '/veiculos/adicionar',
    '/historico',
    '/configuracoes',
    '/editar-perfil'
  ];
  
  const shouldHideNav = hideNavRoutes.includes(location.pathname) || 
                        location.pathname.startsWith('/oficina/') ||
                        location.pathname.startsWith('/orcamento/') ||
                        location.pathname.startsWith('/chat/') ||
                        location.pathname.startsWith('/produto/') ||
                        location.pathname.startsWith('/veiculo/');
  
  const showNav = !shouldHideNav;

  return (
    <div className="min-h-screen bg-dark-900 text-text-primary flex flex-col max-w-md mx-auto relative overflow-hidden shadow-2xl">
      <main className={`flex-1 overflow-y-auto no-scrollbar ${showNav ? 'pb-24' : ''}`}>
        <Outlet />
      </main>
      {showNav && <BottomNavigation />}
    </div>
  );
}
