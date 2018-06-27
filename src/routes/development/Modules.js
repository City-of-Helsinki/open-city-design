import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';
import Welcome from '../../components/Welcome';


class Modules extends Component {
      render() {
            const imgStyle = {
                  maxHeight: '20px',
            };
            const welcome = {
                  heading: "Modules",
                  paragraph: "From here you can see possible modules"
            };


            return (
                  <div className="row">

                        <Col xs={12} md={10}>
                              <Welcome welcome={welcome} />

                              <Button>Modules<img style={imgStyle} src="https://camo.githubusercontent.com/34ab12e06afbf839047bf3c19ed3e76082921f85/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f33783051313531343431317a336c314f326131512f73746f7279626f6f6b732d6f6c642e706e673f582d436c6f75644170702d56697369746f722d49643d643430373439383635383733643762356162333263383038353231353066373426763d6530643332303332" alt="placeholder"/></Button>

                        </Col>
                  </div>

            );
      }
}
export default Modules;
