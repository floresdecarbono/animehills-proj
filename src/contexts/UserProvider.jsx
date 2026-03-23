import { useState } from "react";
import { api } from "../config/api/api";
import { UserContext } from "./UserContext";

export function UserProvider({children}) {
    
    const [ user, setUser ] = useState(null)

    async function login(email, senha) {
        try {
            const response = await api.get(`/usuarios?email=${email}`)
            const user = response.data[0]
            if (user.senha === senha) {
                setUser(user)
            } else {
                console.log("Senha incorreta")
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
    
    function logout() {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}