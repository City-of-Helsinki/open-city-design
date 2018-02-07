import React from 'react';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import './CodeBlock.scss'
import PrismCode from 'react-prism';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class CodeBlock extends React.Component {
      constructor(props) {
            super(props);
        
            this.state = {
              expanded: false,
              copied: false
            };
        
            this.onExpand = this.onExpand.bind(this);
      }

        
      onExpand() {
            this.setState({ expanded: true });
      }
      render() {
            const codeLength = this.props.code.split('\n').length;
            return (
                  <div>
                        <section className="code-section">

                              <CopyToClipboard text={this.props.code}
                                    onCopy={() => this.setState({copied: true})}>
                                    <Button small className="code-copy">
                                          {this.state.copied ? 'Copied!' : 'Copy'}
                                    </Button>
                              </CopyToClipboard>
                              <div className={classnames(['code-container', {'code-container--closed': !this.state.expanded && codeLength > 15}])}>
                                    { this.props.language ? (
                                          <pre>
                                                <PrismCode className={"language-" + this.props.language}>
                                                      {this.props.code}
                                                </PrismCode>
                                          </pre>
                                    ) : (
                                          this.props.children
                                    )}
                              </div>
                              <div className={classnames(['code-showmore', {'code-showmore--closed': this.state.expanded || codeLength < 15}])}>
                                    <button className="btn btn-primary" onClick={this.onExpand}>Show all ({codeLength} rows)</button>
                              </div>
                        </section>
                  </div>
            );
      }
}