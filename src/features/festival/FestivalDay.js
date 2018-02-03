import React from 'react';
import LineupHeader from 'features/lineup/LineupHeader';
import LineupList from 'features/lineup/LineupList';

const FestivalDay = (props) => {
    const { headerText, artists } = props;
    return (
        <section>
            <LineupHeader headerText={headerText} />
            <LineupList artists={artists} />
        </section>
    );
}

export default FestivalDay;