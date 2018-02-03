import React from 'react';

const FestivalDataFooter = (props) => {
    const { footerText, footerDataText } = props;
    return (
        <div>
            <h6 className=""><strong>{footerText}</strong></h6>
            <div className="">{footerDataText}</div>
        </div>
    );
};

export default FestivalDataFooter;