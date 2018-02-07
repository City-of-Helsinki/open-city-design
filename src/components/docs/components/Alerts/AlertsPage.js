/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert } from 'reactstrap';
import Helmet from 'react-helmet';

import AlertExample from './Alert';
import AlertLinkExample from './AlertLink';
import AlertContentExample from './AlertContent';
import AlertDismissExample from './AlertDismiss';
import AlertUncontrolledDismissExample from './AlertUncontrolledDismiss';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';

const AlertExampleSource = require('!!raw-loader!./Alert.html');

const AlertLinkExampleSource = require('!!raw-loader!./AlertLink');

const AlertContentExampleSource = require('!!raw-loader!./AlertContent');

const AlertDismissExampleSource = require('!!raw-loader!./AlertDismiss');

const AlertUncontrolledDismissExampleSource = require('!!raw-loader!./AlertUncontrolledDismiss');


const welcome = {
  heading: 'Alerts',
  paragraph: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
  
}


export default class AlertsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Alerts" />

        <WelcomeSmall welcome={welcome} />


        <div className="docs-example">
          <AlertExample />
        </div>

        <CodeBlock code={AlertExampleSource} language="markup"></CodeBlock>


        <h3>React Properties</h3>
        <CodeBlock code={`Alert.propTypes = {
                className: PropTypes.string,
                closeClassName: PropTypes.string,
                color: PropTypes.string, // default: 'success'
                isOpen: PropTypes.bool,  // default: true
                toggle: PropTypes.func,
                tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
                // Controls the transition of the alert fading in and out
                // See [Fade](/components/fade/) for more details
                transition: PropTypes.shape(Fade.propTypes),
              }`} language="jsx">
        </CodeBlock>

        <h3>Link color</h3>
        <div className="docs-example">
          <AlertLinkExample />
        </div>
        <CodeBlock code={AlertLinkExampleSource} language="jsx">
        </CodeBlock>

        <h3>Additional content</h3>
        <div className="docs-example">
          <AlertContentExample />
        </div>

        <CodeBlock code={AlertContentExampleSource} language="jsx">
        </CodeBlock>

        <h3>Dismissing</h3>
        <div className="docs-example">
          <AlertDismissExample />
        </div>

        <CodeBlock code={AlertDismissExampleSource} language="jsx">
        </CodeBlock>

        <h3>Uncontrolled [disable] Alerts</h3>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledAlert</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <AlertUncontrolledDismissExample />
        </div>

        <CodeBlock code={AlertUncontrolledDismissExampleSource} language="jsx">
        </CodeBlock>
      </div>
    );
  }
}
