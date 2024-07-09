import React from "react";
import Counter from "./Counter";
import styled from "styled-components";

const TarjetaProducto = ({ productos }) => {
  return (
    <Container>
      <h3>Componente tarjeta de producto</h3>
      <UlLista>
        {productos.map((producto) => (
          <Li key={producto.id}>
            <Img src={producto.image_url} />
            <Nombre>{producto.name}</Nombre>
            <Precio>{producto.price}</Precio>
            <Counter />
          </Li>
        ))}
      </UlLista>
    </Container>
  );
};

export default TarjetaProducto;

const Container = styled.div`
  background: gray;
  width: 70%;

`;

const UlLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px 10px;

`;

const Li = styled.li`
  list-style: none;
   background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
  
`;

const Img= styled.img`
  height: 90px;
  margin-top: 20px;
`

const Nombre= styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 0;
`

const Precio=styled.p`
  font-weight: bold;
  color: red;
`