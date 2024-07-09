import React from 'react'
import TarjetaProducto from './TarjetaProducto';
import styled from 'styled-components';

const ListaProductos = ({productos}) => {
  return (
    <Container>
        <h1>Lista de productos</h1>
        <TarjetaProducto productos={productos}/>
    </Container>
  )
}

export default ListaProductos

const Container=styled.div`
background: gray;
width: 70%;
`
