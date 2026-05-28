import { ChevronLeft, Star, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AvaliacoesList() {
  const navigate = useNavigate();

  const reviews = [
    { id: 1, name: 'Carlos Santos', date: 'Há 2 dias', text: 'Excelente atendimento! Resolveram o problema do parachoque no mesmo dia. Oficina muito limpa e organizada.', rating: 5, likes: 12 },
    { id: 2, name: 'Mariana Silva', date: 'Há 1 semana', text: 'Preço justo e cumpriram o prazo, porém a peça demorou um dia a mais para chegar.', rating: 4, likes: 4 },
    { id: 3, name: 'Roberto Almeida', date: 'Há 2 semanas', text: 'Fui muito bem atendido pelo Roberto. Meu Civic ficou zero de novo.', rating: 5, likes: 8 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 animate-fade-in">
      <div className="flex items-center px-4 h-16 sticky top-0 z-10 bg-dark-900 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Avaliações</h2>
      </div>

      <div className="p-6">
        {/* Resumo Geral */}
        <div className="flex items-center gap-6 mb-8 border-b border-dark-500 pb-6">
          <div className="text-center">
            <h1 className="text-[48px] font-black text-white leading-none tracking-tighter">4.8</h1>
            <div className="flex items-center justify-center gap-1 text-[#FFB800] my-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#FFB800]" />)}
            </div>
            <p className="text-[11px] text-text-secondary">215 avaliações</p>
          </div>
          
          <div className="flex-1 space-y-1.5">
            {[5,4,3,2,1].map(star => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-[11px] text-text-secondary w-2">{star}</span>
                <div className="flex-1 h-1.5 bg-dark-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FFB800] rounded-full" 
                    style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : star === 3 ? '3%' : '1%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Avaliações */}
        <div className="space-y-6 pb-12">
          {reviews.map(rev => (
            <div key={rev.id} className="border-b border-dark-500/50 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-[14px] font-bold text-white border border-dark-500">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-white">{rev.name}</h4>
                    <p className="text-[11px] text-text-tertiary">{rev.date}</p>
                  </div>
                </div>
                <div className="flex text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className={i < rev.rating ? "fill-[#FFB800]" : "text-dark-500"} />
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-text-secondary leading-relaxed mt-3 mb-4">
                {rev.text}
              </p>
              <button className="flex items-center gap-1.5 text-[11px] font-medium text-text-tertiary hover:text-white transition-colors">
                <ThumbsUp size={14} /> Útil ({rev.likes})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
