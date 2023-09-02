import React, { useEffect, useState } from "react";
import contactsApi from "../api/contactsApi";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";
import { styled } from "styled-components";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import AlertMessage from "../components/AlertMessage";
import ConfirmationForm from "../components/ConfirmationForm";
import Navbar from "../components/Navbar";

const Contacts = () => {
  const location = useLocation();
  const [contactList, setContactList] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const { authToken, user } = location.state;
  const [currentContact, setCurrentContact] = useState();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filter, setFilter] = useState("");
  const [currContact, setCurrContact] = useState();
  const [message, setMessage] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [selectedContact, setSelectedContact] = useState();

  useEffect(() => {
    contactsApi(authToken).then((res) => setContactList(res));
  }, [contactList]);

  useEffect(() => {
    if (filter === "") {
      const sortedList = [...contactList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredContacts(sortedList);
    } else {
      const filteredList = contactList.filter((currElem) =>
        currElem.name.toLowerCase().includes(filter.toLowerCase())
      );
      filteredList.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredContacts(filteredList);
    }
  }, [contactList, filter]);

  const showDetails = (currElem, index) => {
    setCurrContact(index);
    setCurrentContact(currElem);
  };

  const setAlert = (message) => {
    setMessage(message);
  };

  return (
    <Wrapper>
      <div>
        <Navbar user={user} />
      </div>
      <div className="grid-two-column">
        <div>
          <div className="flex-row">
            <input
              type="text"
              className="search-bar"
              onChange={(e) => setFilter(e.target.value)}
            />
            <button className="add-btn" onClick={() => setShowCreateForm(true)}>
              +
            </button>
          </div>
          {filteredContacts.map((currElem, index) => {
            return (
              <div
                className={currContact === index ? "curr-contact" : null}
                onClick={() => showDetails(currElem, index)}
                key={index}
              >
                <Contact
                  contact={currElem}
                  setSelectedContact={setSelectedContact}
                  setConfirmDeletion={setConfirmDeletion}
                  setShowUpdateForm={setShowUpdateForm}
                />
              </div>
            );
          })}
        </div>

        <div className="details-card">
          {currentContact && <ContactDetails contact={currentContact} />}
          {message !== "" ? (
            <AlertMessage message={message} setMessage={setMessage} />
          ) : undefined}
        </div>
      </div>

      <div>
        {showCreateForm && (
          <ContactForm
            token={authToken}
            setShowForm={setShowCreateForm}
            functionality={"Create"}
            contact={{}}
            setAlert={setAlert}
          />
        )}
      </div>
      <div>
        {showUpdateForm && (
          <ContactForm
            token={authToken}
            setShowForm={setShowUpdateForm}
            functionality={"Update"}
            contact={selectedContact}
            setAlert={setAlert}
          />
        )}
        {confirmDeletion && (
          <ConfirmationForm
            setConfirmDeletion={setConfirmDeletion}
            token={authToken}
            contact={selectedContact}
            setMessage={setMessage}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  .search-bar {
    height: 4rem;
    font-size: 2rem;
    border-radius: 1rem;
    padding-left: 5rem;
    width: max;
    margin: 2rem 0;
  }

  .curr-contact {
    transform: scale(1.03);
    box-shadow: 5px 6px 7px -3px rgba(0, 150, 100, 0.8);
  }

  .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
    height: 100vh;
    margin: 2rem 3rem;
  }

  .details-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: start;
    margin-top: 10rem;
    height: 18rem;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .add-btn {
    border-radius: 50%;
    background-color: green;
    font-size: 3rem;
    width: 3rem;
    border: none;
  }
`;
export default Contacts;
