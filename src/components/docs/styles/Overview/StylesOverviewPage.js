/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';
import StylesOverview from './StylesOverview';


const Documentation = require('!!raw-loader!./StylesOverview.md');
const css = require('!!raw-loader!../../../../scss/bootstrap/scss/_hel-custom-styles.scss')


const welcome = {
      heading: 'Styles',
      paragraph: 'Styles are displayed here & they is essential'

}


export default class StylesOverviewPage extends React.Component {
      render() {
            return (
                  <div>
                        <Helmet title="Overview" />

                        <WelcomeSmall welcome={welcome} />

                        <article className="docs-markdown">
                              <Markdown source={Documentation} />
                        </article>

                        <h3>Example code</h3>
                        <pre>
                              <PrismCode className="language-css">
                                    {css}
                              </PrismCode>
                        </pre>
                  </div>
            );
      }
}
