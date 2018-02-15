import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

export const LineupArtist = (props) => {
    const { artistGroup, artistRank } = props;
    const className = `text-${artistRank}`;
    return (
        <span className={className}>
            {
                map(artistGroup, artist => {
                    const { title, _id } = artist;
                    return (
                        <Link key={_id} to={`/artist/${_id}`} title={title}>
                            <span>{title}</span>
                            <span className="bullet">&nbsp;•&nbsp;</span>
                        </Link>
                    );
                })
            }
        </span>
    );
};

export const LineupHeadLiner = (props) => {
    const { title, _id } = props;
    return (
        <div className="text-1">
            <Link key={_id} to={`/artist/${_id}`} title={title}>
                {title}
            </Link>
        </div>
    )
};