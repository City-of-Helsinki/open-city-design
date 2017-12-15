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
        <Button btn-sm style={BtnStyle} color="primary">primary</Button>{' '}
        <Button style={BtnStyle} color="secondary">secondary</Button>{' '}
        <Button style={BtnStyle} color="success">success</Button>{' '}
        <Button style={BtnStyle} color="info">info</Button>{' '}
        <Button style={BtnStyle} color="warning">warning</Button>{' '}
        <Button style={BtnStyle} color="danger">danger</Button>{' '}
        <Button style={BtnStyle} color="light">light</Button>{' '}
        <Button style={BtnStyle} color="dark">dark</Button>{' '}
        <Button style={BtnStyle} color="link">link</Button>
      </div>
    );
  }
}
