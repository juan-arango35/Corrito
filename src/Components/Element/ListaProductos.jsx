import React from 'react'
import TarjetaProducto from './TarjetaProducto'

const ListaProductos = ({productos}) => {
  return (
    <div>
        <h1>Lista de productos</h1>
        <hr />
        <TarjetaProducto productos={productos}/>
    </div>
  )
}

export default ListaProductos