import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Pagamento() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [
      "Conectando com o banco...",
      "Processando pagamento...",
      "Aprovando transação...",
      "Gerando recibo..."
    ];
    
    const interval = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1200);

    const redirectTimer = setTimeout(() => {
      navigate('/comprovante');
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  const messages = [
    "Conectando com o banco...",
    "Processando pagamento...",
    "Aprovando transação...",
    "Gerando recibo..."
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-900 px-6 text-center animate-fade-in relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="relative mb-8 z-10">
        <div className="w-24 h-24 rounded-full border-4 border-dark-800 border-t-primary-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-primary-500">
          <ShieldCheck size={32} strokeWidth={1.5} />
        </div>
      </div>
      
      <h2 className="text-[20px] font-black text-white mb-2 z-10">Processando Pagamento</h2>
      <p className="text-[14px] text-text-secondary h-6 animate-pulse z-10 font-medium">
        {messages[step]}
      </p>

      <div className="absolute bottom-12 left-0 right-0 text-center text-[11px] text-text-tertiary px-12 z-10">
        Ambiente seguro e criptografado. Por favor, não feche esta tela.
      </div>
    </div>
  );
}
