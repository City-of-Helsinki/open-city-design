/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

import WelcomeSmall from '../../../WelcomeSmall';

import ColorDisplay from './ColorDisplay';

const Documentation = require('!!raw-loader!./Colors.md');
const css = require('!!raw-loader!../../../../scss/helsinki/_colors.scss');


const welcome = {
  heading: 'Colors',
  paragraph: 'Helsinki Brand is filled with colors. The brand colors and the UI colors create a way to personalise different services while still keeping the user interface consistent.',
  
}


export default class ColorsPage extends React.Component {
  render() {
      const brandColors = [
            {
                  id: 1,
                  name: "Coat",
                  hex: "#0072c6",
                  variable: "$hel-coat",
                  text: "light"
            },
            {
                  id: 2,
                  name: "Tram",
                  hex: "#009246",
                  variable: "$hel-tram",
                  text: "light"
            },
            {
                  id: 3,
                  name: "Brick",
                  hex: "#bd2719",
                  variable: "$hel-brick",
                  text: "light"
            },
            {
                  id: 4,
                  name: "Fog",
                  hex: "#9fc9eb",
                  variable: "$hel-fog",
                  text: "dark"
            },
            {
                  id: 5,
                  name: "Summer",
                  hex: "#ffc61e",
                  variable: "$hel-summer",
                  text: "dark"
            },
            {
                  id: 6,
                  name: "Copper",
                  hex: "#00d7a7",
                  variable: "$hel-copper",
                  text: "dark"
            },
            {
                  id: 7,
                  name: "Suomenlinna",
                  hex: "#f5a3c7",
                  variable: "$hel-suomenlinna",
                  text: "dark"
            },
            {
                  id: 8,
                  name: "Engel",
                  hex: "#ffe977",
                  variable: "$hel-engel",
                  text: "dark"
            },
            {
                  id: 9,
                  name: "Bus",
                  hex: "#0000bf",
                  variable: "$hel-bus",
                  text: "light"
            },
            {
                  id: 10,
                  name: "Metro",
                  hex: "#fd4f00",
                  variable: "$hel-metro",
                  text: "light"
            },
            {
                  id: 11,
                  name: "Silver",
                  hex: "#dedfe1",
                  variable: "$hel-silver",
                  text: "dark"
            },
            {
                  id: 12,
                  name: "Gold",
                  hex: "#c2a251",
                  variable: "$hel-gold",
                  text: "dark"
            }

      ];
      const grays = [
            {
                  id: 1,
                  name: "Black",
                  hex: "#343434",
                  variable: "$hel-black",
                  text: "light"
            },
            {
                  id: 2,
                  name: "Dark gray",
                  hex: "#525a65",
                  variable: "$hel-dark",
                  text: "light"
            },
            {
                  id: 3,
                  name: "Medium gray",
                  hex: "#abb2bd",
                  variable: "$hel-gray",
                  text: "dark"
            },
            {
                  id: 4,
                  name: "Light gray",
                  hex: "#ebedf1",
                  variable: "$hel-light",
                  text: "dark"
            },
      ];
      const uiColors = [
            {
                  id: 1,
                  name: "Info",
                  hex: "#17a2b8",
                  variable: "$cyan",
                  text: "dark"
            },
            {
                  id: 2,
                  name: "Success",
                  hex: "#28a745",
                  variable: "$green",
                  text: "light"
            },
            {
                  id: 3,
                  name: "Alert",
                  hex: "#ffc107",
                  variable: "$yellow",
                  text: "dark"
            },
            {
                  id: 4,
                  name: "Danger",
                  hex: "#dc3545",
                  variable: "$red",
                  text: "dark"
            },
      ]
      return (
            <div>
                  <Helmet title="Colors" />

                  <WelcomeSmall welcome={welcome} />

                  <h2>Brand colors</h2>
                  <div className="docs-example">
                        <ColorDisplay colors={brandColors} />
                  </div>

                  <h2>Brand grayscale</h2>
                  <div className="docs-example">
                        <ColorDisplay colors={grays} />
                  </div>

                  <h2>UI helper colors</h2>
                  <div className="docs-example">
                        <ColorDisplay colors={uiColors} />
                  </div>

                  <article className="docs-markdown">
                        <Markdown source={Documentation} />
                  </article>

                  <h3>Sources</h3>
                  <h4>SCSS</h4>
                  <CodeCollapse>
                        <CodeBlock language="css" code={css}></CodeBlock>
                  </CodeCollapse>
            </div>
      );
  }
}
