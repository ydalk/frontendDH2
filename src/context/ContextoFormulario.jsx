// Aqui debemos crear nuestro contexto y nuestro provider.
import { useState, createContext, useReducer } from "react";

export const FormContext = createContext();

const initialState = {
  nombre:'',
  apellido:'',
  email:'',
  nombrePokemon:'',
}

const inputReducer = (state, action) => {

  switch (action.type) {
      case 'ACTUALIZAR_ENTRENADOR':
          return state = action.payload
          break;
      case 'ACTUALIZAR_POKEMON':
          return ''
          break;
      
  }
}



export const FormularioProvider = ({children}) => {

  const [store, dispatch] = useReducer(inputReducer, initialState)

  //const [dataForm, setDataForm] = useState({})

  return (
    <FormContext.Provider value={{store, dispatch}}>
        {children}
    </FormContext.Provider>
  )
}


