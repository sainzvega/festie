import React from 'react';
import { groupBy, map } from 'lodash';
import LineupArtistGroup from './LineupArtistGroup';
import LineupHeadliner from './LineupHeadliner';
import PropTypes from 'prop-types';

const mapArtists = (artists) => {
    const groupedArtist = groupBy(artists, 'rank');    
    return map(groupedArtist, (artistGroup, rank) => {        
        if (rank === 1)
            return <LineupHeadliner key={rank} artist={artistGroup[0]} />
        else
            return <LineupArtistGroup key={rank} artistGroup={artistGroup} artistGroupRank={rank} />
    });
};

const LineupList = (props) => {
    const { artistList } = props;
    return (
        <section>
            {mapArtists(artistList)}
        </section>
    );
};

LineupList.propTypes = {
    artistList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LineupList;