import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';

import { Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

import Welcome from './Welcome'

class Hero extends Component {
      render() {

            const heroStyle = {
                  minHeight: this.props.heroHeight,
            }
            
            const welcome = {
                  heading: 'Open City Design System',
                  paragraph: ''
            }
            return (
                  <div>
                        <LazyHero isCentered={true} color={this.props.heroColor} style={heroStyle} imageSrc="">
                              <Container>
                                    <Welcome welcome={welcome} />

                              </Container>
                        </LazyHero>
                  </div>
            );
      }
}

export default Hero;
