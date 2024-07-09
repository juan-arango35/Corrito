import React from 'react'
import TarjetaProducto from './TarjetaProducto';
import styled from 'styled-components';


const TarjetaProducto = ({ productos }) => {
  return (
    <div>
      <h3>Componente tarjeta de producto</h3>
      <ul>{productos.map((producto)=>(<li key={producto.id} style={{border:'1px solid black', width: '90px', height:'100px'}}>
            <img src={producto.image_url}style={{width:'60px'}} />
            {producto.name}</li>))}</ul>
          
    </div>
  );
};

export default ListaProductos

const Container=styled.div`
background: gray;
width: 70%;
`
