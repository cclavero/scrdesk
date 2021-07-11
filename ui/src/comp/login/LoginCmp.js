// Imports
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBAlert } from 'mdbreact';

// Component
class LoginCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {message: null, username: '', password: ''};
  };

  render() {

    const { formatMessage } = this.props.intl;
    const { message } = this.state;

    return (
      <MDBContainer>
        <MDBRow center style={{paddingTop: "80px"}}>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">ScoresDesk: <FormattedMessage id="cnt.login.title" /></h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">

                {message != null
                  ? <MDBAlert color="danger" dismiss><strong>{message}</strong></MDBAlert>
                  : <div></div>
                }

                <form onSubmit={(ev) => this.onFormSubmit(ev)}>
                  <MDBInput label={formatMessage({id: 'lbl.username'})} icon="user" group type="text" value={this.state.username}
                    getValue={(value) => this.registerFormData("username", value)} />
                  <MDBInput label={formatMessage({id: 'lbl.password'})} icon="lock" group type="password" value={this.state.password}
                    getValue={(value) => this.registerFormData("password", value)} />
                  <div className="text-center">
                    <MDBBtn type="submit" color="primary"><FormattedMessage id="btn.submit" /></MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };

  // Internal methods ----------------------------------------------------------------

  registerFormData = (field, value) => {
    this.setState({[field]: value});
  };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    const { username, password } = this.state;
    
    this.setState({message: null});

    // TODO: VALIDATION
    if (username === '' || password === '') {
      return;
    }

    this.props.appCtx.apiSer.post('/app/login', null, {username: username, password: password})
      .then((result) => {
        if (result.error != null) {
          this.setState({username: '', password: '', message: 'Bad username and/or password !!'});
        } else {
          this.props.loginCallback(result.data);
        }  
    });
  };

}

export default injectIntl(LoginCmp);