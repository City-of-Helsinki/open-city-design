import React, { Component } from 'react';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';

class Home extends Component {

  render() {

    const hero = {
      hero: '<div>Open City Design System<span className="label label-primary">Alpha</span></div>',
      header: 'Helsinki',
      paragraph: 'Start creating your best designs and collaborate with developers to create best solutions for your city',


    }
    const heroStyle = {
    }


    return (
      <div>

            <Sponsors placement="top" />
            <Hero hero={hero} style={heroStyle} heroHeight={'100vh'} />

      </div>

    );
  }
}
export default Home;
