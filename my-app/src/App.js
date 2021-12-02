// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import Cor from './MyComponents/Cor';
import Footer from './MyComponents/Footer';
import Form from './MyComponents/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TextForm from './MyComponents/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }
  return (

    <Router>
       <Header mode={mode} toggleMode={toggleMode} />
      <Switch>
        <Route exact path="/">
          <Cor />
          <Form />          
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/textarea">
          <TextForm/>
        </Route>
      </Switch>
      <Footer time="days"/>
    </Router>

  );
}

export default App;
