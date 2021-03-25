import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";

export function Signup() {
  const auth = React.useContext(AuthContext);

  const [state, setState] = React.useState({
    email: "",
    password: "",
    name: "",
  });
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
    return <Redirect to="/signupsuccess" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        value={state.email}
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
      <button className="my-button" type="submit">
        <img src="/img/checked.png " width="40" height="40"></img>
      </button>
    </form>
  );
}
