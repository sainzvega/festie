import React from 'react';
import FestivalDataHeader from './FestivalData/FestivalDataHeader';
import FestivalPie from './FestivalData/FestivalPie';
import FestivalDataFooter from './FestivalData/FestivalDataFooter';

const FestivalInfo = () => {
    const headerText = 'Artist';
    const headerDataText = '120';
    const footerText = 'Genres';
    const footerDataText = 'Pop, Dance Pop, Rap, Pop Rap, Post-Teen Pop, Rock, Modern Rock, Tropical House, Trap Music, Hip Hop';
    const data = {
        datasets: [{
            label: '',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "magenta",
            borderWidth: "1",
        }]
    };
    return (
        <aside>
            <br />
            <br />
            <FestivalDataHeader
                headerText={headerText}
                headerDataText={headerDataText} />
            <br />
            <FestivalPie data={data} />
            <br />
            <FestivalDataFooter
                footerText={footerText}
                footerDataText={footerDataText} />
        </aside>
    );
};

export default FestivalInfo;