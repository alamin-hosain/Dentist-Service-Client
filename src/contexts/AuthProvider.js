import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';



const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // 3 Sing Out
    const logOUt = () => {
        setLoading(true);
        return signOut(auth);
    }

    //4 Google Sign in
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // 5 GitHub Sign In
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // 6 Sign In
    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = { user, signUp, loading, setLoading, updateUser, logOUt, signInWithGoogle, signInWithGithub, handleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;