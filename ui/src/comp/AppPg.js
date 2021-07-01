// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './login/Login';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import ContMain from './content/Main';
import Footer from './footer/Footer';

import APIService from '../service/api';
import StorageService from '../service/storage';

// Resources
import './AppPg.css';

// Component
class AppPg extends Component {

  constructor(props) {
    super(props);

    this.apiSer = new APIService();
    this.storageSer = new StorageService();

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
    const userProfile = this.storageSer.get('userProfile');
    if (userProfile != null) {
      this.setState({userProfile: userProfile});
    }
  };

  render() {

    const { appConfig, userProfile } = this.state;

    if (userProfile == null) {
      return (
        <Login loginCallback={this.loginCallback} />
      )
    }

    return (
      <Router>

        <MDBContainer fluid>

          <MDBRow>
            <MDBCol size="12">
              <Header appConfig={appConfig} logoutCallback={this.logoutCallback} />
            </MDBCol>  
          </MDBRow>

          {/* // TEMPORAL */}
          <MDBRow style={{paddingTop: "80px",paddingBottom: "40px"}}>
            <MDBCol size="2">
              <Sidebar />
            </MDBCol>
            <MDBCol size="10">

              {/* TEMPORAL */}
              <div>Name: {userProfile.name}</div>
              <div>Token: {userProfile.token}</div>

              <Switch>
                <Route path="/about">
                  
                </Route>
                <Route path="/">
                  <ContMain />
                </Route>
              </Switch> 

            </MDBCol>
          </MDBRow>
            <h2>About</h2>
          <MDBRow>
            <MDBCol size="12">
              <Footer />
            </MDBCol>
          </MDBRow>

        </MDBContainer>

      </Router>
    );
  };  

  // Internal methods ----------------------------------------------------------------

  loginCallback = (userProfile) => {
    this.setState({userProfile: userProfile});
    this.storageSer.put('userProfile', userProfile);

    // TEMPORAL
    //this.history.push("/");
    //const history = useHistory();
    //history.push("/");
    window.history.pushState({page: "another"}, "another page", "http://google.com");

  };

  logoutCallback = () => {
    this.setState({userProfile: null});
    this.storageSer.clear();
  };

};

export default AppPg;