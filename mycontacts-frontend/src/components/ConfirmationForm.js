import styled from "styled-components";
import deleteContactApi from "../api/deleteContactApi";

const ConfirmationForm = ({
  setConfirmDeletion,
  contact,
  token,
  setMessage,
}) => {
  const deleteContact = async (e) => {
    e.preventDefault();
    const response = await deleteContactApi(contact._id, token);
    if (response) {
      setMessage("Contact deleted successfully");
      setConfirmDeletion(false);
    }
  };

  return (
    <Wrapper>
      <form className="form">
        <div>Contact {contact.name} will be deleted. Are you sure?</div>
        <button className="delete-button" onClick={deleteContact}>
          Delete
        </button>
        <button type="button" onClick={() => setConfirmDeletion(false)}>
          Cancel
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

  button {
    display: inline-block;
    height: 3rem;
    border-radius: 0.5rem;
    margin: 0.5rem 1rem;
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  button {
    margin-top: 2rem;
    width: 92%;
    background-color: green;
    &:hover {
      transition: all 0.1s linear;
      transform: scale(1.05);
    }
  }

  .delete-button:hover {
    background-color: red;
  }
`;
export default ConfirmationForm;
