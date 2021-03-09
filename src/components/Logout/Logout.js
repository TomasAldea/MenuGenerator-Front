import React from "react";
import { AuthContext } from "../../context/AuthContext";

export function Logout() {

  const authLogout = React.useContext(AuthContext);


  return (
    <button onClick={authLogout.handleLogout}>
      Logout
    </button>
  );
}
