import React from 'react';
import FestivalHeader from 'features/festival/FestivalHeader'
import FestivalDay from 'features/festival/FestivalDay';

const Festival = () => {
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
        <div className="max-width">
            <FestivalHeader />
            <br />
            <br />
            <FestivalDay headerText={headerText1} artists={artists} />
            <br />
            <br />
            <FestivalDay headerText={headerText2} artists={artists} />
            <br />
            <br />
            <FestivalDay headerText={headerText3} artists={artists} />
        </div>
    );
};

export default Festival;