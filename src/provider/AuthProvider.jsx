import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'tanvir mia',
        email: 'tanvirmia@gmail.com'
    });

    const authData = {
        user,
        setUser,
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;