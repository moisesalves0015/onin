import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-900 relative">
      <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/50 to-transparent z-10" />
      <img 
        src="/images/splash_car_1779938551172.png" 
        alt="Car" 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="relative z-20 text-center animate-fade-in flex flex-col items-center">
        <h1 className="text-5xl font-bold tracking-wider mb-2 flex items-center">
          <span className="text-primary-500 mr-1">O</span>NIN
        </h1>
        <p className="text-text-secondary text-sm">Seu carro em boas mãos.</p>
      </div>
    </div>
  );
}
