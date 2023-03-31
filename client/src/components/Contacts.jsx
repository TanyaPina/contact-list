import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';

const ListContacts = () => {

    // this is my original state with an array of contacts
    const [contacts, setContacts] = useState([]);
}
    //this is the state needed for the UpdateRequest
    const [editingContact, setEditingSContact] = useState(null)

    const loadContacts = () => {
        // A function to fetch the list of contacts that will be load anytime that list changes
        fetch("http://localhost:8080/api/contacts")
            .then((response) => response.json())
            .then((contacts) => {
                setContacts(contacts);
            });
    }

    useEffect(() => {
        loadContacts();
    }, [contacts]);

    const onSaveContact = (newContact) => {
        //console.log(newStudent, "From the parent - List of Students");
        setContacts((contacts) => [...contacts, newContacts]);
    }
    
export default ListContacts