/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { Link } from 'react-router-dom';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import NavbarExample from '../../components/docs/examples/Navbar';
import NavbarTogglerExample from '../../components/docs/examples/NavbarToggler';
const NavbarExampleSource = require('!!raw-loader!../../components/docs/examples/Navbar');
const NavbarTogglerExampleSource = require('!!raw-loader!../../components/docs/examples/NavbarToggler');

export default class NavsPage extends React.Component {
  render() {
    const HelmetStyle = {
      marginLeft: '30rem',
    }
    return (
      <div>
        <Helmet style={HelmetStyle} title="Navbar Components" />
        <h3>Navigation</h3>
        <div className="docs-example">
          <NavbarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavbarExampleSource}
          </PrismCode>
        </pre>
        <h4>Navbar Properties</h4>
        <p>See also <Link to="/components/navs/">Navs</Link> for additional components and PropTypes.</p>
        <pre>
          <PrismCode className="language-jsx">
{`Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavbarBrand Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h3>NavbarToggler</h3>
        <p>
          Place the <code>NavbarToggler</code> <b>after</b> <code>NavbarBrand</code> to have it appear on the right (typical setup).
          Reverse the order to have it appear on the left
        </p>
        <div className="docs-example">
          <NavbarTogglerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavbarTogglerExampleSource}
          </PrismCode>
        </pre>
        <h4>NavbarToggler Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
