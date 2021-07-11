// Imports
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAlert, MDBBtn, MDBCard, MDBCardImage, MDBCardBody, 
  MDBCardTitle, MDBCardText } from 'mdbreact';

// Components
import { CntTitleCmp } from './CntTitleCmp';

// Component
export class CntHomeCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {data: [], error: null};
  };

  componentDidMount() {
    this.props.appCtx.apiSer.get('/api/score')
      .then((result) => {
        if (result.error != null) {
          this.setState({error: result.error});
        } else {
          this.setState({data: result.data});
        }
      });
  };

  render() {

    const { data, error } = this.state;

    return (
      <MDBContainer fluid>

        <MDBRow>
          <MDBCol>
            <CntTitleCmp title="cnt.home.title" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            {error != null
              ? <MDBAlert color="danger" dismiss><strong>{error}</strong></MDBAlert>
              : <div></div>
            }
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {data.map(item => (
          <MDBCol size="3">
            <MDBCard>
              <MDBCardImage className="img-fluid" src={item.imgSrc} />
              <MDBCardBody>
                <MDBCardTitle>{item.score}</MDBCardTitle>
                <MDBCardText>
                  <p>ID: {item.id}</p>
                  <p>Description: {item.desc}</p></MDBCardText>
                <MDBBtn href="#">Action</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          ))}
        </MDBRow>        
        
      </MDBContainer>
    );
  };

}