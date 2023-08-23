import { createContext } from 'react';

interface AppContextProps {
  count: number;
  incrementCount: () => void;
}

// 初期値
export const AppContext = createContext<AppContextProps>({
  count: 0,
  incrementCount: () => {}
});
