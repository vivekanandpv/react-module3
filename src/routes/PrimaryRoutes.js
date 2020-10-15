import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const PrimaryRoutes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/contact/:country' component={Contact} />
        <Route exact path='/contact/:country/:city' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default PrimaryRoutes;
