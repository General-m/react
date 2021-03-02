import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Game from './components/Game';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Switch>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/'>
              <Game />
            </Route>

          </Switch>

        </div>
        <Footer />
      </div>
    </BrowserRouter>


  );
}

export default App;
