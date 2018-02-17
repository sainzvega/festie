import React from 'react';
import { map } from 'lodash';
import LineupArtist from './LineupArtist';
import PropTypes from 'prop-types';

const LineupArtistGroup = (props) => {
    const { artistGroup, artistGroupRank } = props;
    const className = `text-${artistGroupRank}`;
    return (
        <span className={className}>
            {map(artistGroup, artist => <LineupArtist key={artist._id} artist={artist} />)}
        </span>
    );
};

LineupArtistGroup.propTypes = {
    artistGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
    artistGroupRank: PropTypes.string.isRequired
};

export default LineupArtistGroup;