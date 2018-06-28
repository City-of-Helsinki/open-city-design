/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';

import Helmet from 'react-helmet';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';

import FormExample from './Form';
import CustomFormExample from './CustomInputs';
import FormValidation from './FormValidation';

const FormExampleSource = require('!!raw-loader!./Form.html');
const FormExampleJsxSource = require('!!raw-loader!./Form');
const CustomFormExampleJsxSource = require('!!raw-loader!./CustomInputs');

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

        <h3>Basic Form elements</h3>
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

        <h3>Custom Form Inputs</h3>
        <div className="docs-example">
          <CustomFormExample />
        </div>

        <h3>Form Validation</h3>
        <div className="docs-example">
          <FormValidation />
        </div>

      </div>
    );
  }
}
