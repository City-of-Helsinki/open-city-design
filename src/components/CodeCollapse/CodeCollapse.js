import React from 'react';
import { Collapse, Button } from 'reactstrap';

export default class CodeCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.state.collapse ?  'Hide' : 'Show'} code</Button>
        <Collapse isOpen={this.state.collapse}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}
