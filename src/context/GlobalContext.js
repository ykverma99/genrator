import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children})=>{
    const [theme, settheme] = useState(false) 
    return (
        <Context.Provider value={{theme,settheme}}>{children}</Context.Provider>
    )
}