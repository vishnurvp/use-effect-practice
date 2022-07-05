import React, {useState, useEffect} from "react";
// create context
const AuthContext = React.createContext({
  // set object to hold state variables
  isLoggedIn: false,
  onLogout: ()=>{},
  onLogin: (email, password)=>{}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInOrNot = localStorage.getItem("isLoggedIn");
    if (loggedInOrNot === "1") setIsLoggedIn(true);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// wrap the components which need these states with this
