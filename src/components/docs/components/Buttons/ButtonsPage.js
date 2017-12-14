/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import classnames from 'classnames';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Helmet from 'react-helmet';
import ButtonExample from './Button';
import ButtonOutline from './ButtonOutline';
import ButtonStateful from './ButtonStateful';
const ButtonExampleSource = require('!!raw-loader!./Button.html');
const ButtonExampleReactSource = require('!!raw-loader!./Button');

const ButtonOutlineSource = require('!!raw-loader!./ButtonOutline.html');

const ButtonStatefulSource = require('!!raw-loader!./ButtonStateful');

export default class ButtonsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Helmet title="Buttons" />
        <h3>Buttons</h3>
        
        <div className="docs-example">
          <ButtonExample />
        </div>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              HTML
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              React
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <pre>
          <PrismCode className="language-jsx">
            {ButtonExampleSource}
          </PrismCode>
        </pre>
          </TabPane>
          <TabPane tabId="2">
          <pre>
          <PrismCode className="language-jsx">
            {ButtonExampleReactSource}
          </PrismCode>
        </pre>
          </TabPane>
        </TabContent>

        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}`}
          </PrismCode>
        </pre>
        <h3>Outline Buttons</h3>
        <div className="docs-example">
          <ButtonOutline />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonOutlineSource}
          </PrismCode>
        </pre>
        <h3>Sizes</h3>
        <div className="docs-example">
          <Button color="primary" size="lg">Large Button</Button>{' '}
          <Button color="secondary" size="lg">Large Button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg">Large Button</Button>{' '}
<Button color="secondary" size="lg">Large Button</Button>`}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <Button color="primary" size="sm">Small Button</Button>{' '}
          <Button color="secondary" size="sm">Small Button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary" size="sm">Small Button</Button>`}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <Button color="primary" size="lg" block>Block level button</Button>
          <Button color="secondary" size="lg" block>Block level button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>`}
          </PrismCode>
        </pre>
        <h3>Active State</h3>
        <div className="docs-example">
          <Button color="primary" size="lg" active>Primary link</Button>{' '}
          <Button color="secondary" size="lg" active>Link</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg" active>Primary link</Button>{' '}
<Button color="secondary" size="lg" active>Link</Button>`}
          </PrismCode>
        </pre>
        <h3>Disabled State</h3>
        <div className="docs-example">
          <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
          <Button color="secondary" size="lg" disabled>Button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg" disabled>Primary button</Button>{' '}
<Button color="secondary" size="lg" disabled>Button</Button>`}
          </PrismCode>
        </pre>

        <h3>Checkbox and Radio Buttons (Stateful Buttons)</h3>
        <p>
          In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done uses the components which already exist in this library.
        </p>
        <div className="docs-example">
          <ButtonStateful />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonStatefulSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
