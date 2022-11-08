import React, { createContext, useState } from 'react'
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';



const auth = getAuth(app);
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    // 1. sign up
    const signUp = (email, password) => {
        setLoading(true);
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