import { createContext, useContext, useState, type ReactNode } from 'react';

type UserState = {
  name: string;
  email: string;
  phone: string;
  isLoggedIn: boolean;
};

type AppContextType = {
  user: UserState;
  setUser: (u: UserState) => void;
  cartCount: number;
  setCartCount: (c: number | ((prev: number) => number)) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  vehiclesCount: number;
  setVehiclesCount: (c: number | ((prev: number) => number)) => void;
  notificationsCount: number;
  setNotificationsCount: (c: number | ((prev: number) => number)) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserState>({
    name: 'Marcos',
    email: 'marcos@email.com',
    phone: '(11) 99999-9999',
    isLoggedIn: true,
  });
  const [cartCount, setCartCount] = useState(1);
  const [favorites, setFavorites] = useState<string[]>(['prod_1', 'oficina_1']);
  const [vehiclesCount, setVehiclesCount] = useState(1);
  const [notificationsCount, setNotificationsCount] = useState(3);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      cartCount, setCartCount,
      favorites, toggleFavorite,
      vehiclesCount, setVehiclesCount,
      notificationsCount, setNotificationsCount
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
