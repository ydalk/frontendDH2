import { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = () => {

  const {dataForm, setDataForm} = useContext(FormContext)

  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  const sendData = ()=>{
    alert("Solicitud enviada :)")
    setDataForm('')
  }

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {dataForm.nombre}</p>
          <p>Apellido: {dataForm.apellido}</p>
          <p>Email: {dataForm.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {dataForm.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={sendData}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
