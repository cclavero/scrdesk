// Imports
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink,
  MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

// Resources
import './HeaderCmp.css';

// Component
export class HeaderCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {burgerMenuOpen: false};
  };

  render() {
    return (
      <MDBNavbar color="elegant-color-dark" dark scrolling expand="md" fixed="top" className="HeaderCmp-navbar">

        <MDBNavbarBrand>
          <h1 className="font-weight-bold white-text HeaderCmp-title">ScoresDesk</h1>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={() => this.toggleBurgerMenu()} />

        <MDBCollapse id="navbar-main" isOpen={this.state.burgerMenuOpen} navbar>

          <MDBNavbarNav className="HeaderCmp-navbarnav" left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Menu</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#">
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav className="HeaderCmp-navbarnav" right>

            <div className="HeaderCmp-version">ver. {this.props.appConfig.version}</div>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#" to="/user">
                    <MDBNavLink to="/user">User profile</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#" onClick={() => this.logout()}>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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
