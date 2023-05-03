/* eslint-disable react/prop-types */
import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)

     const createUser = (email,password) =>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
     }

     const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     
     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }


     const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
     }
     const logInWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider)
     }
     useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        }
     } , [])
     const authInfo = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        loading,
        logInWithGoogle,
        logInWithGitHub
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;