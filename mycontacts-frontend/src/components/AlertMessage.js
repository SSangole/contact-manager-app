import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const AlertMessage = ({ message, setMessage }) => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <Wrapper>{showMessage && <h4>{message}</h4>}</Wrapper>;
};

const Wrapper = styled.section`
  // position: fixed;
  // top: 0;
  // right: 0;
  height: 2rem;
  padding: 1rem 2rem;
  backgroud-color: white;
  box-shadow: -5px -6px 7px -3px rgba(0, 0, 0, 0.35);
  border-bottom: solid 2px green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AlertMessage;
