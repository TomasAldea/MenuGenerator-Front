import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";

export function Signup() {
  const auth = React.useContext(AuthContext);

  const [state, setState] = React.useState({ email: "", password: "" });
  const [redirect, setRedirect] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   await auth.handleSignup(state);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "10px auto",
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={state.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}
