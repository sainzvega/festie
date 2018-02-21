import React from 'react';
import { Link } from 'react-router-dom';
import CoachellaImg from 'content/img/coachella-avatar.jpg';

const ArtistRecommended = () => {
    return (
        // TODO: split into seperate components.
        <div className="flex-item" style={{ width: '50%' }}>
            <section>
                <h1 className="heading">
                    <Link to="/">
                        <span className="avatar-container"><img src={CoachellaImg} alt="Coachella" className="avatar" /></span>
                        <span> &nbsp;&nbsp;Coachella 2018</span>
                    </Link >
                </h1>
                <br />
                <br />
                <h6><strong>RECOMMENDED ARTISTS BASED ON <span>THE WEEKEND</span></strong></h6>
                <br />
                <h4 className="festival-day"><strong>FRIDAY APRIL 13</strong></h4>
                <div>
                    {
                        ['Barclay Crenshaw', 'LION BABE', 'Giraffage',
                            'Talaboman', 'THEY', 'Cuco', 'Joseph Capriati'].map(artist => {
                                return <span key={artist}><Link to="/" title={artist}>{artist}</Link><span className="bullet">&nbsp;•&nbsp;</span></span>
                            })
                    }
                </div>
                <br />
                <br />
                <h4 className="festival-day"><strong>SATURDAY APRIL 14</strong></h4>
                <div>
                    {
                        ['Hannah Wants', 'Nothing But Thieves', 'John Maus',
                            'Kolsch', 'Japanese Breakfast', 'MAGIC GIANT', 'Omar-S'].map(artist => {
                                return <span key={artist}><Link to="/" title={artist}>{artist}</Link><span className="bullet">&nbsp;•&nbsp;</span></span>
                            })
                    }
                </div>
                <br />
                <br />
                <h4 className="festival-day"><strong>SUNDAY APRIL 15</strong></h4>
                <div>
                    {
                        ['Michale Mayer', 'Westside Gunn + Conway', 'Buscabulla',
                            'Peggy Gou', 'Snail Mail', 'Rolling Blackouts Coastal Fever', 'B Boys', 'The Delirians'].map(artist => {
                                return <span key={artist}><Link to="/" title={artist}>{artist}</Link><span className="bullet">&nbsp;•&nbsp;</span></span>
                            })
                    }
                </div>
                <br />
                <br />
            </section>
        </div>
    );
}

export default ArtistRecommended;