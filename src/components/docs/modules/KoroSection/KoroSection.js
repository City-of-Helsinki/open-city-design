import React from 'react';
import classnames from 'classnames';
import './KoroSection.scss';

export default class KoroSection extends React.Component {
    render() {
        return (
            <div>
                <section className={classnames(['section-koro', 'hel-metro', {'koro-wave-top': this.props.top === true}, {'koro-pulse-bottom': this.props.bottom === true}, 'koro-size-x3'])}>
                    <div className="section-koro__content">
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}

