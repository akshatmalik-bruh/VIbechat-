import { useContext , createContext  } from "react";

const authContext = createContext();

export const AuthProvider = ({children}) => {
    
    const login = (token) =>{
      
        localStorage.setItem('token',token);
    }
    return  (
    <authContext.Provider value = {{token,login}}>

        {children}
    </authContext.Provider>
    )
}



export const useAuth = () => {
    return useContext(authContext);
}