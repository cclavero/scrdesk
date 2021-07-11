// Imports
import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBNavLink, MDBFormInline, MDBIcon, MDBCollapse } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

// Resources
import './SidebarCmp.css';

// Component
export class SidebarCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {menuItemOpen: {'men-2': false, 'men-3': false, 'men-4': false}};
  };

  render() {
    return (
      <Router>
        <MDBNav className="flex-column SidebarCmp-root">

          <MDBNavItem>
            <MDBFormInline>
              <div className="md-form my-0">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" size="20" />
              </div>  
            </MDBFormInline>
          </MDBNavItem>

          <div className="SidebarCmp-sep" />

          <MDBNavItem>
            <MDBNavLink to="/"><MDBIcon icon="home" fixed /> Menu 1</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <a href="#!" onClick={() => this.toggleCollapse('men-2')} className="nav-link">
              <MDBIcon icon="book" fixed /> Menu 2</a>
            <MDBCollapse id="men-2" isOpen={this.state.menuItemOpen['men-2']}>
              <MDBNavLink to="/">Submenu 2-1</MDBNavLink>
              <MDBNavLink to="/">Submenu 2-2</MDBNavLink>
              <MDBNavLink to="/">Submenu 2-3</MDBNavLink>
              <MDBNavLink to="/">Submenu 2-4</MDBNavLink>
            </MDBCollapse>
          </MDBNavItem>

          <MDBNavItem>
            <a href="#!" onClick={() => this.toggleCollapse('men-3')} className="nav-link">
              <MDBIcon icon="pencil-alt" fixed /> Menu 3</a>
            <MDBCollapse id="men-3" isOpen={this.state.menuItemOpen['men-3']}>
              <MDBNavLink to="/">Submenu 3-1</MDBNavLink>
              <MDBNavLink to="/">Submenu 3-2</MDBNavLink>
              <MDBNavLink to="/">Submenu 3-3</MDBNavLink>
              <MDBNavLink to="/">Submenu 3-4</MDBNavLink>
            </MDBCollapse>
          </MDBNavItem>

          <MDBNavItem>
            <a href="#!" onClick={() => this.toggleCollapse('men-4')} className="nav-link">
              <MDBIcon icon="cog" fixed /> Menu 4</a>
            <MDBCollapse id="men-4" isOpen={this.state.menuItemOpen['men-4']}>
              <MDBNavLink to="/">Submenu 4-1</MDBNavLink>
              <MDBNavLink to="/">Submenu 4-2</MDBNavLink>
              <MDBNavLink to="/">Submenu 4-3</MDBNavLink>
              <MDBNavLink to="/">Submenu 4-4</MDBNavLink>
            </MDBCollapse>  
          </MDBNavItem>

          <div className="SidebarCmp-sep" />

        </MDBNav>
      </Router>
    );
  };

  // Internal methods ----------------------------------------------------------------

  toggleCollapse = (collapseID) => {
    const { menuItemOpen } = this.state;
    menuItemOpen[collapseID] = !this.state.menuItemOpen[collapseID];
    this.setState({menuIemOpen: menuItemOpen});
  };

}