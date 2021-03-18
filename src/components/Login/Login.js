import React from "react"
import {AuthContext} from "../../context/AuthContext"
import {Redirect} from "react-router-dom"
import {useSafeDispatch} from "../../hooks/useSafeDispatch" 



export function Login() {
  const auth = React.useContext(AuthContext)
  const [state, unsaveSetState] = React.useState({email: "", password: ""})
  const setState = useSafeDispatch(unsaveSetState)
  const [redirect, unsafeSetRedirect] = React.useState(false);
  const setRedirect = useSafeDispatch(unsafeSetRedirect)
  
  const handleChange = (event) => {
      const { name, value } = event.target;
      setState({ ...state, [name]: value });
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      await auth.handleLogin(state) 
      setRedirect(true);
    };
    if (redirect) {

      return <Redirect to="/loginsuccess" />;

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
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    )

}