import React,{useState} from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contacts,setContacts]=useState(
    []
  );
  const addContactHandiler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact]);
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandiler={addContactHandiler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
