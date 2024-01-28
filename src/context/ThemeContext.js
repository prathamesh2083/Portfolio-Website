import React from "react";

import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext("");


export default function ThemeContextProvider({children}){

     const [theme,setTheme]=useState("light");
     function changeTheme(thm){
        setTheme(thm);
     }
     const state={
        theme,setTheme,changeTheme
     };
     return( <ThemeContext.Provider value={state}> {children}</ThemeContext.Provider>)
}

