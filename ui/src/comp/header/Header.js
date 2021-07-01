// Imports
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink } from 'mdbreact';

// Resources
import './Header.css';

// Component
class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {burgerMenuOpen: false};
  };

  render() {
    return (
      <MDBNavbar color="elegant-color-dark" dark expand="md" scrolling fixed="top">

        <MDBNavbarBrand>
          <h1 className="font-weight-bold white-text Header-title">ScoresDesk - ver. {this.props.appConfig.version}</h1>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={() => this.toggleBurgerMenu()} />

        <MDBCollapse id="navbar-main" isOpen={this.state.burgerMenuOpen} navbar>

          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="#" onClick={() => this.logout()}>Logout</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

        </MDBCollapse>

      </MDBNavbar>
    );
  };

  // Internal methods ----------------------------------------------------------------

  toggleBurgerMenu = () => {
    this.setState({burgerMenuOpen: !this.state.burgerMenuOpen});
  };

  logout = () => {
    this.props.logoutCallback();
  };

}

export default Header;