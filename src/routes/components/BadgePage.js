/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import BadgeExample from '../../components/docs/examples/Badge';
import BadgeButtonExample from '../../components/docs/examples/BadgeButton';
import BadgePillsExample from '../../components/docs/examples/BadgePills';
import BadgeVariationsExample from '../../components/docs/examples/BadgeVariations';
import BadgeLinksExample from '../../components/docs/examples/BadgeLinks';
const BadgeExampleSource = require('!!raw-loader!../../components/docs/examples/Badge');

const BadgeButtonExampleSource = require('!!raw-loader!../../components/docs/examples/BadgeButton');

const BadgePillsExampleSource = require('!!raw-loader!../../components/docs/examples/BadgePills');

const BadgeVariationsExampleSource = require('!!raw-loader!../../components/docs/examples/BadgeVariations');

const BadgeLinksExampleSource = require('!!raw-loader!../../components/docs/examples/BadgeLinks');

export default class BadgesPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Badges" />
        <h3>Badges</h3>
        <hr />
        <p>Scale to parent</p>
        <div className="docs-example">
          <BadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeExampleSource}
          </PrismCode>
        </pre>
        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <div className="docs-example">
          <BadgeButtonExample />
        </div>
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
