import './styles/App.css';
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Initiatives from './screens/Initiatives';
import Sponsor from './screens/Sponsor';

function App() {

  const hackMelbourne = 'Hack{Melbourne'

  return (
    <div className="App">
      <Router>
        <Navbar style = {navBar}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/initiatives" component={Initiatives}/>
          <Route path="/sponsors" component={Sponsor}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

const navBar = {
  paddingBottom: "28vh"
}

export default App;