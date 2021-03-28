import React from "react";
import { AuthContext } from "../../context/AuthContext";

export function Logout() {
  const authLogout = React.useContext(AuthContext);

  return (
    <button className="text my-button" onClick={authLogout.handleLogout}>
      <img src="/img/logout.png" alt="logoutIcon"></img>
    </button>
  );
}
