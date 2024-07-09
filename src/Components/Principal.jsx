import React, { useEffect, useState } from 'react';
import ListaProductos from './Element/ListaProductos';

const Principal = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    fetch('/src/Components/data/products.json')
    .then((response)=>response.json())
    .then((data)=>setProductos(data))
    }, [])
  return (
    <div>
        <ListaProductos  productos={productos}/>
        
    </div>
  )
}

export default Principal