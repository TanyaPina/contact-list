import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Contact = ({contact, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateContact) => {
        toUpdate(toUpdateContact)
    }

    const onDelete = (toDeleteContact) => {
        toDelete(toDeleteContact)
    }

    return (
        <Card>
            
        </Card>

    )
}

export default Contact;