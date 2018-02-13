/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

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
                  <Component top bottom>
                        <div className="container">
                            <h3 style={{color: 'white'}}>This is a Koro section</h3>
                            <ul>
                                <li>Preferred to split long content sections from each other.</li>
                                <li>Use this for UI elements (carousels, card lists), not for large amounts of article style text.</li>
                            </ul>
                        </div>
                  </Component>
            </div>

            <article className="docs-markdown">
                  <Markdown source={Documentation} />
            </article>

            <h3>Sources</h3>
            <h4>HTML</h4>

            <CodeCollapse>
              <CodeBlock code={html} language="markup">
              </CodeBlock>
            </CodeCollapse>

            <h4>CSS</h4>
            <CodeCollapse>
              <CodeBlock code={css} language="css">
              </CodeBlock>
            </CodeCollapse>

            <h4>React</h4>
            <CodeCollapse>
              <CodeBlock code={source} language="jsx">
              </CodeBlock>
            </CodeCollapse>
      </div>
    );
  }
}
