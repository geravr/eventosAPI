import React from 'react';
import Evento from './Evento'
import { EventosConsumer } from '../context/EventosContext';
import { MDBRow } from 'mdbreact'

const ListaEventos = () => {
    return ( 
        
            <MDBRow className="p-5">
                <EventosConsumer>
                    {(value) => {
                        return value.eventos.map(evento => (
                            <Evento 
                                key={evento.id}
                                evento={evento}
                            />
                        ))
                    }}
                </EventosConsumer>
            </MDBRow>

     );
}
 
export default ListaEventos;