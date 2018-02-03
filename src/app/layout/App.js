import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Festival from 'features/festival/Festival';
import FestivalInfo from 'features/festival/FestivalInfo';
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <main>
          <br />
          <br />
          <Festival />
        </main>
        <FestivalInfo />
      </div>
    );
  }
}

export default App;
