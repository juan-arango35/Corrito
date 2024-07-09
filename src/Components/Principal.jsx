import React, { useEffect, useState } from "react";
import ListaProductos from "./Element/ListaProductos";
import ListaPrecio from "./Element/ListaPrecio";
import styled from "styled-components";

const Principal = () => {
  const [productos, setProductos] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("/src/Components/data/products.json")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);
  return (
    <ContainerPrincipal>
      <ListaProductos productos={productos} price={price} setPrice={setPrice} />
      <ListaPrecio />
    </ContainerPrincipal>
  );
};

const ContainerPrincipal = styled.div`
  display: flex;
`;

export default Principal;
