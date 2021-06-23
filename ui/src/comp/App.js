// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Components
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import ContMain from './cont/Main';
import Footer from './footer/Footer';

// Resources
import './App.css';

// Component
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {config: {}, error: null};
  };

  componentDidMount() {
    fetch("/app/config")
      .then(response => response.json())
      .then(
        (json) => {
          this.setState({config: json.config});
        },
        (error) => {
          this.setState({error: error.message});
        }
      )
  };

  render() {

    const { config, error } = this.state;

    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12">
            <Header appConfig={config} />
          </MDBCol>  
        </MDBRow>
        <MDBRow>
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