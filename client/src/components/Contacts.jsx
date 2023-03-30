import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';

const ListContacts = () => {

    // this is my original state with an array of contacts
    const [contacts, setContacts] = useState([]);
}
    //this is the state needed for the UpdateRequest
    const [editingContact, setEditingSContact] = useState(null)
    
export default ListContacts