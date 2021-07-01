// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { LoginCmp } from '../../comp/login/LoginCmp';
import { HeaderCmp } from '../../comp/header/HeaderCmp';
import { SidebarCmp } from '../../comp/sidebar/SidebarCmp';
import { FooterCmp } from '../../comp/footer/FooterCmp';
import { CntHomeCmp } from '../../comp/content/CntHomeCmp';

import { APIService } from '../../service/api';
import { StorageService } from '../../service/storage';

// Resources
import './AppPg.css';

// Component
export class AppPg extends Component {

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
        <LoginCmp loginCallback={this.loginCallback} />
      )
    }

    return (
      <Router>

        <MDBContainer fluid>

          <MDBRow>
            <MDBCol size="12">
              <HeaderCmp appConfig={appConfig} logoutCallback={this.logoutCallback} />
            </MDBCol>  
          </MDBRow>

          {/* // TEMPORAL */}
          <MDBRow style={{paddingTop: "80px",paddingBottom: "40px"}}>
            <MDBCol size="2">
              <SidebarCmp />
            </MDBCol>
            <MDBCol size="10">

              {/* TEMPORAL */}
              <div>Name: {userProfile.name}</div>
              <div>Token: {userProfile.token}</div>

              <Switch>
                <Route path="/about">

                  {/* TEMPORAL */}
                  <h2>About</h2>

                </Route>
                <Route path="/">
                  <CntHomeCmp />
                </Route>
              </Switch> 

            </MDBCol>
          </MDBRow>
            
          <MDBRow>
            <MDBCol size="12">
              <FooterCmp />
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
    window.location.href = '/';
  };

  logoutCallback = () => {
    this.setState({userProfile: null});
    this.storageSer.clear();
  };

};
