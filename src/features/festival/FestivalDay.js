import React from 'react';
import LineupHeader from 'features/lineup/LineupHeader';
import LineupList from 'features/lineup/LineupList';

const FestivalDay = (props) => {
    const { headerText, artistList } = props;
    return (
        <section>
            <LineupHeader headerText={headerText} />
            <LineupList artistList={artistList} />
        </section>
    );
};

export default FestivalDay;