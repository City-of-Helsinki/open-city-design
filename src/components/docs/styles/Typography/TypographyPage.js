/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';
import Typography from './Typography';


const Documentation = require('!!raw-loader!./Typography.md');
const css = require('!!raw-loader!../../../../scss/bootstrap/scss/_hel-custom-styles.scss')


const welcome = {
  heading: 'Typography',
  paragraph: 'Typography is essential'
  
}


export default class TypographyPage extends React.Component {
  render() {
      return (
            <div>
                  <Helmet title="Typography" />

                  <WelcomeSmall welcome={welcome} />

                  <article className="docs-markdown">
                        <Markdown source={Documentation} />
                  </article>

                  <h2>Header variations</h2>

                  <div className="docs-example">
                        <Typography />
                  </div>

                  <h3>Sources</h3>
                  <h4>SCSS</h4>
                  <pre>
                        <PrismCode className="language-css">
                        {css}
                        </PrismCode>
                  </pre>
            </div>
      );
  }
}
