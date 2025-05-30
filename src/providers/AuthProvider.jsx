

//import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
//import auth from "../firebase/firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword,
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
//import axios from "axios";

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) ;
    const googleProvider = new GoogleAuthProvider();
    //const githubProvider = new GithubAuthProvider();
    

    //register
     const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //login with email and password
     const signInUser =(email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     //login with google
     const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //login with github
    // const signInWithGithub =() => {
    //     setLoading(true)
    //     return signInWithPopup(auth, githubProvider)
    // }
    //logout
    const logout =() => {
        setLoading(true)
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         const userEmail = currentUser?.email || user?.email;
    //         const loggedUser = {email:userEmail}
    //         setUser(currentUser);
    //         setLoading(false)
    //         console.log('observing current user inside useEffect of authprovider ', currentUser);
    //          //if user exists then issue a token
    //          if(currentUser){
                
    //             axios.post('https://online-marketplaces-server.vercel.app/jwt', loggedUser, 
    //             {withCredentials:true})
    //             .then(res => {
    //              console.log('token response',res.data);
    //             })
    //          } 
    //          else{
    //              axios.post('https://online-marketplaces-server.vercel.app/logout', loggedUser,{withCredentials:true}
    //              )
    //              .then(res => {
    //                  console.log(res.data);
    //              })
    //          }
    //     })
    //     return () =>{
    //         unSubscribe()
    //     }
    //  },[])
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo ={user, loading,createUser,signInUser,signInWithGoogle, logout}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
            
        </div>
    );
};
AuthProvider.propTypes = {
children:PropTypes.node}
export default AuthProvider;
// const AuthProvider = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default AuthProvider;
