/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import Helmet from 'react-helmet';
import TabsExample from './Tabs';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

const TabsExampleSource = require('!!raw-loader!./Tabs.html');
const TabsExampleJsxSource = require('!!raw-loader!./Tabs');


const welcome = {
  heading: 'Tabs',
  paragraph: 'Tabs are handy inner-page navigation element when you need have a lot of parallel content.',

}

const TabsExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: TabsExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: TabsExampleJsxSource
  }
]

export default function TabsPage() {
  return (
    <div>
      <Helmet title="Tabs" />

        <WelcomeSmall welcome={welcome} />

        <div className="docs-example">
          <TabsExample />
        </div>
        <CodeCollapse>
          <CodeTabs code={TabsExampleCode}></CodeTabs>
        </CodeCollapse>

    </div>
  );
}
