/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import CardExample from './Card';
import CardContentExample from './CardContentTypes';
import CardSizingExample from './CardSizing';
import CardAlignmentExample from './CardAlignment';
import CardHeaderFooterExample from './CardHeaderFooter';
import CardImageCapsExample from './CardImageCaps';
import CardImageOverlayExample from './CardImageOverlay';
import CardBackgroundsExample from './CardBackgrounds';
import CardOutlineExample from './CardOutline';
import CardGroupsExample from './CardGroups';
import CardDecksExample from './CardDecks';
import CardColumnsExample from './CardColumns';

const CardExampleSource = require('!!raw-loader!./Card');
const CardContentExampleSource = require('!!raw-loader!./CardContentTypes');
const CardSizingExampleSource = require('!!raw-loader!./CardSizing');
const CardAlignmentExampleSource = require('!!raw-loader!./CardAlignment');
const CardHeaderFooterExampleSource = require('!!raw-loader!./CardHeaderFooter');
const CardImageCapsExampleSource = require('!!raw-loader!./CardImageCaps');
const CardImageOverlayExampleSource = require('!!raw-loader!./CardImageOverlay');
const CardBackgroundsExampleSource = require('!!raw-loader!./CardBackgrounds');
const CardOutlineExampleSource = require('!!raw-loader!./CardOutline');
const CardGroupsExampleSource = require('!!raw-loader!./CardGroups');
const CardDecksExampleSource = require('!!raw-loader!./CardDecks');
const CardColumnsExampleSource = require('!!raw-loader!./CardColumns');

export default class CardPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Card" />
        <h3>Card</h3>
        <hr />
        <div className="docs-example">
          <CardExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardColumns.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardDeck.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardFooter.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardGroup.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardHeader.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardLink.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>
        <h3>Content Types</h3>
        <div className="docs-example">
          <CardContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardContentExampleSource}
          </PrismCode>
        </pre>
        <h3>Sizing</h3>
        <div className="docs-example">
          <CardSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardSizingExampleSource}
          </PrismCode>
        </pre>
        <h3>Text alignment</h3>
        <div className="docs-example">
          <CardAlignmentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardAlignmentExampleSource}
          </PrismCode>
        </pre>
        <h3>Header and Footer</h3>
        <div className="docs-example">
          <CardHeaderFooterExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardHeaderFooterExampleSource}
          </PrismCode>
        </pre>
        <h3>Image caps</h3>
        <div className="docs-example">
          <CardImageCapsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardImageCapsExampleSource}
          </PrismCode>
        </pre>
        <h3>Image overlays</h3>
        <div className="docs-example">
          <CardImageOverlayExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardImageOverlayExampleSource}
          </PrismCode>
        </pre>
        <h3>Background variants</h3>
        <div className="docs-example">
          <CardBackgroundsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardBackgroundsExampleSource}
          </PrismCode>
        </pre>
        <h3>Outline variants</h3>
        <div className="docs-example">
          <CardOutlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardOutlineExampleSource}
          </PrismCode>
        </pre>
        <h3>Groups</h3>
        <div className="docs-example">
          <CardGroupsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardGroupsExampleSource}
          </PrismCode>
        </pre>
        <h3>Decks</h3>
        <div className="docs-example">
          <CardDecksExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardDecksExampleSource}
          </PrismCode>
        </pre>
        <h3>Columns</h3>
        <div className="docs-example">
          <CardColumnsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardColumnsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
