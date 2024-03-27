import React, { useState } from "react";

const frutas = () => {
    console.log("Hello!")
    const [frutas, setFrutas] = useState(["Manzana", "Pera", "Banana", "Naranja"]);
    function agregar(){ 
        console.log("Agregando fruta")
        let elementos = [1,2,3]
        console.log(elementos)
        elementos.push(5)
        console.log(elementos)
        console.log(frutas)
        frutas.push('piña')
        console.log(frutas)
        setFrutas(['piña'])
    }

	return (
        <div>
            <h1>Frutas sin ciclo</h1>
            {frutas}
            <h1>Frutas con ciclo MAP</h1>
            {frutas.map((element, index)=> <p key={index}>{element} {index}</p>)}
            <button onClick={agregar}> agregar </button>

        </div>
	);
};

export default frutas;