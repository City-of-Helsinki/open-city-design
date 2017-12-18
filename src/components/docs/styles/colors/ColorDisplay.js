
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Colors from './Colors';
import HexRgb from 'hex-rgb';

export default class ColorDisplay extends React.Component {
      
      render() {
            return (
                  <div>
                        <Container>
                              <Row>
                                    {this.props.colors.map((color, i) =>
                                          <Col>
                                                      <Colors id={i} name={color.name} hex={color.hex} variable={color.variable} text={color.text} />
                                          </Col>
                                    )}
                              </Row>
                        </Container>
                  </div>
            );
      }
};