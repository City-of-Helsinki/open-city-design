import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class SidebarButton extends Component {
      render() {
            const navButtonStyle = {
                  marginLeft: 20,
                  marginTop: 5,
                  minWidth: 200,
                  paddingLeft: 10,
                  textAlign: 'left'          }
            return(
                        <Button 
                        
                        outline color="primary" 
                        style={navButtonStyle} 
                        size='sm'>
                        {this.props.buttonText}
                        </Button> 
            );
      }
}


                       

  export default SidebarButton;