import React from 'react';
import LineupHeader from 'features/lineup/LineupHeader';
import LineupList from 'features/lineup/LineupList';

const FestivalDay = (props) => {
    const { headerText, artists } = props;
    return (
        <div className="max-width">
            <LineupHeader headerText={headerText} />
            <LineupList artists={artists} />
        </div>
    );
}

export default FestivalDay;