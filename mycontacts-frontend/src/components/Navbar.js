import React from "react";
import { styled } from "styled-components";

const Navbar = ({ user }) => {
  return (
    <Wrapper>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgu3kS7c45Z5RjdwNdJcTQRF3fUgXElehcaKzn63OMdH4M7CcO_fIigEDJ_k1b6vqM-Y&usqp=CAU"
        alt="contact-img"
      />
      <div>{user.username}</div>
      <div>{user.email}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 3rem;
  background-color: rgb(36, 177, 228);
  box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.38);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Navbar;
