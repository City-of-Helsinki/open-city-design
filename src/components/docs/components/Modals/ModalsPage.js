/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

import ModalExample from './Modal';
import ModalBackdropExample from './ModalBackdrop';
import ModalNestedExample from './ModalNested';
import ModalCustomTimeoutExample from './ModalCustomTimeout';
import ModalFadelessExample from './ModalFadeless';


const Documentation = require('!!raw-loader!./Modal.md');

const ModalExampleSource = require('!!raw-loader!./Modal.html');
const ModalExampleJsxSource = require('!!raw-loader!./Modal');

const ModalBackdropExampleSource = require('!!raw-loader!./ModalBackdrop');

const ModalNestedExampleSource = require('!!raw-loader!./ModalNested');

const ModalCustomTimeoutExampleSource = require('!!raw-loader!./ModalCustomTimeout');

const ModalFadelessExampleSource = require('!!raw-loader!./ModalFadeless');

const welcome = {
  heading: 'Modal',
  paragraph: 'Modal provides a box hovering over other content. It can be a good way to grab the focus and close off any other decisions from the user. They require Javascript to function properly.',
  
}
const ModalExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: ModalExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: ModalExampleJsxSource
  }
]

export default class ModalsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Modals" />
        <WelcomeSmall welcome={welcome} />
        <div className="docs-example">
            <ModalExample buttonLabel="Launch Modal"/>
            <ModalExample
              buttonLabel="Launch Modal with custom className"
              className="my-custom-modal"
            />
        </div>
        <article className="docs-markdown">
                  <Markdown source={Documentation} />
            </article>

        <CodeCollapse>
          <CodeTabs code={ModalExampleCode}></CodeTabs>
          <h3>React Properties</h3>
          <CodeBlock code={`Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see [Fade](/components/fade/) for more details
  backdropTransition: PropTypes.shape(Fade.propTypes),
  // modalTransition - controls modal transition 
  // timeout is 300ms by default to match bootstrap
  // see [Fade](/components/fade/) for more details
  modalTransition: PropTypes.shape(Fade.propTypes),
}`} language="jsx">
          </CodeBlock>
        </CodeCollapse>
        
{/*
        <h4>Backdrop</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalBackdropExample buttonLabel="Launch Modal" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalBackdropExampleSource}
          </PrismCode>
        </pre>

        <h4>Nested Modals</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalNestedExample buttonLabel="Launch Modal w/ Nested Example" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalNestedExampleSource}
          </PrismCode>
        </pre>

        <h4>Modals with Custom Transition Timeouts</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalCustomTimeoutExample buttonLabel="Launch Modal with Custom Transition Timeouts Example" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalCustomTimeoutExampleSource}
          </PrismCode>
        </pre>

        <h4>Modals without Fade Effect</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalFadelessExample buttonLabel="Launch Modal without Fade Effect Example" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalFadelessExampleSource}
          </PrismCode>
        </pre>
         */}
      </div>
    );
  }
}
