// Aqui debemos crear nuestro contexto y nuestro provider.
import { useState, createContext } from "react";

export const FormContext = createContext();

export const FormularioProvider = ({children}) => {

  const [dataForm, setDataForm] = useState({})

  return (
    <FormContext.Provider value={{dataForm, setDataForm}}>
        {children}
    </FormContext.Provider>
  )
}


