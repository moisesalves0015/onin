import { useState } from 'react';
import { ChevronLeft, Camera, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AvaliacaoFinal() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [recomendaria, setRecomendaria] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 h-16 bg-dark-900 sticky top-0 z-10 border-b border-dark-500">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[16px] font-semibold text-white ml-2">Avaliar serviço</h2>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Oficina Info */}
        <div className="flex items-center gap-4">
          <img src="/images/workshop_prime_1779938586713.png" className="w-16 h-16 rounded-xl object-cover border border-dark-500" alt="Oficina" />
          <div>
            <h3 className="text-[16px] font-bold text-white mb-1">Auto Center Prime</h3>
            <p className="text-[12px] text-text-secondary">Serviço concluído em 12/05/2024</p>
          </div>
        </div>

        {/* Estrelas */}
        <div className="flex flex-col items-center py-4">
          <p className="text-[15px] font-bold text-white mb-6">Como foi sua experiência?</p>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button 
                key={star}
                onClick={() => setRating(star)}
                className="transition-transform active:scale-90"
              >
                <Star 
                  size={36} 
                  className={star <= rating ? "fill-[#FFB800] text-[#FFB800]" : "text-dark-500"} 
                  strokeWidth={star <= rating ? 0 : 1.5}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Comentário */}
        <div>
          <label className="block text-[13px] font-medium text-text-secondary mb-2">Comentário (opcional)</label>
          <textarea 
            className="w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3.5 text-[14px] text-white outline-none min-h-30 resize-none placeholder-text-tertiary"
            placeholder="Conte um pouco sobre o serviço, atendimento..."
          ></textarea>
        </div>

        {/* Fotos */}
        <div>
          <label className="block text-[13px] font-medium text-text-secondary mb-2">Adicionar fotos (opcional)</label>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            <div className="w-21 h-21 bg-dark-800 border border-dark-500 rounded-xl flex flex-col items-center justify-center gap-1 shrink-0 cursor-pointer">
              <Camera size={22} className="text-text-secondary" strokeWidth={1.5} />
              <span className="text-[11px] text-text-secondary font-medium">Adicionar</span>
            </div>
          </div>
        </div>

        {/* Recomendar */}
        <div className="flex justify-between items-center py-2">
          <div>
            <span className="text-[14px] font-medium text-white block mb-0.5">Recomendaria esta oficina?</span>
            <span className="text-[11px] text-text-secondary">Sua resposta ajuda outros motoristas</span>
          </div>
          <div 
            onClick={() => setRecomendaria(!recomendaria)}
            className={`w-11 h-6 rounded-full p-0.5 cursor-pointer transition-colors duration-200 ${recomendaria ? 'bg-primary-500' : 'bg-dark-500'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${recomendaria ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-900 border-t border-dark-500 max-w-md mx-auto z-20">
        <button 
          onClick={() => navigate('/')}
          className={`w-full text-[15px] font-semibold py-4 rounded-xl transition-all ${rating > 0 ? 'bg-primary-500 text-white shadow-red-glow active:scale-95' : 'bg-dark-800 text-text-tertiary cursor-not-allowed border border-dark-500'}`}
        >
          Enviar avaliação
        </button>
      </div>
    </div>
  );
}
