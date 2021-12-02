import logo from './logo.svg';
import './App.css';
// query params

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";


function App() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function QueryParamsDemo() {
  let Query = useQuery();
  return (
    <div>
      <div>
        <h2>NavBar</h2>
        <ul>
          <li>
            <Link to="/nav?name=Home">Home</Link>
          </li>
          <li>
            <Link to="/nav?name=Docs">Docs</Link>
          </li>
          <li>
            <Link to="/nav?name=About">About</Link>
          </li>
          <li>
            <Link to="/nav?name=Contact">Contact</Link>
          </li>
        </ul>
        <Child name={Query.get("name")} />
      </div>
    </div>
  )
}
function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the rounting string</h3>
      )}
    </div>
  );
}
export default App;


