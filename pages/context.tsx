import React, { createContext, useState } from 'react';
import type { NextPage } from 'next';
import ContextA from '../components/ContextA';

export const UserContext = createContext({
  name: '',
  age: ''
});
export const HobbyContext = createContext('');

const App: NextPage = () => {
  const [user, setUser] = useState({
    name: '田中',
    age: '30'
  });
  const [hobby, setHobby] = useState('将棋');
  return (
    <div className="Context">
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
