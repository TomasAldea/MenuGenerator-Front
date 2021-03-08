import React from "react"
import { signup } from "../../service/auth.service"

export function SignupForm({onSubmit}) {
    const inicialState = {
        email: "",
        password: ""
    }

    const [state, setState] = React.useState({email: "", password: ""})

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        await signup(state);
        console.log("state signup", state)
      };

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
          type="text"
          name="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    )

}