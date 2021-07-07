// Imports
import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

// Components
import { LanguageSwitchCmp } from '../i18n/LanguageSwitchCmp';

// Component
export class CntUserCmp extends Component {

  render() {
    return (
      <Fragment>

        <h2>User</h2>
        
        {/* TEMPORAL */}
        <div><FormattedMessage id="dummy.example" /></div>

        <div>Name: {this.props.userProfile.name}</div>
        <div>Token: {this.props.userProfile.token}</div>
        <div>Language: <LanguageSwitchCmp /></div>
      </Fragment>  
    );
  };

}
