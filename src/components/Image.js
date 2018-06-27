import React, { Component } from 'react';

class Image extends Component {
  render() {

    return (
      <div>
       <img src={this.props.image.url} style={this.props.imageStyle} alt="example"/>
      </div>

    );
  }
}
export default Image;
