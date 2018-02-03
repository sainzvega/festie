import React from 'react';

const FestivalDataHeader = (props) => {
    const { headerText, headerDataText } = props;
    return (
        <div>
            <h6 className=""><strong>{headerText}</strong></h6>
            <div className="artist-count">{headerDataText}</div>
        </div>
    );
};

export default FestivalDataHeader;