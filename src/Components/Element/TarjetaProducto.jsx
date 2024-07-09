import React from "react";

const TarjetaProducto = ({ productos }) => {
  return (
    <div>
      <h3>Componente tarjeta de producto</h3>
      <ul>{productos.map((producto)=>(<li key={producto.id} style={{border:'1px solid black', width: '80px'}}>
            <img src={producto.image_url}style={{width:'60px'}} />
            {producto.name}</li>))}</ul>
    </div>
  );
};

export default TarjetaProducto;
