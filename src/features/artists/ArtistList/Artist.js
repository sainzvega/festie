import React from 'react';

const determine
const Artist = (props) => {
    const { rank, title } = props;

    return (
        <div>
            <span>{rank}</span>
            <span>{title}</span>
        </div>
    )
};

export default Artist;