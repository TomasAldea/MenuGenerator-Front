import React from "react";
import { getLocalUser } from "../../../context/AuthContext.utils";
import {getUser} from "../../../service/auth.service"
import { useHistory } from "react-router-dom";

export function LoginSuccess() {
  const history = useHistory();
  const [user, setUser] = React.useState("");
  const [userId, setUserId] = React.useState("");

  const getUserInfo = () => {
    setUser(getLocalUser());
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);


  React.useEffect(() => {
    getUser().then((result) => {
      setUserId(result)
    }).catch((err) => {
      console.log(err)
    });
    
  }, []);

  console.log("userId", userId)

  /*
  React.useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [history]);
*/
  return (
    <div className="container">
      <h1>Login success! </h1>
      <h2>hello {user.name}</h2>
    </div>
  );
}
