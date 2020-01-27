import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBBadge, MDBBtn, MDBCardTitle, MDBIcon } from 'mdbreact'

const Evento = ({evento}) => {


    let { info } = evento;
    if(info) {
        if(info.length > 150) {
            info = info.substr(0,150)+'...'
        }
    } else {
        info = null;
    }

    return ( 
        <MDBCol md="4" className="py-3">
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src={evento.images[3].url}
          />
          <MDBBtn
            floating="true"
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action
            href={evento.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon icon='chevron-right'/>
          </MDBBtn>
          <MDBCardBody cascade className="card-margin-top">
            <MDBCardTitle className="card-padding-right">{evento.name}</MDBCardTitle>
            <h6>{evento._embedded.venues[0].name}</h6>
            <MDBBadge color="info">{evento._embedded.venues[0].city.name}</MDBBadge>
            <hr/>
            <MDBCardText>
              {info}
            </MDBCardText>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small'>
              <li className='list-inline-item pr-2 white-text'>
                <MDBIcon far icon='calendar-alt' /> {evento.dates.start.localDate}
              </li>
            </ul>
          </div>
        </MDBCard>
      </MDBCol>        
     );
}
 
export default Evento;