import React from "react";
import { getLocalUser } from "../../../context/AuthContext.utils";
import "./LoginSuccess.css"

import { useHistory } from "react-router-dom";

export function LoginSuccess() {
  const history = useHistory();
  const [user, setUser] = React.useState("");

  const getUserInfo = () => {
    setUser(getLocalUser());
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);

  
  React.useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }, [history]);


  return (
    <div className="my-cont container">
      <h2 className="welcome-message">Welcome {user.name}</h2>
      <img src="/img/week-menu.gif"  alt="Italian Trulli"></img>
    </div>
  );
}
