// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Components
import { CntTitleCmp } from './CntTitleCmp';
import { LanguageSwitchCmp } from '../i18n/LanguageSwitchCmp';

// Component
export class CntUserCmp extends Component {

  render() {
    return (
      <MDBContainer fluid>

        <MDBRow>
          <MDBCol>
            <CntTitleCmp title="cnt.user.title" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <div>Name: {this.props.userProfile.name}</div>
            <div>Token: {this.props.userProfile.token}</div>
            <div>Language: <LanguageSwitchCmp /></div>
          </MDBCol>
        </MDBRow>  

      </MDBContainer>  
    );
  };

}