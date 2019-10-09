import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Desserts from './components/Desserts'
import Pies from './components/Pies'
import Cakes from './components/Cakes'
import Cookies from './components/Cookies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/desserts' components={Desserts} />
              <Route path='/pies' components={Pies} />
              <Route path='/cakes' components={Cakes} />
              <Route path='/cookies' components={Cookies} />

            </Switch>
          </div>
        </Router>
        <Footer />
      </>

    );
  }
}
export default App;
