/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert, Collapse } from 'reactstrap';
import Helmet from 'react-helmet';

import AlertExample from './Alert';
import AlertLinkExample from './AlertLink';
import AlertContentExample from './AlertContent';
import AlertDismissExample from './AlertDismiss';
import AlertUncontrolledDismissExample from './AlertUncontrolledDismiss';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

const AlertExampleSource = require('!!raw-loader!./Alert.html');
const AlertExampleJsxSource = require('!!raw-loader!./Alert');

const AlertLinkExampleSource = require('!!raw-loader!./AlertLink.html');
const AlertLinkExampleJsxSource = require('!!raw-loader!./AlertLink');

const AlertContentExampleSource = require('!!raw-loader!./AlertContent.html');
const AlertContentExampleJsxSource = require('!!raw-loader!./AlertContent');

const AlertDismissExampleSource = require('!!raw-loader!./AlertDismiss.html');
const AlertDismissExampleJsxSource = require('!!raw-loader!./AlertDismiss');

const AlertUncontrolledDismissExampleSource = require('!!raw-loader!./AlertUncontrolledDismiss.html');
const AlertUncontrolledDismissExampleJsxSource = require('!!raw-loader!./AlertUncontrolledDismiss');


const welcome = {
  heading: 'Alerts',
  paragraph: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
  
}

const AlertExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: AlertExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: AlertExampleJsxSource
  }
]

const AlertLinkExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: AlertLinkExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: AlertLinkExampleJsxSource
  }
]

const AlertContentExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: AlertContentExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: AlertContentExampleJsxSource
  }
]

const AlertDismissExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: AlertDismissExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: AlertDismissExampleJsxSource
  }
]

const AlertUncontrolledDismissExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: AlertUncontrolledDismissExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: AlertUncontrolledDismissExampleJsxSource
  }
]


export default class AlertsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Alerts" />

        <WelcomeSmall welcome={welcome} />


        <div className="docs-example">
          <AlertExample />
        </div>
        <CodeCollapse>
          <CodeTabs code={AlertExampleCode}></CodeTabs>
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
        </CodeCollapse>




        <h3>Link color</h3>
        <div className="docs-example">
          <AlertLinkExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={AlertLinkExampleCode} language="jsx">
          </CodeTabs>
        </CodeCollapse>

        <h3>Additional content</h3>
        <div className="docs-example">
          <AlertContentExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={AlertContentExampleCode} language="jsx">
          </CodeTabs>
        </CodeCollapse>

        <h3>Dismissing</h3>
        <div className="docs-example">
          <AlertDismissExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={AlertDismissExampleCode} language="jsx">
          </CodeTabs>
        </CodeCollapse>

        <h3>Uncontrolled [disable] Alerts</h3>
        <div className="docs-example">
          <AlertUncontrolledDismissExample />
        </div>

        <CodeCollapse>
          <p>
            For the most basic use-case in React an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledAlert</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
          </p>
          <CodeTabs code={AlertUncontrolledDismissExampleCode} language="jsx">
          </CodeTabs>
        </CodeCollapse>
      </div>
    );
  }
}
