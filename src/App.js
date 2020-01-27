import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaEventos from './components/ListaEventos';
import { MDBContainer } from 'mdbreact'

import CategoriasProvider from './context/CategoriasContext'
import EventosProvider from './context/EventosContext'

function App() {
  return (
    <EventosProvider>
    <CategoriasProvider>
      <Header />

      <MDBContainer>
          <Formulario />
          <ListaEventos />
      </MDBContainer>
      
    </CategoriasProvider>
    </EventosProvider>
  )
}

export default App;
