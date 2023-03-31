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

    //A function to add new contacts
    const onSaveContact = (newContact) => {
        //console.log(newStudent, "From the parent - List of Students");
        setContacts((contacts) => [...contacts, newContacts]);
    }

    //A function to control the update in the parent (contact component)
    const updateContact = (savedContact) => {
        // This function should update the whole list of contacts  
        loadContacts();
    }

    //A function to handle the deletes
    const onDelete = (contact) => {
        return fetch(`http://localhost:8080/api/contacts/${contact.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadContacts();
            }
        })
    }

export default ListContacts