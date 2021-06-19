// Imports
import React, { Component, Fragment } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

// Component
class ContMain extends Component {

  constructor(props) {
    super(props);

    this.state = {data: [], error: null};
  };

  getScores = () => {

    this.setState({data: [], error: null});

    fetch('/api/score')
      .then(response => response.json())
      .then(
        (json) => {
          this.setState({data: json.items});
        },
        (error) => {
          this.setState({error: error.message});
        }
      );
  };

  render() {

    const { data, error } = this.state;

    return (
      <Fragment>

        <div>{error}</div>

        <MDBBtn onClick={() => this.getScores()} color="primary">Get scores</MDBBtn>

        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Score</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.score}</td>
            </tr>
          ))}
          </MDBTableBody>
        </MDBTable>
      </Fragment>
    );
  };

}

export default ContMain;