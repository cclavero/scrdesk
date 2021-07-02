// Imports
import React, { Component, Fragment } from 'react';

// Component
export class CntUserCmp extends Component {

  render() {
    return (
      <Fragment>

        <h2>User</h2>
        
        <div>Name: {this.props.userProfile.name}</div>
        <div>Token: {this.props.userProfile.token}</div>

      </Fragment>  
    );
  };

}
