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
                        <p>Inspirational usage of the Helsinki Typeface:</p>
                           <Image imageStyle={imageStyle} image={image}/>

                        <h3>Typography details</h3>
                        <pre>
                              <PrismCode className="language-css">
                                    {css}
                              </PrismCode>
                        </pre>
                        <h2>Headings</h2>
                        <p>Heading line-height should be equal to the font-size in headings. Jos leipäteksti on 10/12, tulee
pienemmän väliotsikon olla 15/15 ja pääotsikon
30/30</p>
                        <h2>Body text</h2>
                        <p>
                              Tekstimassoissa käytetään rivivälinä 120 %.
Näin ollen, jos leipäteksti on 10 pt niin riviväli
on 12 pt.
Vieressä otsikko– ja
leipätekstikokoesimerkkejä.
Jos käytössä ei ole Helsinki Groteskia
käytetään korvaavaa Arial-kirjaintyyppiä.</p>
                        <div className="docs-example">
                              <Typography />
                        </div>
                        <h2>Type cuts</h2>
                        <p>There are four different cuts used in the Helsinki style. Detailed usage of the different cuts can be found from the Brand guidelines.</p>
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