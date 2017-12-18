/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';

import Component from './KoroSection';
// import Documentation from './KoroSection.md'

const Documentation = require('!!raw-loader!./KoroSection.md')
const source = require('!!raw-loader!./KoroSection.js');
const css = require('!!raw-loader!./KoroSection.css');
const html = require('!!raw-loader!./KoroSection.html');


const welcome = {
  heading: 'Koro section',
  paragraph: 'Helsinki Brand is filled with colors. Koro shapes help you distance sections from each other with various brand-specific border styles.',
  
}


export default class KoroSectionPage extends React.Component {
  render() {
    return (
      <div>
            <Helmet title="Koros" />

            <WelcomeSmall welcome={welcome} />

            <div className="docs-example">
                  <Component />
            </div>

            <article className="docs-markdown">
                  <Markdown source={Documentation} />
            </article>

            <h3>Sources</h3>
            <h4>React</h4>
            <pre>
                  <PrismCode className="language-jsx">
                  {source}
                  </PrismCode>
            </pre>
            <h4>HTML</h4>
            <pre>
                  <PrismCode className="language-html">
                  {html}
                  </PrismCode>
            </pre>
            <h4>CSS</h4>
            <pre>
                  <PrismCode className="language-css">
                  {css}
                  </PrismCode>
            </pre>
      </div>
    );
  }
}
