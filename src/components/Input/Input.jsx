import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";


const Input = ({ name, label, type = "text" }) => {
  
  const [store, dispatch] = useContext(FormContext)
  
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const [inputState, setInputState] = useState('')

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
      setInputState(e.target.value)   

  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    dispatch({ type:'ACTUALIZAR_ENTRENADOR', payload:{ [name] : inputState}})
  };
  

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value= {inputState}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
