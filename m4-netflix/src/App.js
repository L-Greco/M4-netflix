import Search from "./components/Search"
import './App.css';
import NavBar from '../src/components/NavBar'
import Footer from "./components/Footer"
import ShowDetail from "./components/ShowDetail"
import { BrowserRouter as Router, Route } from "react-router-dom"




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Route component={Search} path="/" exact /> */}
        {/* <Search /> */}

        <Route component={Footer} path="/" exact />
        {/* <Footer /> */}
        <Route component={ShowDetail} path="/ShowDetail/:imgId" />
      </Router>
    </div>
  );
}

export default App;
