// import React, { useContext, useEffect, useState } from "react";
// import  {auth} from "../firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";


// const AuthContext = React.createContext();

// export function useAuth() {
//     return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true);

//     // function signup(email, password) {
//     //     return auth.createUserWithEmailAndPassword(email, password);
//     // }

//     // function login(email, password) {
//     //     return auth.signInWithEmailAndPassword(email, password);
//     // }

//     // function logout() {
//     //     return auth.signOut();
//     // }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, intializeUser);
//         return unsubscribe;
//     }, [])

//     async function intializeUser(user) {
//         if (user) {
//             setCurrentUser(user);
//             setUserLoggedIn(true);
//         } else {
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     const value = {
//         currentUser,
//         userLoggedIn,
//         loading
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }