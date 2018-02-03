import React from 'react';
import avatar from 'content/img/coachella-avatar.jpg';

export const FestivalHeader = () => {
    return (
        <h1 className="heading">
            <span className="avatar-container">
                <img src={avatar} alt="Image" className="avatar" />
            </span>
            <span>&nbsp;&nbsp;Coachella 2018</span>
        </h1>
    );
};

export default FestivalHeader;