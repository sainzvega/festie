import React from 'react';
import ArtistListHeader from './ArtistListHeader';
import Artist from './Artist';

const ArtistList = (props) => {
    const { artists, headerText } = props;
    return (
        <section>
            <ArtistListHeader headerText={headerText} />
            {
                artists.map(artist => { return <Artist {...artist} /> })
            }
        </section>
    );
};

export default ArtistList;