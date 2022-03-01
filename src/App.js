// Importaciones de las funciones de react
import React, { useEffect, useState } from "react";
// Importaciones de componentes externos
import { Boton } from "./components/Boton";
// Importación de hojas de estilos
import "./App.css";
// Importación de imagen
// import image from "../../image.jpg";

// * Función que renderiza nuestra app
function App() {
  // * JSX
  // * Javascript en HTML
  // ! Class es una palabra reservada de Javascript
  // ? Hooks son funciones que vienen con React

  // * Use state -> Hook
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  // * UseEffect -> Hook
  useEffect(() => {
    // Ejecuta esto si cambian las variables
    setContador(0);
  }, [nombre]);
  return (
    <div className="App" id="App">
      <div>El valor de mi contador es: {contador}</div>
      <button
      className="boton-accionar"
        onClick={() => {
          // Llamamos al hook y le asignamos otro valor al contador
          setContador(contador + 1);
        }}
      >
        Aumentar contador
      </button>

      <button 
        className="boton-reiniciar"
        onClick={() => {
          setContador(contador == 0);
        }}
       >
         Reiniciar contador
      </button>
      
      
      <button 
        className="boton-accionar"
        onClick={() => {
          setContador(contador - 1);
        }}
       >
         Restar contador
      </button> 

      <input
        value={nombre}
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        placeholder="Ingresa tu nombre"
      />
      <Boton parametro1={"Hola soy el parametro"}/>
      <span>Mi nombre es: {nombre}</span>
    </div>
  );
}

export default App;
