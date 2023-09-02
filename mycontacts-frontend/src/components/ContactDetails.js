import { styled } from "styled-components";

const ContactDetails = ({ contact }) => {
  return (
    <Wrapper>
      <div>Name: {contact.name}</div>
      <div>Email: {contact.email}</div>
      <div>Contact: {contact.phone}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: max;
  padding: 4rem 4rem;
  background-color: white;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  font-size: 1.5rem;

  div {
    margin: 1rem 0;
  }
`;
export default ContactDetails;
