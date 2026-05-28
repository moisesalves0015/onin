import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Splash from './pages/Splash';
import Login from './pages/Login';
import Home from './pages/Home';
import SolicitarOrcamento from './pages/SolicitarOrcamento';
import ProcessandoSolicitacao from './pages/ProcessandoSolicitacao';
import OrcamentosRecebidos from './pages/OrcamentosRecebidos';
import DetalhesOrcamento from './pages/DetalhesOrcamento';
import ConfirmacaoServico from './pages/ConfirmacaoServico';
import OficinaPerfil from './pages/OficinaPerfil';
import Acompanhamento from './pages/Acompanhamento';
import DetalhesServico from './pages/DetalhesServico';
import Atualizacoes from './pages/Atualizacoes';
import AvaliacaoFinal from './pages/AvaliacaoFinal';
import Marketplace from './pages/Marketplace';
import DetalhesProduto from './pages/DetalhesProduto';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import VeiculosGaragem from './pages/VeiculosGaragem';
import AdicionarVeiculo from './pages/AdicionarVeiculo';
import Notificacoes from './pages/Notificacoes';
import Perfil from './pages/Perfil';
import HistoricoServicos from './pages/HistoricoServicos';
import Configuracoes from './pages/Configuracoes';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          {/* Fluxo Principal e Orçamento */}
          <Route path="/" element={<Home />} />
          <Route path="/solicitar" element={<SolicitarOrcamento />} />
          <Route path="/processando" element={<ProcessandoSolicitacao />} />
          <Route path="/orcamentos" element={<OrcamentosRecebidos />} />
          <Route path="/orcamento/:id" element={<DetalhesOrcamento />} />
          <Route path="/confirmacao" element={<ConfirmacaoServico />} />
          
          {/* Fluxo Oficina e Chat */}
          <Route path="/oficina/:id" element={<OficinaPerfil />} />
          <Route path="/chat/:id" element={<Chat />} />

          {/* Fluxo Acompanhamento */}
          <Route path="/acompanhamento" element={<Acompanhamento />} />
          <Route path="/servico/detalhes" element={<DetalhesServico />} />
          <Route path="/atualizacoes" element={<Atualizacoes />} />
          <Route path="/avaliacao" element={<AvaliacaoFinal />} />

          {/* Fluxo Marketplace */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/produto/:id" element={<DetalhesProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Fluxo Veículos e Perfil */}
          <Route path="/veiculos" element={<VeiculosGaragem />} />
          <Route path="/veiculos/adicionar" element={<AdicionarVeiculo />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/historico" element={<HistoricoServicos />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
