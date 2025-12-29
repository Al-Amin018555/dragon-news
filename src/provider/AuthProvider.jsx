import { useEffect, useState } from "react";
import app from "../components/firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    console.log(user);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscirbe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscirbe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading,
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;