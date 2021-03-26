import React from "react";
import { login, logout, signup } from "../service/auth.service";
import {
  getLocalUser,
  saveUser,
  removeUser,
  defaultUser,
} from "./AuthContext.utils";

export const AuthContext = React.createContext({});

const initialState = {
  user: getLocalUser(),
};

function AuthProvider({ children }) {
  const [state, setState] = React.useState(initialState);
  const [errorMessage, setErrorMessage] = React.useState();
  const [redirect, setRedirect] = React.useState(false);
  const [errorMessageSignup, setErrorMessageSignup] = React.useState();

  const handleLogin = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await login(user);
      saveUser(loggedUser);
      setState({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  }, []);

  const handleSignup = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await signup(user);
      saveUser(loggedUser);
      setState({ user: { ...loggedUser, isLogged: true } });
      setRedirect(true);
    } catch (e) {
      setErrorMessageSignup(e.response.data.message);
    }
  }, []);

  const handleLogout = React.useCallback(async () => {
    try {
      await logout();
      removeUser();
      setState({ user: defaultUser() });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        handleLogin,
        handleLogout,
        handleSignup,
        errorCatch: errorMessage,
        errorCatchSignup: errorMessageSignup,
        redirectToHome: redirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
