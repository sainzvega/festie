import React from 'react';

const LineupHeader = ({headerText}) => {
    return (
        <h4 className="festival-day">
            <strong>{headerText}</strong>
        </h4>
    ) 
};

export default LineupHeader;