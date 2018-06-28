/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import Helmet from 'react-helmet';

import BreadcrumbExample from './Breadcrumb';
import BreadcrumbNoListExample from './BreadcrumbNoList';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';


const welcome = {
  heading: 'Breadcrumb',
  paragraph: 'Indicate the current page location within a navigational hierarchy that automatically adds separators via CSS ',
}
const BreadcrumbExampleSource = require('!!raw-loader!./Breadcrumb.html');
const BreadcrumbExampleJsxSource = require('!!raw-loader!./Breadcrumb');

const BreadcrumbNoListExampleSource = require('!!raw-loader!./BreadcrumbNoList.html');
const BreadcrumbNoListExampleJsxSource = require('!!raw-loader!./BreadcrumbNoList');

export default class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Breadcrumbs" />
        <WelcomeSmall welcome={welcome} />
        <div className="docs-example">
          <BreadcrumbExample />
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: BreadcrumbExampleSource, language: 'markup', name: 'HTML markup'},{code: BreadcrumbExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>No list</h3>
        <hr />
        <p>Breadcrumbs can work without the usage of list markup.</p>
        <div className="docs-example">
          <BreadcrumbNoListExample />
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: BreadcrumbNoListExampleSource, language: 'markup', name: 'HTML markup'},{code: BreadcrumbNoListExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>
      </div>
    );
  }
}
