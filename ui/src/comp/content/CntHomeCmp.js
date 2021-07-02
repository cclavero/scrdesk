// Imports
import React, { Component, Fragment } from 'react';
import { MDBAlert, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

import { APIService } from '../../service/api';

// Component
export class CntHomeCmp extends Component {

  constructor(props) {
    super(props);

    this.apiSer = new APIService();

    this.state = {data: [], error: null};
  };

  render() {

    const { data, error } = this.state;

    return (
      <Fragment>

        <h2>Home</h2>

        {error != null
          ? <MDBAlert color="danger" dismiss><strong>{error}</strong></MDBAlert>
          : <div></div>
        }

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

        <div>
          Lorem fistrum quietooor qué dise usteer diodenoo la caidita diodenoo torpedo a gramenawer pecador. 
          Tiene musho peligro amatomaa llevame al sircoo no te digo trigo por no llamarte Rodrigor. Benemeritaar condemor apetecan pupita. 
          A wan a gramenawer se calle ustée fistro te voy a borrar el cerito condemor tiene musho peligro apetecan. 
          Está la cosa muy malar qué dise usteer tiene musho peligro de la pradera no puedor amatomaa se calle ustée de la pradera ese 
          que llega la caidita. Ese que llega sexuarl sexuarl se calle ustée está la cosa muy malar. Papaar papaar fistro va usté muy 
          cargadoo ahorarr ese que llega a wan de la pradera quietooor de la pradera. Te va a hasé pupitaa caballo blanco caballo negroorl 
          me cago en tus muelas hasta luego Lucas. Pecador al ataquerl quietooor la caidita mamaar ahorarr.
        </div>

        <p></p>

        <div>
          Está la cosa muy malar ese hombree te va a hasé pupitaa está la cosa muy malar ese hombree mamaar ese hombree diodenoo qué dise 
          usteer te voy a borrar el cerito. Fistro qué dise usteer llevame al sircoo a wan por la gloria de mi madre me cago en tus muelas 
          qué dise usteer benemeritaar por la gloria de mi madre hasta luego Lucas. No puedor de la pradera jarl jarl. Me cago en tus muelas 
          por la gloria de mi madre está la cosa muy malar ese hombree caballo blanco caballo negroorl por la gloria de mi madre tiene musho 
          peligro al ataquerl. A peich llevame al sircoo sexuarl se calle ustée quietooor no puedor ese hombree se calle ustée fistro 
          quietooor. Qué dise usteer ese hombree a gramenawer diodeno se calle ustée pupita benemeritaar papaar papaar diodenoo. 
          Papaar papaar caballo blanco caballo negroorl sexuarl mamaar amatomaa diodeno ese que llega la caidita hasta luego Lucas.
        </div>

        <p></p>

        <div>
          Caballo blanco caballo negroorl hasta luego Lucas ese hombree a wan quietooor qué dise usteer ese hombree mamaar hasta luego 
          Lucas hasta luego Lucas caballo blanco caballo negroorl. No puedor torpedo quietooor mamaar apetecan hasta luego Lucas torpedo 
          me cago en tus muelas. Apetecan a peich diodeno al ataquerl pupita te va a hasé pupitaa sexuarl. Apetecan papaar papaar te voy 
          a borrar el cerito ese hombree torpedo quietooor no te digo trigo por no llamarte Rodrigor ahorarr. Pecador no puedor pupita te 
          voy a borrar el cerito ese hombree hasta luego Lucas la caidita diodenoo no puedor. No puedor pupita fistro llevame al sircoo 
          ese pedazo de a peich tiene musho peligro papaar papaar diodenoo pecador se calle ustée. Ese que llega llevame al sircoo diodenoo 
          qué dise usteer qué dise usteer te va a hasé pupitaa ese que llega. No te digo trigo por no llamarte Rodrigor hasta luego Lucas 
          se calle ustée mamaar llevame al sircoo qué dise usteer ese pedazo de quietooor.
        </div>
        
      </Fragment>
    );
  };

  // Internal methods ----------------------------------------------------------------

  getScores = () => {

    this.setState({data: [], error: null});

    this.apiSer.get('/api/score')
      .then((result) => {
        if (result.error != null) {
          this.setState({error: result.error});
        } else {
          this.setState({data: result.data});
        }
      });

  };

}
