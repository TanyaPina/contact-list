import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const CreateContact = ({ onSaveContact, editingContact, onUpdateContact }) => {

    // This is the original State with not initial contact
    const [contact, setContact] = useState(editingContact || {
        firstname: "",
        lastname: "",
        email: "",
        phone:"",
        is_current: false,
        notes:""
    });

    //create functions that handle the event of the user typing into the form
    const handleFirstNameChange = (event) => {
        const firstname = event.target.value;
        setContact((contact) => ({ ...contact, firstname }));
    };

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setContact((contact) => ({ ...contact, lastname }));
    };

    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        setContact((contact) => ({ ...contact, phone }));
    };

    const handleCheckChange = (event) => {
        const is_current = event.target.checked;
        setContact((contact) => ({ ...contact, is_current}));
    };
    
    const handleNotesChange = (event) => {
        const is_current = event.target.value;
        setContact((contact) => ({ ...contact, notes}));
    };

    const clearForm = () => {
        setContact({ 
        firstname: "", 
        lastname: "",  
        email: "",
        phone:"",
        is_current: false,
        notes:""
    })
    }

    //A function to handle the post request
    const postContact = (newContact) => {
        return fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onSaveContact(data);
                clearForm();
            });
    };
    
    return (
        <Form className='form-contacts' onSubmit={handleSubmit}>
    </Form>
);
};


export default CreateContact