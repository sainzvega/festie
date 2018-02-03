import React from 'react';
import { map } from 'lodash';

export const LineupArtist = (props) => {
    const { artistGroup, artistRank } = props;
    const className = `text-${artistRank}`;
    return (
        <span className={className}>
            {
                map(artistGroup, artist => {
                    const { title, _id } = artist;
                    return (
                        <a key={_id} href="#" title={title}>
                            <span>{title}</span>
                            <span className="bullet">•</span>
                        </a>
                    );
                })
            }
        </span>
    );
};

export const LineupHeadLiner = (props) => {
    const { title } = props;
    return (
        <div className="text-1">
            <a href="#" title={title}>{title}</a>
        </div>
    )
};