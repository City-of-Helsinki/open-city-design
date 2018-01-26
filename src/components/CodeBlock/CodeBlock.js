import React from 'react';
import classnames from 'classnames';
import './CodeBlock.scss'

export default class CodeBlock extends React.Component {
      constructor(props) {
            super(props);
        
            this.state = {
              expanded: false
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
                        <section>
                              <div className={classnames(['code-container', {'code-container--closed': !this.state.expanded && codeLength > 15}])}>
                                    {this.props.children}
                              </div>
                              <div className={classnames(['code-showmore', {'code-showmore--closed': this.state.expanded || codeLength < 15}])}>
                                    <button className="btn btn-primary" onClick={this.onExpand}>Show all ({codeLength} rows)</button>
                              </div>
                        </section>
                  </div>
            );
      }
}
