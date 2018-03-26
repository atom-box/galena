// March 25, 2018 
// A one hour from-memory server

const express = require("express");
const PORT = 4321;
const app = express();
console.log("Middleware at the head.");

app.get( /^\/lisa\/(..)(..)$/, (req, res, next)=>{
	let caught = req.params[0];
	caught = "Tales from " + caught + " oceans."; 

} );
app.get("/amy/:id", (req, res)=>{
	let caught = req.params.id;
	caught = "It's " + caught + " and more."; 
	res.status(321).send(caught)
} );
app.get("/evan", (req, res)=>{
	let caught = req.query.q;
	caught = "The Last " + caught + " in Town."; 
	res.status(321).send(caught)
} );


app.use((req, res)=>{
	console.log("Middleware at the tail.");
} );

app.listen(4321);
console.log(`listeningggg on _${PORT}_.`);