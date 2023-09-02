import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Authentication from "../components/Authentication";
import loginApi from "../api/loginApi";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const [isLogging, setIsLogging] = useState(false);
  const handleInputs = async (e) => {
    e.preventDefault();
    setIsLogging(true);
    setToken(await loginApi(email, password));
  };
  console.log(token);
  return (
    <Wrapper>
      <form action="" className="form" onSubmit={handleInputs}>
        <div>Use Email: srud@gmail.com & Password: 012 </div>
        <input
          type="text"
          placeholder="Email id"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div>Don't have account?</div>
        <NavLink className="register-navlink" to="/register">
          Register
        </NavLink>
      </form>
      {isLogging && (
        <Authentication setIsLogging={setIsLogging} token={token} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #e7e7f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    background-color: white;
    box-shadow: 6px 8px 7px -3px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    border-radius: 0.5rem;
    padding: 4rem 1rem;
  }

  input,
  button,
  .register-navlink {
    height: 3rem;
    border-radius: 0.5rem;
    margin: 0.5rem 1rem;
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  button,
  .register-navlink {
    margin-top: 2rem;
    width: 92%;
    background-color: green;
    &:hover {
      background-color: white;
      transition: all 1s linear;
      transform: scale(1.05);
    }
  }

  .register-navlink {
    width: 84%;
    margin-top: 1rem;
    border: solid 1px black;
    text-decoration: none;
    color: black;
  }
`;
export default Login;
