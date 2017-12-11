/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import Welcome from '../../components/Welcome';
 const welcome ={
   heading: 'moi',
   paragraph: 'moimoi'
 };

export default class Overview extends React.Component {
  render() {
    return (
     <h1>moi</h1>
    );
  }
}
