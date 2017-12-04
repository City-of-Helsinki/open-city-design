import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';
import { NavLink } from 'react-router-dom';
import { Button, Row, Container, Badge } from 'reactstrap';


class Section extends Component {
      render() {

            const sectionStyle = {
                  height: this.props.height,
                  backgroundColor: this.props.backgroundColor
            }
            return (
                  <Row style={sectionStyle} />


            );
      }
}

export default Section;