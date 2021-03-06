import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Game from './components/Game';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Switch>
            <Route path='/react/tic-tac-toe/build/About'>
              <About />
            </Route>
            <Route path='/react/tic-tac-toe/build/'>
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
