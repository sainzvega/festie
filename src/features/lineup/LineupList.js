import React from 'react';
import LineupArtist from './LineupArtist';

const LineupList = (props) => {
    const { artists } = props;
    return (
        <section>
            {
                artists.map(artist => {
                    return <LineupArtist {...artist} />
                })
            }
        </section>
    );
};

export default LineupList;