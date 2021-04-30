import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar'
import Footer from "./components/Footer"
import MainContainer from "./components/MainContainer"
import harrypotter from "./components/harrypotter.json"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContainer films={harrypotter}/>
      <Footer/>
    
    </div>
  );
}

export default App;
