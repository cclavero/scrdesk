// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Components
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import ContMain from './cont/Main';
import Footer from './footer/Footer';

// Resources
//import './App.css';

// Component
class App extends Component {

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12">
            <Header />
          </MDBCol>  
        </MDBRow>
        <MDBRow>
          <MDBCol size="2">
            <Sidebar />
          </MDBCol>
          <MDBCol size="10">
            <ContMain />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="12">
            <Footer />
          </MDBCol>
        </MDBRow>  
      </MDBContainer>
    );
  };  

};

export default App;