import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import ContactDetails from "./components/ContactDetail";
import SendEmail from "./components/MailSystem";
import Boxes from "./components/Boxes";
import Learn1 from "./components/Learn1";
import Learn2 from "./components/Learn2";
import Questions from "./components/Question";
import TeamMembers from "./components/TeamMembers";
import Footer from "./components/Footer";

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
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props)=><AddContact {...props}
            addContactHandiler={addContactHandiler}/>}
          />

          <Route path="/contact/:id" component={ContactDetails}></Route>
        </Switch>
        <SendEmail/>
        <Boxes/>
        <Learn1/>
        <Learn2/>
        <Questions/>
        <TeamMembers/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
