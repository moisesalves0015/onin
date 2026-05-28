import { Outlet, useLocation } from 'react-router-dom';
import ProBottomNavigation from './ProBottomNavigation';

export default function ProLayout() {
  const location = useLocation();
  
  const hideNavRoutes = [
    '/pro/login',
    '/pro/orcamento/criar',
    '/pro/status',
    '/pro/chat'
  ];
  
  const shouldHideNav = hideNavRoutes.includes(location.pathname) || 
                        location.pathname.startsWith('/pro/solicitacao/') ||
                        location.pathname.startsWith('/pro/servico/');
  
  const showNav = !shouldHideNav;

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col max-w-md mx-auto relative overflow-hidden shadow-2xl">
      <main className={`flex-1 overflow-y-auto no-scrollbar ${showNav ? 'pb-24' : ''}`}>
        <Outlet />
      </main>
      {showNav && <ProBottomNavigation />}
    </div>
  );
}
