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

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setContact((contact) => ({ ...contact, email }));
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

    //A function to handle the put request
    const putContact = (toEditContact) => {
        return fetch(`http://localhost:8080/api/contacts/${toEditContact.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditContact),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateContact(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.id) {
            putContact(contact);
        } else {
            postContact(contact);
        }
    };

    return (
        <Form className='form-contacts' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="First Name"
                    required
                    value={contact.firstname}
                    onChange={handleFirstNameChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={contact.lastname}
                    onChange={handleLastnameChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <input
                    type="text"
                    id="add-user-email"
                    placeholder="Email"
                    required
                    value={contact.email}
                    onChange={handleEmailChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <input
                    type="text"
                    id="add-user-phone"
                    placeholder="Phone"
                    required
                    value={contact.phone}
                    onChange={handlePhoneChange}
                />
            </Form.Group>
    </Form>
);
};


export default CreateContact