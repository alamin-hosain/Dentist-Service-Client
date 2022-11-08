import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';



const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])



    // 1. sign up
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // 2 Update User Name
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // 3 Sing Out
    const logOUt = () => {
        return signOut(auth);
    }



    const authInfo = { user, signUp, loading, setLoading, updateUser, logOUt }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;