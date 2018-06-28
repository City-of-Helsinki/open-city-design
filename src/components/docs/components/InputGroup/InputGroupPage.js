/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import OverviewExample from './InputGroupOverview';
import AddonExample from './InputGroupAddon';
import AddonSizingExample from './InputGroupSizing';
import ButtonExample from './InputGroupButton';

const OverviewExampleSource = require('!!raw-loader!./InputGroupOverview');
const AddonExampleSource = require('!!raw-loader!./InputGroupAddon');
const AddonSizingExampleSource = require('!!raw-loader!./InputGroupSizing');
const ButtonExampleSource = require('!!raw-loader!./InputGroupButton');

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
      </div>
    );
  }
}
