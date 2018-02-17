import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LineupHeadliner = (props) => {
    // TODO: Change to param from _id to title
    const { artist: { title, _id } } = props;
    return (
        <div className="text-1">
            <Link key={_id} to={`/artist/${_id}`} title={title}>
                {title}
            </Link>
        </div>
    );
};

LineupHeadliner.propTypes = {
    artist: PropTypes.shape({
        title: PropTypes.string,
        _id: PropTypes.number
    }).isRequired
};

export default LineupHeadliner;