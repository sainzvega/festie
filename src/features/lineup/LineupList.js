import React from 'react';
import { groupBy, map } from 'lodash';

import { LineupArtist, LineupHeadLiner } from './LineupArtist';

const mapArtist = (artists) => {
    const groupedArtist = groupBy(artists, 'rank');
    return map(groupedArtist, (artistGroup) => {
        const firstArtist = artistGroup[0];
        const { rank } = firstArtist;
        if (rank === 1)
            return <LineupHeadLiner key={rank} {...firstArtist} />
        else
            return <LineupArtist key={rank} artistGroup={artistGroup} artistRank={rank} />
    });
};

const LineupList = (props) => {
    const { artists } = props;
    return (
        <section>
            {mapArtist(artists)}
        </section>
    );
};

export default LineupList;