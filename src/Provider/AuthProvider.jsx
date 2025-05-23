import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // logIn user by the login page
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // create user by the registation page

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authData = {
        user,
        signIn,
        createUser,
        setUser,
        updateUser,
        loginWithGoogle,
        logOut
    }

    return <AuthContext value={authData}>{children}</AuthContext>
}
