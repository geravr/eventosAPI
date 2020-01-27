import React, { Component } from 'react';
import { EventosConsumer } from '../context/EventosContext';

import { MDBRow, MDBInput, MDBCol, MDBBtn, MDBBadge, MDBIcon  } from 'mdbreact'

class Formulario extends Component {
    state = { 
        nombre : '',
        categoria : ''
     }

     //Si el usuario agrega un evento o categoría

     obtenerDatosEvento = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    render() { 
        return ( 
            <EventosConsumer>
                {/*Acceder al Value*/}
                {(value) => {
                    return(

                <form
                        onSubmit={e => {
                            e.preventDefault();

                            value.obtenerEventos(this.state)
                        }}
                >
                    <fieldset className="">
                        <legend className="text-center py-4">
                            Busca tu evento por nombre o categoría
                        </legend>
                    </fieldset>
                    {value.error ? <MDBBadge color="danger" className="error"><MDBIcon icon="exclamation-circle" /> Sin resultados, intenta buscar algo diferente</MDBBadge> : null}
                    <MDBRow>
                        <MDBCol lg="6">
                        <MDBInput 
                            className=""
                            name="nombre"
                            type="text"
                            label="Nombre de evento"
                            icon="calendar-alt"
                            onChange={this.obtenerDatosEvento}
                            />
                        </MDBCol>
                        <MDBCol lg="6">
                            <select className="browser-default custom-select mt-4"
                            name="categoria"
                            onChange={this.obtenerDatosEvento}
                            defaultValue=""
                            >
                                <option value="" disabled>Selecciona categoría</option>
                                <option value="">Todas</option>
                                <option value="KZFzniwnSyZfZ7v7nE">Deportes</option>
                                <option value="KZFzniwnSyZfZ7v7nJ">Música</option>
                                <option value="KZFzniwnSyZfZ7v7na">Arte y Teatro</option>
                                <option value="KZFzniwnSyZfZ7v7n1">Diversos</option>
                            </select>
                            </MDBCol>
                            <MDBCol>
                        <MDBBtn type="submit" size="lg" className="btn-block">Buscar eventos</MDBBtn>
                        </MDBCol>
                        </MDBRow>
                </form>

                )
            }}
            </EventosConsumer>
         );
    }
}
 
export default Formulario;