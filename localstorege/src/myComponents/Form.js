import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('username', 'Chetna');
  return (
    <input
      value={name}
      onChange={e => {
        setName(e.target.value);
      }}
    />
  );
}

export default App;