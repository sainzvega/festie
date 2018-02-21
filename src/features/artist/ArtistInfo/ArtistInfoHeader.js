import React from 'react';

const ArtistInfoHeader = (props) => {    
    const { title, image: {url} } = props;
    return (
        <h1 className="heading">
            <span className="avatar-container">
                <img src={url} alt="Artist" className="avatar" />
            </span>
            <span>&nbsp;&nbsp;{title}</span>            
        </h1>
    );
};

export default ArtistInfoHeader;