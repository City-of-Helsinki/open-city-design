/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';
import Image from '../../../Image';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';
import Typography from './Typography';
import Cuts from './Cuts';

import Type from '../../../../images/type.png'

const Documentation = require('!!raw-loader!./Typography.md');
const css = require('!!raw-loader!./TypoExample.scss')
const cssImport = require('!!raw-loader!./Typography.scss')

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
                                                
                        <h2>Typography details</h2>
                        <h4>Importing the font</h4>
                        <p>Please note that the font lisence is restricted to Helsinki City domains.</p>
                        <CodeCollapse>
                              <CodeBlock code={cssImport} language="css">
                              </CodeBlock>
                        </CodeCollapse>
                        <h4>Usage in CSS</h4>
                        <CodeCollapse>
                              <CodeBlock code={css} language="css">
                              </CodeBlock>
                        </CodeCollapse>
                  </div>
            );
      }
}
const imageStyle = {
maxWidth: '100%',
}
