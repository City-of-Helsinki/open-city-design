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
      <div className="mb-5 text-center">
        <Button color="primary" outline onClick={this.toggle} style={{ }} className="mb-3">{this.state.collapse ?  'Hide' : 'Show'} code</Button>
        <Collapse isOpen={this.state.collapse}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}
