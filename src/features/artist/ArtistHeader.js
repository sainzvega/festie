import React from 'react';
import ArtistImage from 'ArtistHeader';

const ArtistHeader = (props) => {
    const { artistTitle, festivalTitle } = props;
    return (
        <h1 className="heading">
            <span className="avatar-container">
                <ArtistImage />
            </span>
            <span>&nbsp;&nbsp;{artistTitle}</span>
            <small>&nbsp;&nbsp;{festivalTitle}</small>
        </h1>
    );
};

export default ArtistHeader;