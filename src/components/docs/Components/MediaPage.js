/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import MediaExample from '../examples/Media';
import MediaNestedExample from '../examples/MediaNested';
import MediaAlignmentExample from '../examples/MediaAlignment';
import MediaListExample from '../examples/MediaList';
const MediaExampleSource = require('raw-loader!../examples/Media');

const MediaNestedExampleSource = require('raw-loader!../examples/MediaNested');

const MediaAlignmentExampleSource = require('raw-loader!../examples/MediaAlignment');

const MediaListExampleSource = require('raw-loader!../examples/MediaList');

export default class MediaPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Media object" />
        <h3>Media object</h3>
        <div className="docs-example">
          <MediaExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};`}
          </PrismCode>
        </pre>
        <h4>Nesting</h4>
        <div className="docs-example">
          <MediaNestedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaNestedExampleSource}
          </PrismCode>
        </pre>
        <h4>Alignment</h4>
        <div className="docs-example">
          <MediaAlignmentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaAlignmentExampleSource}
          </PrismCode>
        </pre>
        <h4>Media list</h4>
        <div className="docs-example">
          <MediaListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaListExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
