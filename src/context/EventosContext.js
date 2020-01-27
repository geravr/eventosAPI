import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = 'O-SOPgQZ-vnOr3mEjW1Sz-PHz241okwnwPdElHWI';
    token2 = 'Au3jboGEa82ECZNGKYQX1CGAftMGUeLH'
    ordenar = 'rank'
    
    state = { 
        eventos: [],
        error: false
     }

    obtenerEventos = async (busqueda) => {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${busqueda.nombre}&segmentId=${busqueda.categoria}&countryCode=MX&apikey=${this.token2}`

        //Configuración token header
        // const config = {
        //     headers: {
        //         "Authorization" : "Bearer " + this.token
        //     }
        // }

        try {
            //Consultar la API con url
            const eventos = await axios.get(url);
            this.setState({
                eventos : eventos.data._embedded.events
        });
        this.setState({
            error: false
        })
        } catch (error) {
            console.log(`Hubo un error al realizar la búsqueda: ${error}`)
            this.setState({
                error: true
            })
        }
        
    }

    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos : this.state.eventos,
                    obtenerEventos : this.obtenerEventos,
                    error: this.state.error
                }}
                >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;