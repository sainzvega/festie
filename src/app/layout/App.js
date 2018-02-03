import React, { Component } from 'react';
import AppHeader from './AppHeader';
import FestivalHeader from 'features/festival/FestivalHeader'
import FestivalDay from 'features/festival/FestivalDay';

class App extends Component {
  render() {
    const artists = [
      { rank: 1, title: "Artist 1" },
      { rank: 2, title: "Artist 2" },
      { rank: 2, title: "Artist 2" },
      { rank: 2, title: "Artist 2" },
      { rank: 2, title: "Artist 2" },
      { rank: 2, title: "Artist 2" },
      { rank: 2, title: "Artist 2" },
      { rank: 2, title: "Artist 2" },
      { rank: 3, title: "Artist 3" },
      { rank: 3, title: "Artist 3" },
      { rank: 3, title: "Artist 3" },
      { rank: 3, title: "Artist 3" },
      { rank: 3, title: "Artist 3" },
      { rank: 3, title: "Artist 3" },
      { rank: 3, title: "Artist 3" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 4, title: "Artist 4" },
      { rank: 5, title: "Artist 5" },
      { rank: 5, title: "Artist 5" },
      { rank: 5, title: "Artist 5" },
      { rank: 5, title: "Artist 5" },
      { rank: 5, title: "Artist 5" },
      { rank: 5, title: "Artist 5" },
      { rank: 5, title: "Artist 5" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
      { rank: 6, title: "Artist 6" },
    ];

    const headerText1 = "Day 1";
    const headerText2 = "Day 2";
    const headerText3 = "Day 3";
    return (
      <div>
        <AppHeader />
        <main>
          <FestivalHeader />
          <FestivalDay headerText={headerText1} artists={artists} />
          <FestivalDay headerText={headerText2} artists={artists} />
          <FestivalDay headerText={headerText3} artists={artists} />
        </main>
        <aside>
          Hello Aside
        </aside>
      </div>
    );
  }
}

export default App;
