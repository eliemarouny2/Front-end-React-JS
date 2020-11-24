import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header1 from '../../Layouts/Header1';
import Footer from '../../Layouts/Footer';
import ErrorPage from '../../Layouts/ErrorPage';
import VisitedRestaurants from '../../Layouts/VisitedRestaurants';
import AllRestaurants from '../../Layouts/AllRestaurants';





class RestoApp extends Component {
  render() {
    return (
      <div className="RestoApp">
        <Router>
          <Header1></Header1>
          <>
              <Switch>
                <Route path="/" exact component={AllRestaurants} />
                <Route path="/page2" component={VisitedRestaurants} />
                <Route  component={ErrorPage} />
              </Switch>
             
          </>
          <Footer></Footer>
        </Router>
        
        
      </div>
    );
  }
}







export default RestoApp;
