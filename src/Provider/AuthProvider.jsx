/* eslint-disable react/prop-types */
import { createContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

     const createUser = (email,password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
     }

     const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
     }

     
     const logOut = () => {
        return signOut(auth)
     }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        }
     } , [])
     const authInfo = {
        user,
        createUser,
        logIn,
        logOut
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;