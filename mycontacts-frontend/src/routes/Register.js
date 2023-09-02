import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import registerApi from "../api/registerApi";
const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handleInputs = async (e) => {
    e.preventDefault();
    const response = await registerApi(username, email, password);
    console.log(response);
    navigate("/");
  };

  return (
    <Wrapper>
      <form action="" className="form" onSubmit={handleInputs}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <div>Allready have account?</div>
        <NavLink className="login-navlink" to="/">
          Login
        </NavLink>
      </form>
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
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.35);
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
  .login-navlink {
    height: 3rem;
    border-radius: 0.5rem;
    margin: 0.5rem 1rem;
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  button,
  .login-navlink {
    margin-top: 2rem;
    width: 92%;
    background-color: green;
    &:hover {
      background-color: white;
      transition: all 1s linear;
      transform: scale(1.05);
    }
  }

  .login-navlink {
    width: 84%;
    margin-top: 1rem;
    border: solid 1px black;
    text-decoration: none;
    color: black;
  }
`;
export default Register;
