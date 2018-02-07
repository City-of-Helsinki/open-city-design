/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';
//import TaskList from './TaskList';


//const Documentation = require('!!raw-loader!./TaskList.md');


const welcome = {
  heading: 'Landing page',
  paragraph: 'One of the major use of the city services is for users to complete certain tasks. Task list pattern provides a way to bundle the tasks together in user-friendly manner with a view to the whole process.',
}


export default class LandingPagePage extends React.Component {
  render() {
      return (
            <div>
                  <Helmet title="Landing Page" />
                  <WelcomeSmall welcome={welcome} />
                  <span>dghsdf kjdfhsg dsjkfhg sdfkgjh sdfjklgh sdj</span>
            </div>
      );
  }
}
