// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import useLocalStorage from './Components/useLocalStorage'
import useUpdateLogger from './Components/useUpdateLogger'


export default function App(){

  const[name,setName]=useLocalStorage('name','')
  useUpdateLogger(name)
  return (
    
    <input type="text" value={name} onChange={e=>setName(e.target.value)} />

  )

}