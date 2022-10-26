import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthPorvider = createContext()
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider()
    const GoogleProvider = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser === null || currentuser.emailVerified) {
                SetUser(currentuser)
            }
            setLoading(false)
        })
        return () => {
            unSubcribe();
        }
    }, [])
    const authInfo = {
        user,
        emailVerification,
        updateUserProfile,
        logOut,
        GoogleProvider,
        createUser,
        logInuser,
        loading}
    return (
        <AuthPorvider.Provider value={authInfo}>
            {children}
        </AuthPorvider.Provider>
    );
};

export default AuthContext;