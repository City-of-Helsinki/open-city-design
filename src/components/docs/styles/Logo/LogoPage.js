/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';
import Image from '../../../../components/Image';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

import logo from './logo-hki.svg';

const Documentation = require('!!raw-loader!./Logo.md');
const svgLogo = require('!!raw-loader!./svgLogo.scss')
const logoUse = require('!!raw-loader!./logoUse.scss')

const welcome = {
  heading: 'Logo',
  paragraph: 'The Helsinki Symbol consists of the Helsinki Grotesk typed Helsinki text circled by The frame shape of the city of Helsinki logo.'

}
const image1 = { url: logo }

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
                  <CodeCollapse>
                        <CodeBlock code={logoUse} language="css"></CodeBlock>
                  </CodeCollapse>
                  <div className="docs-example">
                          <Image imageStyle={imageStyle} image={image1} />
                  </div>
                  <h4>Inline svg logo</h4>

                  <CodeCollapse>
                        <CodeBlock code={svgLogo} language="svg"></CodeBlock>
                  </CodeCollapse>

            </div>
      );
  }
}

const imageStyle = {
      maxWidth: '100%',
}
