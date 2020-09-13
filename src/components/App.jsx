import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route path='/' exact component={LandingPage} />
      </Router>
    );
  }
}

export default App;
