import Search from "./components/Search"
import './App.css';
import NavBar from '../src/components/NavBar'
import Footer from "./components/Footer"
import NewRegistration from "./components/NewRegistration";
import ShowDetail from "./components/ShowDetail"
import { BrowserRouter as Router, Route } from "react-router-dom"






function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Route component={Search} path="/" exact />
        {/* <Search /> */}
        {/* <ShowDetail /> */}
        <Route component={NewRegistration} path="/newReg" exact />
        <Route component={ShowDetail} path="/showDetail/:imgId" />

        <Footer />
      </Router>

    </div>
  );
}

export default App;
