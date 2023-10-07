import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [currUser,setCurrUser]=useState(JSON.parse(localStorage.getItem('user')) || false)
    const login = () =>{
        setCurrUser({id:1,name:"Nazat Mustag",pic:"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"})
    }
    useEffect(()=>{ 
       localStorage.setItem("user",JSON.stringify(currUser))
    },[currUser])
    return (
        <AuthContext.Provider value={{currUser,login}}>
            {children}
        </AuthContext.Provider>
    )
} 