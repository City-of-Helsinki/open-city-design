/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import Helmet from 'react-helmet';

import BadgeExample from './Badge';
import BadgeButtonExample from './BadgeButton';
import BadgePillsExample from './BadgePills';
import BadgeVariationsExample from './BadgeVariations';
import BadgeLinksExample from './BadgeLinks';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';


const BadgeExampleSource = require('!!raw-loader!./Badge.html');
const BadgeExampleJsxSource = require('!!raw-loader!./Badge');

const BadgeButtonExampleSource = require('!!raw-loader!./BadgeButton.html');
const BadgeButtonExampleJsxSource = require('!!raw-loader!./BadgeButton');

const BadgePillsExampleSource = require('!!raw-loader!./BadgePills.html');
const BadgePillsExampleJsxSource = require('!!raw-loader!./BadgePills');

const BadgeVariationsExampleSource = require('!!raw-loader!./BadgeVariations.html');
const BadgeVariationsExampleJsxSource = require('!!raw-loader!./BadgeVariations');

const BadgeLinksExampleSource = require('!!raw-loader!./BadgeLinks.html');
const BadgeLinksExampleJsxSource = require('!!raw-loader!./BadgeLinks');


const welcome = {
  heading: 'Badges',
  paragraph: 'Documentation and examples for badges, our small count and labeling component.',

}


export default class BadgesPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Badges" />
        <WelcomeSmall welcome={welcome} />
        <div className="docs-example">
          <BadgeExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: BadgeExampleSource, language: 'markup', name: 'HTML markup'},{code: BadgeExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <div className="docs-example">
          <BadgeButtonExample />
        </div>


        <CodeCollapse>
          <CodeTabs code={[{code: BadgeButtonExampleSource, language: 'markup', name: 'HTML markup'},{code: BadgeButtonExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Contextual variations</h3>
        <div className="docs-example">
          <BadgeVariationsExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: BadgeVariationsExampleSource, language: 'markup', name: 'HTML markup'},{code: BadgeVariationsExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Pills</h3>
        <div className="docs-example">
          <BadgePillsExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: BadgePillsExampleSource, language: 'markup', name: 'HTML markup'},{code: BadgePillsExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>


        <h3>Links</h3>
        <div className="docs-example">
          <BadgeLinksExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: BadgeLinksExampleSource, language: 'markup', name: 'HTML markup'},{code: BadgeLinksExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
          <p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>
        </CodeCollapse>
      </div>
    );
  }
}
