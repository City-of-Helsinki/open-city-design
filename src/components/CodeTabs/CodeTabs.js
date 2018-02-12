import React from 'react';
import classnames from 'classnames';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './CodeTabs.scss';
import CodeBlock from '../CodeBlock/CodeBlock';

export default class CodeTabs extends React.Component {
      constructor(props) {
            super(props);
        
            this.state = {
              expanded: false,
              copied: false,
              activeTab: 0
            };
        
            this.toggle = this.toggle.bind(this);
            this.onExpand = this.onExpand.bind(this);
      }
      toggle(tab) {
            if (this.state.activeTab !== tab) {
                  this.setState({
                  activeTab: tab
                  });
            }
      }
        
      onExpand() {
            this.setState({ expanded: true });
      }
      render() {
            return (
                  <div className="code-tabs">
                        {Array.isArray(this.props.code) &&
                              <div>
                                    <Nav tabs>
                                          {this.props.code.map((code, i) =>
                                                <NavItem>
                                                      <NavLink
                                                      className={classnames({ active: this.state.activeTab === i })}
                                                      onClick={() => { this.toggle(i); }}
                                                      >
                                                      {code.name &&
                                                            <span>{code.name}</span>
                                                      }
                                                      {!code.name &&
                                                            <span>{code.language}</span>
                                                      }
                                                      </NavLink>
                                                </NavItem>

                                          )}
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>

                                          {this.props.code.map((code, i) =>
                                                <TabPane tabId={i}>
                                                      <CodeBlock code={code.code} language={code.language}></CodeBlock>
                                                </TabPane>
                                          )}
                                    </TabContent>
                              </div>
                        }
                        {!Array.isArray(this.props.code) &&
                              <CodeBlock code={this.props.code} language={this.props.language}></CodeBlock>
                        }
                  </div>
            );
      }
}