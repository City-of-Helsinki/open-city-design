import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    const BtnStyle ={
      margin: '10px',
      width: '400px',
    }
    return (
      <div>
        <Button style={BtnStyle} outline color="primary">primary</Button>{' '}
        <Button style={BtnStyle} outline color="secondary">secondary</Button>{' '}
        <Button style={BtnStyle} outline color="success">success</Button>{' '}
        <Button style={BtnStyle} outline color="info">info</Button>{' '}
        <Button style={BtnStyle} outline color="warning">warning</Button>{' '}
        <Button style={BtnStyle} outline color="danger">danger</Button>{' '}
        <Button style={BtnStyle} outline color="light">light</Button>{' '}
        <Button style={BtnStyle} outline color="dark">dark</Button>
      </div>
    );
  }
}
