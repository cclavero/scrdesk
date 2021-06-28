// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

// Resources
import './Login.css';

// Component
class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
  };

  registerFormData = (field, value) => {
    this.setState({[field]: value});
  }  

  onFormSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = this.state;

    // TODO:VALIDATIONS

    const userCredsJSON = JSON.stringify({username: username, password: password});
    fetch("/app/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: userCredsJSON
    })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

    console.log(userCredsJSON);
    

  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">ScoresDesk: Login</h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <form onSubmit={(ev) => this.onFormSubmit(ev)}>
                  <MDBInput label="Username" icon="user" group type="text" 
                    getValue={(value) => this.registerFormData("username", value)} />
                  <MDBInput label="Password" icon="lock" group type="password"
                    getValue={(value) => this.registerFormData("password", value)} />
                  <div className="text-center">
                    <MDBBtn type="submit" color="primary">Submit</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };

}

export default Login;