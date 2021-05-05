import Search from "./components/Search"
import './App.css';
import NavBar from '../src/components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer"
import ShowDetails from "../src/components/ShowDetails";
import TvShows from "./components/TvShows";




function App() {
  return (
    <div className="App">
      

      <Router>

      <NavBar/>

      <Route path="/" exact render={(routerProps) =>  <Search title="Main Page" {...routerProps} />} />

    
        

        <Route  path="/details/:ID" exact render={(routerProps) => <ShowDetails title="Film Details" {...routerProps}/> }/>

        <Route path="/series" exact reder={(routerProps) => <TvShows {...routerProps} /> } />
        
        </Router>
    
      <Footer/>
      
    </div>
  );
} 

export default App;
