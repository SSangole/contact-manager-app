import { styled } from "styled-components";
import { VscTrash, VscEdit } from "react-icons/vsc";

const Contact = ({
  contact,
  setSelectedContact,
  setConfirmDeletion,
  setShowUpdateForm,
}) => {
  return (
    <Wrapper>
      <div>{contact.name}</div>
      <span>
        <button
          onClick={() => {
            setShowUpdateForm(true);
            setSelectedContact(contact);
          }}
        >
          <VscEdit className="edit-icon" />
        </button>
        <button
          onClick={() => {
            setConfirmDeletion(true);
            setSelectedContact(contact);
          }}
        >
          <VscTrash className="delete-icon" />
        </button>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: max%;
  height: 4rem;
  padding-left: 3rem;
  font-size: 2rem;
  margin: 6px 0;
  box-shadow: 5px 6px 7px -3px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  &:hover {
    background-color: beige;
  }

  .edit-icon {
    color: blue;
    font-size: 2rem;
  }

  .delete-icon {
    color: red;
    font-size: 2rem;
  }

  button {
    background: none;
    border-width: 0;
  }
`;

export default Contact;
