// Imports
import React, { Component } from 'react';
import { MDBFooter } from 'mdbreact';

// Resources
import './FooterCmp.css';

// Component
export class FooterCmp extends Component {

  render() {
    return (
      <MDBFooter color="elegant-color" className="pt-2 mt-2 fixed-bottom">
        <div className="text-center font-weight-bold FooterCmp-contents">&copy; {new Date().getFullYear()} ScoresDesk - Carles Clavero i Matas - <a href="mailto:carles.clavero@gmail.com">carles.clavero@gmail.com</a></div>
      </MDBFooter>
    );
  };

}
