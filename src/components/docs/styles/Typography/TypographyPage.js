/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';
import Image from '../../../Image';
import WelcomeSmall from '../../../WelcomeSmall';
import Typography from './Typography';
import Cuts from './Cuts';

import Type from '../../../../images/type.png'

const Documentation = require('!!raw-loader!./Typography.md');
const css = require('!!raw-loader!./TypoExample.scss')

const image = { url: Type }

const welcome = {
      heading: 'Typography',
      paragraph: ''

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
                        
                        <h3>Typography details</h3>
                        <pre>
                              <PrismCode className="language-css">
                                    {css}
                              </PrismCode>
                        </pre>
                        <h2>Headings</h2>
                        <p>Heading line-height should be equal to the font-size in headings.</p>
                        <h2>Body text</h2>
                        <div className="docs-example">
                              <Typography />
                        </div>
                        <h2>Type cuts</h2>
                        <p>There are four different cuts used in the Helsinki style.</p>
                        <div className="docs-example">
                              <Cuts />
                        </div>
                  </div>
            );
      }
}
const imageStyle = {
maxWidth: '100%',
}
