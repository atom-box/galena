/* A router with two routes.    */
/* 1) Very short!  Hahn p.71 Ch. 5 */
/* 2) Now adapting it: lab to try tying router files together  */

const express = require('express');
const app = express();
const petsRouter = require("./pets.js");
app.use("/olivia/pets", petsRouter);


app.get('/olivia/', (req, res)=>{
	res.send("You have found Olivia Example.");
} );

app.use((req, res)=>{
	res.status(400).send('Bad request.');
} );

app.listen(3002 );