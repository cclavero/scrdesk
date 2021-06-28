// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Components
import Login from './login/Login';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import ContMain from './content/Main';
import Footer from './footer/Footer';

import APIService from '../service/api';

// Resources
import './App.css';

// Component
class App extends Component {

  constructor(props) {
    super(props);

    this.apiSer = new APIService();

    this.state = {appConfig: {}, userProfile: null, error: null};
  };

  componentDidMount() {
    this.apiSer.get('/app/config')
      .then((result) => {
        if (result.error != null) {
          this.setState({error: result.error});
        } else {
          this.setState({appConfig: result.data});
        }
      });
  };

  render() {

    const { appConfig, userProfile } = this.state;

    // TEMPORAL
    /*
    if (userProfile == null) {
      return (
        <Login />
      )
    }
    */

    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12">
            <Header appConfig={appConfig} />
          </MDBCol>  
        </MDBRow>
        {/* // TEMPORAL */}
        <MDBRow style={{paddingTop: "80px",paddingBottom: "40px"}}>
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