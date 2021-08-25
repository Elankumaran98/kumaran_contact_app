import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { uuid } from "uuidv4";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandiler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
      <Header />
      <Switch>
      <Route path="/add" component={AddContact}/>
      <Route path="/" exact component={ContactList}/>
      </Switch>
      {/*<AddContact addContactHandiler={addContactHandiler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />*/}
      </Router>
    </div>
  );
}

export default App;
