// Imports
import React, { Component } from 'react';
import { MDBFooter } from 'mdbreact';

// Component
class Footer extends Component {

  render() {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        &copy; {new Date().getFullYear()} Copyright: ScoresDesk
      </MDBFooter>
    );
  };

}

export default Footer;