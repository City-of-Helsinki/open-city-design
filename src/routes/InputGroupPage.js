/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import OverviewExample from '../components/docs/examples/InputGroupOverview';
import AddonExample from '../components/docs/examples/InputGroupAddon';
import AddonSizingExample from '../components/docs/examples/InputGroupSizing';
import ButtonExample from '../components/docs/examples/InputGroupButton';
import ButtonShorthandExample from '../components/docs/examples/InputGroupButtonShorthand';

const OverviewExampleSource = require('!!raw-loader!../components/docs/examples/InputGroupOverview');
const AddonExampleSource = require('!!raw-loader!../components/docs/examples/InputGroupAddon');
const AddonSizingExampleSource = require('!!raw-loader!../components/docs/examples/InputGroupSizing');
const ButtonExampleSource = require('!!raw-loader!../components/docs/examples/InputGroupButton');
const ButtonShorthandExampleSource = require('!!raw-loader!../components/docs/examples/InputGroupButtonShorthand');

export default class InputGroupPage extends React.Component {
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
        <Helmet title="Input Group" />
        <h3>Input Group</h3>
        <div className="docs-example">
          <OverviewExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {OverviewExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`InputGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string
};

InputGroupAddOn.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

InputGroupButton.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  groupClassName: PropTypes.string, // only used in shorthand
  groupAttributes: PropTypes.object, // only used in shorthand
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>
        <h3>Addons</h3>
        <div className="docs-example">
          <div>
            <AddonExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AddonExampleSource}
          </PrismCode>
        </pre>

        <h3>Addon Sizing</h3>
        <div className="docs-example">
          <div>
            <AddonSizingExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AddonSizingExampleSource}
          </PrismCode>
        </pre>

        <h3>Buttons / Dropdowns</h3>
        <div className="docs-example">
          <div>
            <ButtonExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonExampleSource}
          </PrismCode>
        </pre>

        <h3>Button Shorthand</h3>
        <p>
          Button shorthand is a convenience method for adding just a button. It is triggered when only a single string
          is the child. A Button will be created and all of the props will be passed to it with the exception of
          <code>groupClassName</code> and <code>groupAttributes</code>, which are used to added classes and attributes
          to the wrapping container. This means you can add your <code>onClick</code> and other handlers directly to
          <code>InputGroupButton</code>. If you want your string to not be wrapped in a button, then you really want to
          use <code>InputGroupAddon</code> (see Addons above for that).
        </p>
        <div className="docs-example">
          <div>
            <ButtonShorthandExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonShorthandExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
