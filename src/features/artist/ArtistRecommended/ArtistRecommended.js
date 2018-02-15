import React, { Component } from 'react';
import CoachellaImg from 'content/img/coachella-avatar.jpg';

class ArtistRecommended extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //TODO getRelatedArtist(this.props.artistId);
    }

    render() {
        return (
            // TODO: split into seperate components.
            <div className="flex-item" style={{ width: '50%' }}>
                <section>
                    <h1 className="heading"><a href="../coachella-2018.html"><span className="avatar-container"><img src={CoachellaImg} alt="Image" className="avatar" /></span> &nbsp;&nbsp; <span>Coachella 2018</span></a></h1>
                    <br />
                    <br />
                    <h6><strong>RECOMMENDED ARTISTS BASED ON <span>THE WEEKEND</span></strong></h6>
                    <br />
                    <h4 className="festival-day"><strong>FRIDAY APRIL 13</strong></h4>
                    <div><a href="#" title="Link">Barclay Crenshaw</a> <span className="bullet">•</span> <a href="#" title="Link">LION BABE</a> <span className="bullet">•</span> <a href="#" title="Link">Giraffage</a> <span className="bullet">•</span> <a href="#" title="Link">Talaboman</a> <span className="bullet">•</span> <a href="#" title="Link">THEY.</a> <span className="bullet">•</span> <a href="#" title="Link">Cuco</a> <span className="bullet">•</span> <a href="#" title="Link">Joseph Capriati</a> <span className="bullet">•</span></div>
                    <br />
                    <br />
                    <h4 className="festival-day"><strong>SATURDAY APRIL 14</strong></h4>
                    <div><a href="#" title="Link">Hannah Wants</a> <span className="bullet">•</span> <a href="#" title="Link">Nothing But Thieves</a> <span className="bullet">•</span> <a href="#" title="Link">John Maus</a> <span className="bullet">•</span> <a href="#" title="Link">Kolsch</a> <span className="bullet">•</span> <a href="#" title="Link">Japanese Breakfast</a> <span className="bullet">•</span> <a href="#" title="Link">MAGIC GIANT</a> <span className="bullet">•</span> <a href="#" title="Link">Omar-S</a> <span className="bullet">•</span> </div>
                    <br />
                    <br />
                    <h4 className="festival-day"><strong>SUNDAY APRIL 15</strong></h4>
                    <div><a href="#" title="Link">Michale Mayer</a> <span className="bullet">•</span> <a href="#" title="Link">Westside Gunn + Conway</a> <span className="bullet">•</span> <a href="#" title="Link">Buscabulla</a> <span className="bullet">•</span> <a href="#" title="Link">Peggy Gou</a> <span className="bullet">•</span> <a href="#" title="Link">Snail Mail</a> <span className="bullet">•</span> <a href="#" title="Link">Rolling Blackouts Coastal Fever</a> <span className="bullet">•</span> <a href="#" title="Link">B Boys</a> <span className="bullet">•</span> <a href="#" title="Link">The Delirians</a> <span className="bullet">•</span></div>
                    <br />
                    <br />
                </section>
            </div>
        );
    }
}

export default ArtistRecommended;