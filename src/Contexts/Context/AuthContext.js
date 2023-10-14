import { createContext, useState } from "react";
import React from 'react'

export let Authcontext= createContext();

export default function AuthcontextProvider({children}) {
    let [logged,setLogged]=useState(localStorage.getItem('token'?true:false))
    return (
        <Authcontext.Provider value={{logged,setLogged}}>
            {children}
        </Authcontext.Provider>
    )
  
}
