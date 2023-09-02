import React, { useState } from "react";
import styled from "styled-components";
import createContactApi from "../api/createContactApi";
import updateContactApi from "../api/updateContactApi";

const ContactForm = ({
  token,
  setShowForm,
  functionality,
  contact,
  setAlert,
}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const processContact = async (e) => {
    e.preventDefault();
    let res, msg;
    if (functionality === "Create") {
      res = await createContactApi(name, email, phone, token);
      msg = "Contact Created Successfully";
    }
    if (functionality === "Update") {
      res = await updateContactApi(contact._id, name, email, phone, token);
      msg = "Contact Updated Successfully";
    }
    setAlert(msg);
    if (res) {
      setShowForm(false);
    }
  };

  return (
    <Wrapper>
      <form action="" className="form" onSubmit={processContact}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          defaultValue={contact ? contact.name : null}
          required
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={contact ? contact.email : null}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          defaultValue={contact ? contact.phone : null}
          required
        />
        <div>
          <button type="submit">{functionality}</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
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
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    border-radius: 0.5rem;
    padding: 4rem 1rem;
  }

  input,
  button {
    height: 3rem;
    border-radius: 0.5rem;
    margin: 0.5rem 1rem;
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  button {
    margin-top: 2rem;
    width: max-content;
    background-color: green;
    &:hover {
      background-color: white;
      transition: all 1s linear;
      transform: scale(1.05);
    }
  }

  div {
    display: inline-block;
  }
`;
export default ContactForm;
