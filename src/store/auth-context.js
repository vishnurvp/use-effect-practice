import React from "react";
// create context
const AuthContext = React.createContext({
    // set object to hold state variables
    isLoggedIn: false
});

export default AuthContext;

// wrap the components which need these states with this 