// Imports
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

// Resources
import './Header.css';

// Component
class Header extends Component {

  render() {
    return (
      <Router>
        <MDBNavbar color="elegant-color-dark" dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand>
            <h1 className="font-weight-bold white-text Header-title">ScoresDesk - ver. {this.props.appConfig.version}</h1>
          </MDBNavbarBrand>
        </MDBNavbar>
      </Router>
    );
  };

}

export default Header;