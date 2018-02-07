/* A router with two routes.    */
/* Very short!  Hahn p.71 Ch. 5 */

const express = require('express');
const app = express();

app.get('/olivia/', (req, res)=>{
	res.send("You have found Olivia Example.");
} );

app.use((req, res)=>{
	res.status(400).send('Bad request.');
} );

app.listen(3002 );