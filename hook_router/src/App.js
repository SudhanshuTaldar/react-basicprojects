import React from 'react';
import { BrowserRouter as Router,Route, Switch ,Link } from 'react-router-dom';
import  Home from './pages/Home';
import Contact  from './pages/Contact';
import About from './pages/About';
import './App.css';

function App()
{
  return (
      <Router>
          <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <Link to={
                    {
                      pathname: "/home",
                      state:
                          {
                            from: "root"
                          }
                    }
                  }>
                    Home
                  </Link>
                </li>
               
                <li>
                  <Link to="/about"
                  >
                   About  
                  </Link>
                </li>
                
                <li>
                  <Link to="/contact/john/peter">   
                   Contact
                  </Link>
                </li>
              </ul>
              <div>

                <Switch>

                  <Route exact path="/home" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact/:firstname/:lastname"  component={Contact}/>
                  
                </Switch>
              </div>

            </header>
          </div>





      </Router>




  )
}


export default App;