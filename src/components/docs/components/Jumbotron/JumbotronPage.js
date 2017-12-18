/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import JumbotronExample from './Jumbotron';
import JumbotronFluidExample from './JumbotronFluid';

const JumbotronExampleSource = require('!!raw-loader!./Jumbotron');
const JumbotronFluidExampleSource = require('!!raw-loader!./JumbotronFluid');

export default class JumbotronPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Jumbotron" />
        <h3>Jumbotron</h3>
        <hr />
        <div className="docs-example">
          <JumbotronExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {JumbotronExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>

        <h3>Fluid Jumbotron</h3>
        <hr />
        <div className="docs-example">
          <JumbotronFluidExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {JumbotronFluidExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
