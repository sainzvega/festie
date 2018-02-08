import React, { Component } from 'react';
import { getArtistsById } from 'api/artists';

export class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: null
        };
    }

    componentDidMount() {
        const { _id } = this.props.match.params;
        const artist = getArtistsById(_id);
        this.setState(() => ({ artist }));
    }

    renderLoading() {
        return <div>TEMP LOADING</div>;
    }

    renderArtist(artist) {
        const { title } = artist;
        return (
            <div>
                <h1>Page for: {title}</h1>
            </div>
        );
    }

    render() {
        const { artist } = this.state;
        return artist === null ? this.renderLoading() : this.renderArtist(artist);
    }
}

export default Artist;
