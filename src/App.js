import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "../src/components/pages/Home";
import "./App.css"

function App() {
  return (
    <div className="wrap-content">
      <div className="container">
        <Router>
          <Route exact path="/">
          <Home/>
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
