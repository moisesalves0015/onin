import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function ProcessandoSolicitacao() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [
      "Analisando sua solicitação...",
      "Buscando oficinas próximas...",
      "Filtrando especialistas compatíveis...",
      "Preparando orçamentos..."
    ];
    
    const interval = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/orcamentos');
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  const messages = [
    "Analisando sua solicitação...",
    "Buscando oficinas próximas...",
    "Filtrando especialistas compatíveis...",
    "Preparando orçamentos..."
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-900 relative px-6 text-center animate-fade-in">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-dark-500 border-t-primary-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-primary-500">
          <Search size={32} />
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-white mb-2">Processando</h2>
      <p className="text-[14px] text-text-secondary h-6 animate-pulse">
        {messages[step]}
      </p>
    </div>
  );
}
