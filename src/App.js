import React from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const contacts=[
    {
      id:'1',
      "name":"Elankumaran",
      "email":"siva98kumarane@gmail.com"
    },
    {
      id:'2',
      "name":"Kumaran",
      "email":"siva98kumarane@gmail.com"
    },
  ];
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
