import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import Festival from 'features/festival/Festival';
import Artist from 'features/artist/Artist';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppHeader />
          <Switch>
            <Route exact path='/' component={Festival} />
            <Route path='/artist/:_id?' component={Artist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
