import React from "react";
import { AuthContext } from "../../context/AuthContext";

export function Logout() {

  const authLogout = React.useContext(AuthContext);


  return (
    <button className="my-button" onClick={authLogout.handleLogout}>
      <img src="/img/logout.png"></img>
    </button>
  );
}
