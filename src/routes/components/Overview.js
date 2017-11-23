/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';


import BadgeExample from '../../components/docs/examples/Badge';
import BadgeButtonExample from '../../components/docs/examples/BadgeButton';
import BadgePillsExample from '../../components/docs/examples/BadgePills';
import BadgeVariationsExample from '../../components/docs/examples/BadgeVariations';
import BadgeLinksExample from '../../components/docs/examples/BadgeLinks';
import Welcome from '../../components/Welcome';
 const welcome ={
   heading: 'moi',
   paragraph: 'moimoi'
 };
const BadgeExampleSource = require('!!raw-loader!../../components/docs/examples/Badge');

const BadgeButtonExampleSource = require('!!raw-loader!../../components/docs/examples/BadgeButton');

const BadgePillsExampleSource = require('!!raw-loader!../../components/docs/examples/BadgePills');

const BadgeVariationsExampleSource = require('!!raw-loader!../../components/docs/examples/BadgeVariations');

const BadgeLinksExampleSource = require('!!raw-loader!../../components/docs/examples/BadgeLinks');

export default class Overview extends React.Component {
  render() {
    return (
     <h1>moi</h1>
    );
  }
}
