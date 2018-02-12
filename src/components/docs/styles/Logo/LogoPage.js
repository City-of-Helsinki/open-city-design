/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';
import Image from '../../../../components/Image';
import WelcomeSmall from '../../../WelcomeSmall';
import Logo from './Logo';

import logo from './logo-hki.svg';
import howTo from './howTo.png';

const Documentation = require('!!raw-loader!./Logo.md');
const svgLogo = require('!!raw-loader!./svgLogo.scss')
const logoUse = require('!!raw-loader!./logoUse.scss')

const welcome = {
  heading: 'Logo',
  paragraph: 'The Helsinki Symbol consists of the Helsinki Grotesk typed Helsinki text circled by The frame shape of the city of Helsinki logo.'
  
}
const image1 = { url: logo }
const image2 = { url: howTo}

export default class LogoPage extends React.Component {
  render() {
      return (
            <div>
                  <Helmet title="Koros" />

                  <WelcomeSmall welcome={welcome} />
                  <article className="docs-markdown">
                        <Markdown source={Documentation} />
                  </article>
                  <h4>Basic example of including the logo</h4>
                  <pre>
                        <PrismCode className="language-css">
                        {logoUse}
                        </PrismCode>
                  </pre>
                  <div className="docs-example">
                          <Image imageStyle={imageStyle} image={image1} />
                  </div>
                  <h4>Inline svg logo</h4>
                  <pre>
                        <PrismCode className="language-svg">
                        {svgLogo}
                        </PrismCode>
                  </pre>

                  <div className="docs-example">
                  </div>

            </div>
      );
  }
}

const imageStyle = {
      maxWidth: '100%',
}
