import React from 'react';

const LineupArtist = (props) => {
    const { rank, title } = props;

    return (
        <div>
            <span>{rank}</span>
            <span>{title}</span>
        </div>
    )
};

export default LineupArtist;