/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

import FormExample from './Form';
import FormGridExample from './FormGrid';
import FormInlineExample from './FormInline';
import FormFeedbackExample from './FormFeedback';
import InputTypeExample from './InputType';
import InlineCheckboxesExample from './InlineCheckboxes';
import InputSizingExample from './InputSizing';
import InputGridSizingExample from './InputGridSizing';
import LabelHiddenExample from './LabelHidden';
const FormExampleSource = require('!!raw-loader!./Form.html');
const FormExampleJsxSource = require('!!raw-loader!./Form');

const FormGridExampleSource = require('!!raw-loader!./FormGrid');

const FormInlineExampleSource = require('!!raw-loader!./FormInline');

const FormFeedbackExampleSource = require('!!raw-loader!./FormFeedback');

const InputTypeExampleSource = require('!!raw-loader!./InputType');

const InlineCheckboxesExampleSource = require('!!raw-loader!./InlineCheckboxes');

const InputSizingExampleSource = require('!!raw-loader!./InputSizing');

const InputGridSizingExampleSource = require('!!raw-loader!./InputGridSizing');

const LabelHiddenExampleSource = require('!!raw-loader!./LabelHidden');

const welcome = {
  heading: 'Form',
  paragraph: 'Form is the primary user data input method for complex queries. The usability of forms makes or breaks the web service.',
  
}

const FormExampleCode = [
  {
    name: 'HTML markup',
    language: 'markup',
    code: FormExampleSource
  },
  {
    name: 'React component',
    language: 'jsx',
    code: FormExampleJsxSource
  }
]


export default class FormPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Form" />
        <WelcomeSmall welcome={welcome} />
        <div className="docs-example">
          <FormExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={FormExampleCode}></CodeTabs>
          <h3>React Properties</h3>
          <CodeBlock code={`Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};`} language="jsx">
          </CodeBlock>
        </CodeCollapse>

{/*

        <h3>Form Grid</h3>
        <div className="docs-example">
          <FormGridExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormGridExampleSource}
          </PrismCode>
        </pre>

        <h3>Inline Form</h3>
        <div className="docs-example">
          <FormInlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormInlineExampleSource}
          </PrismCode>
        </pre>

        <h3>Form Validation</h3>
        <div className="docs-example">
          <FormFeedbackExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormFeedbackExampleSource}
          </PrismCode>
        </pre>

        <h3>Input Types</h3>
        <div className="docs-example">
          <InputTypeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputTypeExampleSource}
          </PrismCode>
        </pre>

        <h3>Inline checkboxes</h3>
        <div className="docs-example">
          <InlineCheckboxesExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InlineCheckboxesExampleSource}
          </PrismCode>
        </pre>

        <h3>Input Sizing</h3>
        <div className="docs-example">
          <InputSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputSizingExampleSource}
          </PrismCode>
        </pre>

        <h3>Input Grid Sizing</h3>
        <div className="docs-example">
          <InputGridSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputGridSizingExampleSource}
          </PrismCode>
        </pre>

        <h3>Hidden Labels</h3>
        <div className="docs-example">
          <LabelHiddenExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelHiddenExampleSource}
          </PrismCode>
        </pre>
         */}
      </div>
    );
  }
}
