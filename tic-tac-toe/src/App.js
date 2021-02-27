import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import { MOVE_QUEUE } from './utils'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Game />
      <Footer />
    </div>
  );
}

export default App;
