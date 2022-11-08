import React, { createContext } from 'react'
import { getAuth } from 'firebase/auth';
import App from '../App';
const auth = getAuth(App);
const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const singUP = (email, password) => {
        return
    }

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;