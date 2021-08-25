import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });
  return <div className="ui phone list">
    <h2>Contact List
      <Link to="/add">
      <Button className="ui button blue right">Add Contact</Button>
      </Link>      
    </h2>
    {renderContactList}</div>;
};
export default ContactList;
