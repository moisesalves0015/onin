import { ChevronLeft, Package, Truck, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PedidosList() {
  const navigate = useNavigate();

  const orders = [
    { id: 'ONIN-847291', title: 'Parachoque Dianteiro Civic', date: '12/05/2024', status: 'Em trânsito', icon: Truck, color: 'text-[#FFB800]', bg: 'bg-[#FFB800]/20' },
    { id: 'ONIN-541233', title: 'Kit Pastilha de Freio', date: '01/04/2024', status: 'Entregue', icon: CheckCircle2, color: 'text-[#2EBA4A]', bg: 'bg-[#2EBA4A]/20' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Meus Pedidos</h2>
      </div>

      <div className="p-6">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 opacity-50">
            <Package size={48} className="text-text-tertiary mb-4" strokeWidth={1} />
            <p className="text-[14px] text-text-secondary">Você ainda não tem pedidos.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => (
              <div key={idx} className="bg-dark-800 border border-dark-500 rounded-2xl p-4">
                <div className="flex justify-between items-start mb-4 border-b border-dark-500/50 pb-3">
                  <div>
                    <span className="text-[11px] text-text-tertiary font-mono">#{order.id}</span>
                    <p className="text-[11px] text-text-secondary">{order.date}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md ${order.bg}`}>
                    <order.icon size={12} className={order.color} />
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${order.color}`}>{order.status}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0">
                    <img src="/images/auto_part_1779938601183.png" className="w-full h-full object-cover" alt="Produto" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-semibold text-white leading-tight mb-2">{order.title}</h3>
                    <button className="text-[12px] font-semibold text-primary-500 hover:text-primary-400 transition-colors">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
