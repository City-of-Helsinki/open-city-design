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
                  minHeight: '100vh',
                  position: 'relative'
            }
            const ctaButton = {
                  padding: '20px 50px 20px 50px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  border: 'solid 8px black',
                  borderRadius: '0px',
                  margin: '10px',
                  marginTop: '100px',
                  fontSize: '30px',

            }
            return (
                  <div>
                        <LazyHero style={bannerStyle} imageSrc="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
                              {/* <img style={logoStyle} src={'http://c2xdexdv.c2.suncomet.fi/wp-content/uploads/2017/05/Helsinki_logo_black_rgb.png'} responsive className="App-logo" alt="logo" /> */}
                              <h1>Open City Design System</h1>
                              <NavLink to="Design" ><Button color="primary">Design </Button></NavLink>
                              <NavLink to="Development" ><Button color="primary" >Development </Button></NavLink>


                        </LazyHero>
                  </div>

            );
      }

}

export default Hero;