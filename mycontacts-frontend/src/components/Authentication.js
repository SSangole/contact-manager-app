import React, { useState } from "react";
import styled from "styled-components";
import authenticationApi from "../api/authenticationApi";
import { useNavigate } from "react-router-dom";

const Authentication = ({ setIsLogging, token }) => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState();
  const authenticateToken = async (e) => {
    e.preventDefault();
    const loggedUser = await authenticationApi(authToken);
    if (loggedUser) {
      navigate("/contacts", {
        state: { authToken: authToken, user: loggedUser },
      });
    }
  };

  return (
    <Wrapper>
      <form action="" className="form" onSubmit={authenticateToken}>
        <div>For simpicity Token is placed in console, paste it here!</div>
        <input
          type="text"
          onChange={(e) => setAuthToken(e.target.value)}
          required
        />
        <div className="grid-two">
          <button type="submit">Authenticate</button>
          <button onClick={() => setIsLogging(false)}>Cancel</button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .form {
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    border-radius: 0.5rem;
    padding: 4rem 1.5rem;
  }

  input,
  button {
    height: 3rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  button {
    margin-top: 2rem;
    width: 100%;
    background-color: green;
    &:hover {
      background-color: white;
      transition: all 1s linear;
      transform: scale(1.05);
    }
  }

  .grid-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;
export default Authentication;
