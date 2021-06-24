// Imports
import React, { Component } from 'react';
import { MDBFooter } from 'mdbreact';

// Resources
import './Footer.css';

// Component
class Footer extends Component {

  render() {
    return (
      <MDBFooter color="elegant-color" className="pt-2 mt-2 fixed-bottom">
        <div className="text-center font-weight-bold Footer-contents">&copy; {new Date().getFullYear()} ScoresDesk</div>
      </MDBFooter>
    );
  };

}

export default Footer;