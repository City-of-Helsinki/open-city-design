import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Card, Button } from 'reactstrap';
import HexRgb from 'hex-rgb';

export default class Colors extends React.Component {

      constructor(props) {
            super(props);
            this.state = {copied: false};
      }

      render() {
            const cardStyle = {
                  marginBottom: '20px',
                  display: 'block'
            }
            const btnStyle = {
                  width: '200px',
                  padding: '10px 30px'
            };
            const colorStyle = {
                  background: this.props.hex,
                  height: '150px',
                  display: 'flex',
                  padding: '10px',
                  border: '2px solid rgba(0,0,0,0.2)',
                  borderBottom: 'none',
                  justifyContent: 'center',
                  alignItems: 'center'
            }
            const colorName = {
                  padding: '15px',
                  border: '2px solid rgba(0,0,0,0.2)',
                  borderTop: 'none'
            }
            return (
                  <a className="color-card" style={cardStyle}>
                        <div className="color-flood" style={colorStyle}>
                        <CopyToClipboard text={this.props.hex}
                              onCopy={() => this.setState({copied: true})}>
                              <Button outline btn-sm style={btnStyle} color={this.props.text}>{this.state.copied ? 'Copied!' : 'Copy hex'}</Button>
                        </CopyToClipboard>
                        </div>
                        <div className="color-name" style={colorName}>
                              <strong>{this.props.name}</strong>
                              <p>{this.props.hex}</p>
                        
                        </div>
                  </a>
            );
      }
};