import React from "react";
import styled from "styled-components";

const ListaPrecio = () => {
  return (
    <Container>
      <h1>Lista precio</h1>
      <div>
        <p>Producto</p>
        <p>precio</p>
        <p>cantidad</p>
        <p>total</p>
        <button>Agregar Al carrito</button>
      </div>
    </Container>
  );
};

export default ListaPrecio;

const Container = styled.div`
  background: skyblue;
  width: 30%;
`;
