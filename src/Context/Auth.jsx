import { createContext, useState } from "react";

export let AuthContext = createContext()


export let AuthProvider = ({ children }) => {
    let storage = JSON.parse(localStorage.getItem('token'))
    let [isAuth, SetisAuth] = useState(false || storage)
    let [isHeader, SetIsHeader] = useState(false)
    let [isApp, SetIsApp] = useState(false)


    return (
        <AuthContext.Provider value={{
            isAuth,
            SetisAuth,
            SetIsHeader,
            isHeader,
            SetIsApp,
            isApp

        }}>
            {children}
        </AuthContext.Provider>
    )

}