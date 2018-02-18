import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LineupArtist = (props) => {
    const { artist: { title, _id, slug } } = props;
    return (
        <span>
            <Link key={_id} to={`/artist/${slug}`} title={title}>
                {title}
            </Link>
            <span className="bullet">&nbsp;•&nbsp;</span>
        </span>
    );
};

LineupArtist.propTypes = {
    artist: PropTypes.shape({
        title: PropTypes.string,
        _id: PropTypes.number
    }).isRequired
};

export default LineupArtist;