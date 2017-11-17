/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import PaginationExample from '../../components/docs/examples/Pagination';
import PaginationStateExample from '../../components/docs/examples/PaginationState';
import PaginationSizingLargeExample from '../../components/docs/examples/PaginationSizingLarge';
import PaginationSizingSmallExample from '../../components/docs/examples/PaginationSizingSmall';

const PaginationExampleSource = require('!!raw-loader!../../components/docs/examples/Pagination');

const PaginationStateExampleSource = require('!!raw-loader!../../components/docs/examples/PaginationState');

const PaginationSizingLargeExampleSource = require('!!raw-loader!../../components/docs/examples/PaginationSizingLarge');

const PaginationSizingSmallExampleSource = require('!!raw-loader!../../components/docs/examples/PaginationSizingSmall');

export default class PaginationPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Pagination" />
        <h3>Pagination</h3>
        <div className="docs-example">
          <PaginationExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}`}
          </PrismCode>
        </pre>
        <h3>Disabled and active states</h3>
        <div className="docs-example">
          <PaginationStateExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationStateExampleSource}
          </PrismCode>
        </pre>
        <h3>Sizing</h3>
        <div className="docs-example">
          <PaginationSizingLargeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSizingLargeExampleSource}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <PaginationSizingSmallExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSizingSmallExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
