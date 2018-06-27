import React, { Component } from 'react'

import { Row } from 'reactstrap';


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
