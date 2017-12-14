/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import ListGroupExample from './ListGroup';
import ListGroupBadgeExample from './ListGroupBadge';
import ListGroupDisabledItemsExample from './ListGroupDisabledItems';
import ListGroupAnchorsAndButtonsExample from './ListGroupAnchorsAndButtons';
import ListGroupContextualClassesExample from './ListGroupContextualClasses';
import ListGroupCustomContentExample from './ListGroupCustomContent';

const ListGroupBadgeExampleSource = require('!!raw-loader!./ListGroupBadge');
const ListGroupExampleSource = require('!!raw-loader!./ListGroup');
const ListGroupDisabledItemsExampleSource = require('!!raw-loader!./ListGroupDisabledItems');
const ListGroupAnchorsAndButtonsExampleSource = require('!!raw-loader!./ListGroupAnchorsAndButtons');
const ListGroupContextualClassesExampleSource = require('!!raw-loader!./ListGroupContextualClasses');
const ListGroupCustomContentExampleSource = require('!!raw-loader!./ListGroupCustomContent');

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
