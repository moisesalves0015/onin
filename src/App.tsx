import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProLayout from './components/ProLayout';
import LandingPage from './pages/LandingPage';
import Splash from './pages/Splash';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';

import Home from './pages/Home';
import SolicitarOrcamento from './pages/SolicitarOrcamento';
import ProcessandoSolicitacao from './pages/ProcessandoSolicitacao';
import OrcamentosRecebidos from './pages/OrcamentosRecebidos';
import DetalhesOrcamento from './pages/DetalhesOrcamento';
import ConfirmacaoServico from './pages/ConfirmacaoServico';
import ComparacaoOrcamentos from './pages/ComparacaoOrcamentos';

import OficinaPerfil from './pages/OficinaPerfil';
import OficinasList from './pages/OficinasList';
import Acompanhamento from './pages/Acompanhamento';
import DetalhesServico from './pages/DetalhesServico';
import Atualizacoes from './pages/Atualizacoes';
import AvaliacaoFinal from './pages/AvaliacaoFinal';
import AvaliacoesList from './pages/AvaliacoesList';

import Chat from './pages/Chat';
import ChatsList from './pages/ChatsList';
import Suporte from './pages/Suporte';

import Marketplace from './pages/Marketplace';
import DetalhesProduto from './pages/DetalhesProduto';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import Pagamento from './pages/Pagamento';
import Comprovante from './pages/Comprovante';
import PedidosList from './pages/PedidosList';
import Favoritos from './pages/Favoritos';

import VeiculosGaragem from './pages/VeiculosGaragem';
import AdicionarVeiculo from './pages/AdicionarVeiculo';
import VeiculoDetalhe from './pages/VeiculoDetalhe';

import Notificacoes from './pages/Notificacoes';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/EditarPerfil';
import HistoricoServicos from './pages/HistoricoServicos';
import Configuracoes from './pages/Configuracoes';

// --- ONIN PRO (Oficina) ---
import ProLogin from './pages/ProLogin';
import ProDashboard from './pages/ProDashboard';
import ProSolicitacoes from './pages/ProSolicitacoes';
import ProSolicitacaoDetalhes from './pages/ProSolicitacaoDetalhes';
import ProCriarOrcamento from './pages/ProCriarOrcamento';
import ProOrcamentos from './pages/ProOrcamentos';
import ProServicos from './pages/ProServicos';
import ProServicoDetalhes from './pages/ProServicoDetalhes';
import ProAtualizarStatus from './pages/ProAtualizarStatus';
import ProChat from './pages/ProChat';
import ProPerfil from './pages/ProPerfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        
        <Route element={<Layout />}>
          {/* Fluxo Principal e Orçamento */}
          <Route path="/home" element={<Home />} />
          <Route path="/solicitar" element={<SolicitarOrcamento />} />
          <Route path="/processando" element={<ProcessandoSolicitacao />} />
          <Route path="/orcamentos" element={<OrcamentosRecebidos />} />
          <Route path="/orcamento/:id" element={<DetalhesOrcamento />} />
          <Route path="/confirmacao" element={<ConfirmacaoServico />} />
          <Route path="/comparacao" element={<ComparacaoOrcamentos />} />
          
          {/* Fluxo Oficina e Chat */}
          <Route path="/oficinas" element={<OficinasList />} />
          <Route path="/oficina/:id" element={<OficinaPerfil />} />
          <Route path="/chats" element={<ChatsList />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/suporte" element={<Suporte />} />

          {/* Fluxo Acompanhamento */}
          <Route path="/acompanhamento" element={<Acompanhamento />} />
          <Route path="/servico/detalhes" element={<DetalhesServico />} />
          <Route path="/atualizacoes" element={<Atualizacoes />} />
          <Route path="/avaliacao" element={<AvaliacaoFinal />} />
          <Route path="/avaliacoes" element={<AvaliacoesList />} />

          {/* Fluxo Marketplace */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/produto/:id" element={<DetalhesProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/comprovante" element={<Comprovante />} />
          <Route path="/pedidos" element={<PedidosList />} />
          <Route path="/favoritos" element={<Favoritos />} />

          {/* Fluxo Veículos e Perfil */}
          <Route path="/veiculos" element={<VeiculosGaragem />} />
          <Route path="/veiculos/adicionar" element={<AdicionarVeiculo />} />
          <Route path="/veiculo/:id" element={<VeiculoDetalhe />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/editar-perfil" element={<EditarPerfil />} />
          <Route path="/historico" element={<HistoricoServicos />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Route>

        {/* =======================
            ONIN PRO (OFICINAS) 
        ======================= */}
        <Route path="/pro/login" element={<ProLogin />} />
        
        <Route element={<ProLayout />}>
          <Route path="/pro/dashboard" element={<ProDashboard />} />
          <Route path="/pro/solicitacoes" element={<ProSolicitacoes />} />
          <Route path="/pro/solicitacao/:id" element={<ProSolicitacaoDetalhes />} />
          
          <Route path="/pro/orcamento/criar" element={<ProCriarOrcamento />} />
          <Route path="/pro/orcamentos" element={<ProOrcamentos />} />
          
          <Route path="/pro/servicos" element={<ProServicos />} />
          <Route path="/pro/servico/:id" element={<ProServicoDetalhes />} />
          
          <Route path="/pro/status" element={<ProAtualizarStatus />} />
          <Route path="/pro/chat" element={<ProChat />} />

          {/* Compartilhando as telas de marketplace por enquanto */}
          <Route path="/pro/marketplace" element={<Marketplace />} />
          <Route path="/pro/perfil" element={<ProPerfil />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
