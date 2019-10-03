import React from 'react';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Sweets from './components/Sweets';
import Footer from './components/footer';
import HomeImage from './components/HomeImage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/sweets' components={Sweets} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </>

    );
  }
}
export default App;
