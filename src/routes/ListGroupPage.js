/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import ListGroupExample from '../components/docs/examples/ListGroup';
import ListGroupBadgeExample from '../components/docs/examples/ListGroupBadge';
import ListGroupDisabledItemsExample from '../components/docs/examples/ListGroupDisabledItems';
import ListGroupAnchorsAndButtonsExample from '../components/docs/examples/ListGroupAnchorsAndButtons';
import ListGroupContextualClassesExample from '../components/docs/examples/ListGroupContextualClasses';
import ListGroupCustomContentExample from '../components/docs/examples/ListGroupCustomContent';

const ListGroupBadgeExampleSource = require('!!raw-loader!../components/docs/examples/ListGroupBadge');
const ListGroupExampleSource = require('!!raw-loader!../components/docs/examples/ListGroup');
const ListGroupDisabledItemsExampleSource = require('!!raw-loader!../components/docs/examples/ListGroupDisabledItems');
const ListGroupAnchorsAndButtonsExampleSource = require('!!raw-loader!../components/docs/examples/ListGroupAnchorsAndButtons');
const ListGroupContextualClassesExampleSource = require('!!raw-loader!../components/docs/examples/ListGroupContextualClasses');
const ListGroupCustomContentExampleSource = require('!!raw-loader!../components/docs/examples/ListGroupCustomContent');

export default class ListGroupPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="ListGroup Components" />
        <h3>ListGroup</h3>
        <div className="docs-example">
          <ListGroupExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupExampleSource}
          </PrismCode>
        </pre>

        <legend>Tags</legend>
        <div className="docs-example">
          <ListGroupBadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupBadgeExampleSource}
          </PrismCode>
        </pre>

        <legend>Disabled items</legend>
        <div className="docs-example">
          <ListGroupDisabledItemsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupDisabledItemsExampleSource}
          </PrismCode>
        </pre>

        <legend>Anchors and buttons</legend>
        <div className="docs-example">
          <p>Note: you need add action props to make these buttons fit the list.</p>
          <ListGroupAnchorsAndButtonsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupAnchorsAndButtonsExampleSource}
          </PrismCode>
        </pre>

        <legend>Contextual classes</legend>
        <div className="docs-example">
          <ListGroupContextualClassesExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupContextualClassesExampleSource}
          </PrismCode>
        </pre>

        <legend>Custom content</legend>
        <div className="docs-example">
          <ListGroupCustomContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupCustomContentExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
