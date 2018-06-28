import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SidebarButton extends Component {
      constructor(props) {
            super(props);

            this.toggle = this.toggle.bind(this);
            this.state = {
                  dropdownOpen: false
            };
      }

      toggle() {
            this.setState({
                  dropdownOpen: !this.state.dropdownOpen
            });
      }

      render() {
            const navButtonStyle = {
                  marginLeft: 20,
                  marginTop: 5,
                  minWidth: 200,
                  paddingLeft: 10,
                  textAlign: 'left'
            }
            return (
                  <Dropdown  size='sm' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle style={navButtonStyle} outline color="primary" caret >
                              Helsinki
                   </DropdownToggle>
                        <DropdownMenu>
                              <DropdownItem>Turku</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Tampere</DropdownItem>
                        </DropdownMenu>
                  </Dropdown>
            );
      }
}


export default SidebarButton;
