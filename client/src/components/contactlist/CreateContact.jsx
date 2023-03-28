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

    return (
        <Form className='form-contacts' onSubmit={handleSubmit}>
    </Form>
);
};


export default CreateContact