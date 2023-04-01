const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create the get request for contacts in the endpoint '/api/contacts'
app.get('/api/contacts', async (req, res) => {
    try {
        const { rows: contacts } = await db.query('SELECT * FROM contacts');
        res.send(contacts);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/contacts', async (req, res) => {
    try {
        const newContact = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            is_current: req.body.is_current,
            notes: req.body.notes
        };

        const result = await db.query(
            'INSERT INTO contacts(firstname, lastname, email, phone, is_current, notes) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [newContact.firstname, newContact.lastname, newContact.email, newContact.phone, newContact.is_current, newContact.notes],
        );
        res.json(result.rows[0]);

    } catch (e) {
        return res.status(400).json({ e });
    }

});

// delete request for students
app.delete('/api/contacts/:contactId', async (req, res) => {
    try {
        const contactId = req.params.contactId;
        await db.query('DELETE FROM contacts WHERE id=$1', [contactId]);
        res.status(200).end();
    } catch (e) {
        return res.status(400).json({ e });

    }
});

//A put request - Update a contact
app.put('/api/contacts/:contactId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const contactId = req.params.contactId
    const updatedContact = { 
        id: req.body.id, 
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        is_current: req.body.is_current,
        notes: req.body.notes
    }

    // UPDATE contacts SET lastname = "something" WHERE id="16";
    const query = `UPDATE contacts SET firstname=$1, lastname=$2, email=$3, phone=$4, is_current=$5, notes=$6 WHERE id=${contactId} RETURNING *`;
    const values = [updatedContact.firstname, updatedContact.lastname, updatedContact.email, updatedContact.phone, updatedContact.is_current, updatedContact.notes];
    try {
      const updated = await db.query(query, values);
      res.send(updated.rows[0]);
  
    }catch(e){
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});