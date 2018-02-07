import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import Festival from 'features/festival/Festival';
import Artist from 'features/artist/Artist';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Router>
          <Switch>
            <Route exact path='/' component={Festival} />
            <Route path='/artist/:id?' component={Artist} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
