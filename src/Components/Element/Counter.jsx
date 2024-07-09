import React from "react";
import { useState } from "react";

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
    <button onClick={incrementar}>+</button>
    <input type="text" 
    value={valorinput}
    onChange={menejadorInput}
    style={{width:'30px'}}
    />
    <button onClick={decrementar}>-</button>
  </div>;
};

export default Counter;
