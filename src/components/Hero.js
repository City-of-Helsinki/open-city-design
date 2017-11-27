import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';


class Hero extends Component {
      render() {
            const logoStyle = {
                  width: '200px'
            }
            const bannerStyle = {
                  minHeight: '50vh',
                  position: 'relative'
            }
            const bannerContentStyle = {
                  marginTop: '25%',
                  marginLeft: 50,
                  color: 'white',
            }
            const ctaButton = {
                 marginTop: 20,


            }
            return (
                  <div>
                        <LazyHero isCentered={false} color={'#000'}style={bannerStyle} imageSrc="https://helsinki.eu/wp-content/uploads/2013/03/HK.png">
                              <div style={bannerContentStyle}>
                              {/* <img style={logoStyle} src={'http://c2xdexdv.c2.suncomet.fi/wp-content/uploads/2017/05/Helsinki_logo_black_rgb.png'} responsive className="App-logo" alt="logo" /> */}
                              <h1>Open City Design System</h1>
                              <NavLink to="Design" ><Button style={ctaButton}outline color="white">Explore</Button></NavLink>
                              </div>
                        </LazyHero>
                  </div>

            );
      }

}

export default Hero;