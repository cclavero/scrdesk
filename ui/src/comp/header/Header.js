// Imports
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBBtn } from 'mdbreact';

// Resources
import './Header.css';

// Component
class Header extends Component {

  render() {
    return (
      <MDBNavbar color="elegant-color-dark" dark expand="md" scrolling fixed="top">
        <MDBNavbarBrand>
          <h1 className="font-weight-bold white-text Header-title">ScoresDesk - ver. {this.props.appConfig.version}</h1>
        </MDBNavbarBrand>
        <MDBBtn onClick={() => this.logout()} color="primary">Logout</MDBBtn>
      </MDBNavbar>
    );
  };

  // Internal methods ----------------------------------------------------------------

  logout = () => {
    this.props.logoutCallback();
  };

}

export default Header;