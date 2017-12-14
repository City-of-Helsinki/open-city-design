/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import TableExample from './Table';
import TableBorderedExample from './TableBordered';
import TableHoverExample from './TableHover';
import TableInverseExample from './TableInverse';
import TableReflowExample from './TableReflow';
import TableResponsiveExample from './TableResponsive';
import TableSizingExample from './TableSizing';
import TableStripedExample from './TableStriped';

const TableExampleSource = require('!!raw-loader!./Table');
const TableBorderedExampleSource = require('!!raw-loader!./TableBordered');
const TableHoverExampleSource = require('!!raw-loader!./TableHover');
const TableInverseExampleSource = require('!!raw-loader!./TableInverse');
const TableReflowExampleSource = require('!!raw-loader!./TableReflow');
const TableResponsiveExampleSource = require('!!raw-loader!./TableResponsive');
const TableSizingExampleSource = require('!!raw-loader!./TableSizing');
const TableStripedExampleSource = require('!!raw-loader!./TableStriped');

export default class TablesPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Tables" />
        <h3>Tables</h3>
        <hr />
        <div className="docs-example">
          <TableExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
        <PrismCode className="language-jsx">
{`Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
striped: PropTypes.bool,
inverse: PropTypes.bool,
hover: PropTypes.bool,
reflow: PropTypes.bool,
responsive: PropTypes.bool
};`}
        </PrismCode>
        </pre>
        <h3>Inverse table</h3>
        <div className="docs-example">
          <TableInverseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableInverseExampleSource}
          </PrismCode>
        </pre>
        <h3>Striped rows</h3>
        <div className="docs-example">
          <TableStripedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableStripedExampleSource}
          </PrismCode>
        </pre>
        <h3>Bordered table</h3>
        <div className="docs-example">
          <TableBorderedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableBorderedExampleSource}
          </PrismCode>
        </pre>
        <h3>Hoverable rows</h3>
        <div className="docs-example">
          <TableHoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableHoverExampleSource}
          </PrismCode>
        </pre>
        <h3>Small table</h3>
        <div className="docs-example">
          <TableSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableSizingExampleSource}
          </PrismCode>
        </pre>
        <h3>Responsive table</h3>
        <div className="docs-example">
          <TableResponsiveExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableResponsiveExampleSource}
          </PrismCode>
        </pre>
        <h3>Reflow</h3>
        <div className="docs-example">
          <TableReflowExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableReflowExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
