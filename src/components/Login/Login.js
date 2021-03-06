import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import { useSafeDispatch } from "../../hooks/useSafeDispatch";
import "./login.css"

export function Login() {
  const auth = React.useContext(AuthContext);
  const [state, unsaveSetState] = React.useState({ email: "", password: "" });
  const setState = useSafeDispatch(unsaveSetState);
  const [redirect, unsafeSetRedirect] = React.useState(false);
  const setRedirect = useSafeDispatch(unsafeSetRedirect);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth.handleLogin(state);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/loginsuccess" />;
  }

  return (
    <div className="padding-container">
    <form onSubmit={handleSubmit}>
      <div className="label-text-error animate-flicker"><p>{auth.errorCatch}</p></div>
      <input
        type="text"
        name="email"
        id="email"
        value={state.email}
        placeholder="Write your email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
        required
      />
      <button className="btn btn-success" type="submit">
      Login
      </button>
    </form>
    </div>
  );
}
