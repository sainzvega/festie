import React, { Component } from 'react';
import FestivalHeader from 'features/festival/FestivalHeader'
import FestivalDay from 'features/festival/FestivalDay';
import { fetchArtists } from 'api/artists';

export class Festival extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            headerText: 'Festival Day'
        };
    }

    componentDidMount() {
        const artists = fetchArtists();
        this.setState({ artists });
    }

    render() {
        const { artists, headerText } = this.state;

        return (
            <div className="max-width">
                <FestivalHeader />
                <br />
                <br />
                <FestivalDay headerText={headerText} artists={artists} />
                <br />
                <br />
                <FestivalDay headerText={headerText} artists={artists} />
                <br />
                <br />
                <FestivalDay headerText={headerText} artists={artists} />
            </div>
        );
    }
}

export default Festival;