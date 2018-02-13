/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import ButtonExample from './Button';
import ButtonOutline from './ButtonOutline';
import ButtonStateful from './ButtonStateful';
import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';


const ButtonExampleSource = require('!!raw-loader!./Button.html');
const ButtonExampleJsxSource = require('!!raw-loader!./Button');

const ButtonOutlineSource = require('!!raw-loader!./ButtonOutline.html');
const ButtonOutlineJsxSource = require('!!raw-loader!./ButtonOutline');

const ButtonStatefulSource = require('!!raw-loader!./ButtonStateful.html');
const ButtonStatefulJsxSource = require('!!raw-loader!./ButtonStateful');

const welcome = {
  heading: 'Buttons',
  paragraph: 'Buttons are the most crucial interaction elements on directing user action. Utilise them to catch attention, propose next action, and move from one state to another.',
}

export default class ButtonsPage extends React.Component {

 
  render() {
    return (
      <div>
        <Helmet title="Buttons" />
        <WelcomeSmall welcome={welcome} />
        
        <div className="docs-example">
          <ButtonExample />
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: ButtonExampleSource, language: 'markup', name: 'HTML markup'},{code: ButtonExampleJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>

          <h4>React properties</h4>
          <CodeBlock code={`Button.propTypes = {
                  active: PropTypes.bool,
                  block: PropTypes.bool,
                  color: PropTypes.string, // default: 'secondary'
                  disabled: PropTypes.bool,

                  // Pass in a Component to override default button element
                  // example: react-router Link
                  // default: 'button'
                  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

                  onClick: PropTypes.func,
                  size: PropTypes.string
                }`} language="jsx">

          </CodeBlock>
        </CodeCollapse>


        <h3>Outline Buttons</h3>
        <div className="docs-example">
          <ButtonOutline />
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: ButtonOutlineSource, language: 'markup', name: 'HTML markup'},{code: ButtonOutlineJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Sizes</h3>
        <div className="docs-example">
          <Button color="primary" size="lg">Large Button</Button>{' '}
          <Button color="secondary" size="lg">Large Button</Button>
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: `<button class="btn btn-primary btn-lg">Large Button</button> 
<button class="btn btn-secondary btn-lg">Large Button</button>`, language: 'markup', name: 'HTML markup'},{code: `<Button color="primary" size="lg">Large Button</Button>{' '}
<Button color="secondary" size="lg">Large Button</Button>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <div className="docs-example">
          <Button color="primary" size="sm">Small Button</Button>{' '}
          <Button color="secondary" size="sm">Small Button</Button>
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: `<button class="btn btn-primary btn-sm">Small Button</button> 
<button class="btn btn-secondary btn-sm">Small Button</button>`, language: 'markup', name: 'HTML markup'},{code: `<Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary" size="sm">Small Button</Button>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <div className="docs-example">
          <Button color="primary" size="lg" block>Block level button</Button>
          <Button color="secondary" size="lg" block>Block level button</Button>
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: `<button class="btn btn-primary btn-lg btn-block">Block level button</button> 
<button class="btn btn-secondary btn-lg btn-block">Block level button</button>`, language: 'markup', name: 'HTML markup'},{code: `<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Active State</h3>
        <div className="docs-example">
          <Button color="primary" size="lg" active>Primary link</Button>{' '}
          <Button color="secondary" size="lg" active>Link</Button>
        </div>

        <CodeCollapse>
          <CodeTabs code={[{code: `<button class="btn btn-primary btn-lg active">Primary link</button>
<button class="btn btn-secondary btn-lg active">Link</button>`, language: 'markup', name: 'HTML markup'},{code: `<Button color="primary" size="lg" active>Primary link</Button>{' '}
<Button color="secondary" size="lg" active>Link</Button>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Disabled State</h3>
        <div className="docs-example">
          <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
          <Button color="secondary" size="lg" disabled>Button</Button>
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: `<button disabled class="btn btn-primary btn-lg disabled">Primary button</button>
<button disabled class="btn btn-secondary btn-lg disabled">Button</button>`, language: 'markup', name: 'HTML markup'},{code: `<Button color="primary" size="lg" disabled>Primary button</Button>{' '}
<Button color="secondary" size="lg" disabled>Button</Button>`, language: 'jsx', name: 'React component'}]}></CodeTabs>
        </CodeCollapse>

        <h3>Checkbox and Radio Buttons (Stateful Buttons)</h3>

        <div className="docs-example">
          <ButtonStateful />
        </div>
        <CodeCollapse>
          <CodeTabs code={[{code: ButtonStatefulSource, language: 'markup', name: 'HTML markup'},{code: ButtonStatefulJsxSource, language: 'jsx', name: 'React component'}]}></CodeTabs>
          <p>
            In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done uses the components which already exist in the React library.
          </p>
        </CodeCollapse>
      </div>
    );
  }
}
