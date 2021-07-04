// Imports
import React, { Component, Fragment } from 'react';
import { MDBAlert, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { FormattedMessage } from 'react-intl';

// Component
export class CntHomeCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {data: [], error: null};
  };

  render() {

    const { data, error } = this.state;

    return (
      <Fragment>

        <h2><FormattedMessage id="cnt.home.title" /></h2>

        {error != null
          ? <MDBAlert color="danger" dismiss><strong>{error}</strong></MDBAlert>
          : <div></div>
        }

        <MDBBtn onClick={() => this.getScores()} color="primary">
          <FormattedMessage id="btn.getScores" />
        </MDBBtn>

        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th><FormattedMessage id="tbl.score.title" /></th>
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

        {/* TEMPORAL */}
        <FormattedMessage id="dummy.lorem" values={{
          p: chunks => <p>{chunks}</p>
        }} />
        
      </Fragment>
    );
  };

  // Internal methods ----------------------------------------------------------------

  getScores = () => {

    this.setState({data: [], error: null});

    this.props.appCtx.apiSer.get('/api/score')
      .then((result) => {
        if (result.error != null) {
          this.setState({error: result.error});
        } else {
          this.setState({data: result.data});
        }
      });

  };

}
