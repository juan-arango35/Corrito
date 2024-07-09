import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
    const [valorinput, setValorinput] = useState(0);
function menejadorInput(event){
  setValorinput(event.target.value)
}

function incrementar(){
    setValorinput(valorinput+1)
}

function decrementar(){
    setValorinput(valorinput -1 )
}
  return <div>
    <Button onClick={decrementar}>-</Button>
    <Input type="text" 
    value={valorinput}
    onChange={menejadorInput}
   
    />
   
    <Button onClick={incrementar}>+</Button>
  </div>;
};

export default Counter;

const Input=styled.input`
  width: 30px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  margin: 0 10px;
`

const Button=styled.button`
  height: 35px;
  width: 30px;
  margin-bottom: 5px;
`


