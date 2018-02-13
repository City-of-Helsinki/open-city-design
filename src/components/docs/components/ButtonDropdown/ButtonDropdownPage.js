/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

import Example from './ButtonDropdownMulti';
import ExampleSplit from './ButtonDropdownMultiSplit';
import ButtonDropdownExample from './ButtonDropdown';

const ButtonDropdownExampleSource = require('!!raw-loader!./ButtonDropdown.html');
const ButtonDropdownExampleJsxSource = require('!!raw-loader!./ButtonDropdown');

const ButtonDropdownMultiExampleSource = require('!!raw-loader!./ButtonDropdownMulti.html');
const ButtonDropdownMultiSplitExampleSource = require('!!raw-loader!./ButtonDropdownMultiSplit.html');

const welcome = {
  heading: 'Button dropdown',
  paragraph: 'Button dropdowns hide a second-level menu so they are useful in complex interactions. They require Bootstrap Javascript to function correctly.',
}


export default class ButtonDropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Helmet title="Button Dropdown" />
        <WelcomeSmall welcome={welcome} />

        <div className="docs-example">
          <ButtonDropdownExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: ButtonDropdownExampleSource, language: 'markup', name: 'HTML markup'},{code: ButtonDropdownExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
          <p>Button Dropdown needs Bootstrap jQuery additions or React to work properly.</p>

          <h4>React properties</h4>
          <CodeBlock code={`ButtonDropdown.propTypes = {
            disabled: PropTypes.bool,
            dropup: PropTypes.bool,
            group: PropTypes.bool,
            isOpen: PropTypes.bool,
            tag: PropTypes.string,
            toggle: PropTypes.func
          };

          DropdownToggle.propTypes = {
            caret: PropTypes.bool,
            color: PropTypes.string,
            disabled: PropTypes.bool,
            onClick: PropTypes.func,
            'data-toggle': PropTypes.string,
            'aria-haspopup': PropTypes.bool
          };`} language="jsx">

          </CodeBlock>
        </CodeCollapse>

        <h3>Single button dropdowns</h3>
        <div className="docs-example">
          <div>
            <Example color="primary" text="Primary" />
            <Example color="secondary" text="Secondary" />
            <Example color="success" text="Success" />
            <Example color="info" text="Info" />
            <Example color="warning" text="Warning" />
            <Example color="danger" text="Danger" />
          </div>
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: ButtonDropdownMultiExampleSource, language: 'markup', name: 'HTML markup'},{code: `<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret color="primary">
    Text
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Split button dropdowns</h3>
        <div className="docs-example">
          <div>
            <ExampleSplit color="primary" text="Primary" />
            <ExampleSplit color="secondary" text="Secondary" />
            <ExampleSplit color="success" text="Success" />
            <ExampleSplit color="info" text="Info" />
            <ExampleSplit color="warning" text="Warning" />
            <ExampleSplit color="danger" text="Danger" />
          </div>
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: ButtonDropdownMultiSplitExampleSource, language: 'markup', name: 'HTML markup'},{code: `<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <Button id="caret" color="primary">{this.props.text}</Button>
  <DropdownToggle caret color="primary" />
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>
{/*
        <h3>Sizing</h3>
        <div className="docs-example">
          <div>
            <ButtonDropdown isOpen={this.state.btnLg} toggle={() => { this.setState({ btnLg: !this.state.btnLg }); }}>
              <DropdownToggle caret size="lg">
                Large Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="mt-1">
            <ButtonDropdown isOpen={this.state.btnSm} toggle={() => { this.setState({ btnSm: !this.state.btnSm }); }}>
              <DropdownToggle caret size="sm">
                Small Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret size="lg">
    Large Button
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret size="sm">
    Small Button
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <h3>Dropup variation</h3>
        <div className="docs-example">
          <div>
            <ButtonDropdown dropup isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
              <DropdownToggle caret size="lg">
                Dropup
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle} dropup>
  <DropdownToggle caret caret size="lg">
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
*/}
      </div>
    );
  }
}
