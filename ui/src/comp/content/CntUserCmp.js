// Imports
import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

// Component
export class CntUserCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {locale: props.appCtx.i18nSer.getLocale()};
  };

  render() {
    return (
      <Fragment>

        <h2>User</h2>
        
        {/* TEMPORAL */}
        <div><FormattedMessage id="dummy.example" /></div>
        <form id="user-form">
          <div>Name: {this.props.userProfile.name}</div>
          <div>Token: {this.props.userProfile.token}</div>
          <div>
            Language:
            <select name="locale" value={this.state.locale} onChange={(ev) => this.changeLocale(ev)} 
              className="browser-default custom-select">
              <option value="en">English</option>
              <option value="ca">Catalan</option>
            </select>
          </div>
        </form>

      </Fragment>  
    );
  };

  // Internal methods ----------------------------------------------------------------

  changeLocale = (ev) => {
    const newLocale =  ev.target.value;
    this.props.appCtx.i18nSer.setLocale(newLocale);
    this.setState({locale: newLocale});
  } 

}
