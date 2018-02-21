import React from 'react';
import PropTypes from 'prop-types';

const ArtistInfoVideoPlayer = ({ videoUrl, title }) => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe 
                src={videoUrl} 
                title={title}
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen="false" 
                className="embed-responsive-item">
            </iframe>
        </div>
    );
};

ArtistInfoVideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired
};

export default ArtistInfoVideoPlayer;