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
// nuevo estado para capturar errores
  const handleLogin = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await login(user);
      saveUser(loggedUser);
      setState({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error("error data",e.response.data);
      console.error("error",e.response.error);
      console.error("error message",e.response.message);
    }
  }, []);

  const handleSignup = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await signup(user);
      saveUser(loggedUser);
      setState({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error(e);
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
    <AuthContext.Provider // añadir error state para poder consumir
      value={{ user: state.user, handleLogin, handleLogout, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
