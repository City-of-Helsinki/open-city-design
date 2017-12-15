import React from 'react';
import './KoroSection.scss';

export default class KoroSection extends React.Component {
    render() {
        return (
            <div>
                <section className="section-koro hel-metro koro-wave-top koro-pulse-bottom koro-size-x3">
                    <div className="section-koro__content">
                        <div className="container">
                            <h1>This is a Koro section</h1>
                            <ul>
                                <li>Preferred to split long content sections from each other.</li>
                                <li>Use this for UI elements (carousels, card lists), not for large amounts of article style text.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

