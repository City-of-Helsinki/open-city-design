/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import BadgeExample from './Badge';
import BadgeButtonExample from './BadgeButton';
import BadgePillsExample from './BadgePills';
import BadgeVariationsExample from './BadgeVariations';
import BadgeLinksExample from './BadgeLinks';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';


const BadgeExampleSource = require('!!raw-loader!./Badge');

const BadgeButtonExampleSource = require('!!raw-loader!./BadgeButton');

const BadgePillsExampleSource = require('!!raw-loader!./BadgePills');

const BadgeVariationsExampleSource = require('!!raw-loader!./BadgeVariations');

const BadgeLinksExampleSource = require('!!raw-loader!./BadgeLinks');


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

        <CodeBlock code={BadgeExampleSource} language="jsx"></CodeBlock>

        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <div className="docs-example">
          <BadgeButtonExample />
        </div>


        <CodeBlock code={BadgeExampleSource} language="jsx"></CodeBlock>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeButtonExampleSource}
          </PrismCode>
        </pre>
        <h3>Contextual variations</h3>
        <div className="docs-example">
          <BadgeVariationsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeVariationsExampleSource}
          </PrismCode>
        </pre>
        <h3>Pills</h3>
        <div className="docs-example">
          <BadgePillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgePillsExampleSource}
          </PrismCode>
        </pre>
        <h3>Links</h3>
        <p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>
        <div className="docs-example">
          <BadgeLinksExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeLinksExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
