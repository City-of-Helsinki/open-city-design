/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import BreadcrumbExample from './Breadcrumb';
import BreadcrumbNoListExample from './BreadcrumbNoList';
import WelcomeSmall from '../../../WelcomeSmall';


const welcome = {
  heading: 'Breadcrumb',
  paragraph: 'Indicate the current page location within a navigational hierarchy that automatically adds separators via CSS ',
}
const BreadcrumbExampleSource = require('!!raw-loader!./Breadcrumb');

const BreadcrumbNoListExampleSource = require('!!raw-loader!./BreadcrumbNoList');

export default class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Breadcrumbs" />
        <WelcomeSmall welcome={welcome} />
        <div className="docs-example">
          <BreadcrumbExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbExampleSource}
          </PrismCode>
        </pre>
        <h3>No list</h3>
        <hr />
        <p>Breadcrumbs can work without the usage of list markup.</p>
        <div className="docs-example">
          <BreadcrumbNoListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbNoListExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
