import React, { Component } from 'react';
import { getArtistByName } from 'api/artists';
import ArtistRecommended from './ArtistRecommended';
import ArtistInfo from './ArtistInfo';

export class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: null
        };
    }

    componentDidMount() {
        const { artistName } = this.props.match.params;
        const artist = getArtistByName(artistName);
        this.setState(() => ({ artist }));
    }

    renderLoading() {
        return <div>TEMP LOADING</div>;
    }

    renderArtist(artist) {                
        return (
            <main>
                <br />
                <br />
                <div className="flex-row">                
                    <ArtistRecommended artist={artist}/>
                    <ArtistInfo artist={artist}/>
                </div>
            </main>            
        );
    }

    render() {
        const { artist } = this.state;
        return artist === null ? this.renderLoading() : this.renderArtist(artist);
    }
}

export default Artist;
