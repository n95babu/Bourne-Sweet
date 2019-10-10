import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Desserts from './components/Desserts'
import Pie from './components/Cakes'
import Cakes from './components/Pies'
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
              <Route path='/desserts' component={Desserts} />
              <Route path='/pies' component={Pie} />
              <Route path='/cakes' component={Cakes} />
              <Route path='/cookies' component={Cookies} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </>

    );
  }
}
export default App;
