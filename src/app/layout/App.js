import React, { Component } from 'react';
import FestivalDay from 'features/festival/FestivalDay';

class App extends Component {
  render() {
    const artists = [
      { rank: 1, title: "Artist 1" },
      { rank: 2, title: "Artist 2" },
      { rank: 3, title: "Artist 3" },
      { rank: 4, title: "Artist 4" },
      { rank: 5, title: "Artist 5" },
      { rank: 6, title: "Artist 6" },
    ];

    const headerText = "Day 1";
    return (
      <div>
        <h1>Hello Festie</h1>
        <FestivalDay headerText={headerText} artists={artists} />
        <FestivalDay headerText={headerText} artists={artists} />
        <FestivalDay headerText={headerText} artists={artists} />
      </div>
    );
  }
}

export default App;
