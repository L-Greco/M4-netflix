import Search from "./components/Search"
import './App.css';
import NavBar from '../src/components/NavBar'
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom"




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Search />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
