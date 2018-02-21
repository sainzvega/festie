import React, { Component } from 'react';
import ArtistInfoHeader from './ArtistInfoHeader';
import ArtistInfoVideoPlayer from './ArtistInfoVideoPlayer';

class ArtistInfo extends Component {
    render() {
        const { artist: { title, images, videoUrl } } = this.props;
        const image = images && images.length ? images[0] : {}; // TODO: find a better way to get image
        return (
            <div className="flex-1">                
                <ArtistInfoHeader title={title} image={image}/>
                <br />
                <br />
                <ArtistInfoVideoPlayer videoUrl={videoUrl}/>
            </div>
        );
    }
}

export default ArtistInfo;