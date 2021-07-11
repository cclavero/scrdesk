// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import LoginCmp from '../../comp/login/LoginCmp';
import { HeaderCmp } from '../../comp/header/HeaderCmp';
import { SidebarCmp } from '../../comp/sidebar/SidebarCmp';
import { FooterCmp } from '../../comp/footer/FooterCmp';
import { CntHomeCmp } from '../../comp/content/CntHomeCmp';
import { CntUserCmp } from '../../comp/content/CntUserCmp';

// Resources
import './AppPg.css';

// Component
export class AppPg extends Component {

  constructor(props) {
    super(props);

    this.state = {appConfig: {}, userProfile: null, error: null};
  };

  componentDidMount() {
    this.props.appCtx.apiSer.get('/app/config')
      .then((result) => {
        if (result.error != null) {
          this.setState({error: result.error});
        } else {
          this.setState({appConfig: result.data});
        }
      });
    const userProfile = this.props.appCtx.storageSer.get('userProfile');
    if (userProfile != null) {
      this.setState({userProfile: userProfile});
    }
  };

  render() {

    const { appConfig, userProfile } = this.state;

    if (userProfile == null) {
      return (
        <LoginCmp appCtx={this.props.appCtx} loginCallback={this.loginCallback} />
      )
    }

    return (
      <Router>

        <MDBContainer fluid>

          <MDBRow>
            <MDBCol>
              <HeaderCmp appConfig={appConfig} logoutCallback={this.logoutCallback} />
            </MDBCol>  
          </MDBRow>

          <MDBRow className="AppPg-root">

            <MDBCol size="2" className="position-fixed d-inline-block overflow-auto special-color-dark AppPg-sidebar">
              <SidebarCmp />
            </MDBCol>

            <MDBCol className="offset-2 d-inline-block">
              <Switch>
                <Route path="/user">
                  <CntUserCmp appCtx={this.props.appCtx} userProfile={userProfile} />
                </Route>
                <Route path="/">
                  <CntHomeCmp appCtx={this.props.appCtx} />
                </Route>
              </Switch> 
            </MDBCol>

          </MDBRow>
        
          <MDBRow>
            <MDBCol>
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
    this.props.appCtx.storageSer.put('userProfile', userProfile);
    window.location.href = '/';
  };

  logoutCallback = () => {
    this.setState({userProfile: null});
    this.props.appCtx.storageSer.clear();
  };

}