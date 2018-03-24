// Feb 28, 2018 short exercise.
// From memory, make a 20-line static server
// Based on Ch. 3, Evan M. Hahn, Express in Action

const express = require("express");
const logger = require("morgan");
const path = require("path");
const favicon = require("serve-favicon");
const staSer = express();
const  PORT = 3000;
const fave = "biz.png";
const file1 = "package.json";

/*const x = path.join(__dirname, "public" , fave );
staSer.use(favicon(x));*/

/*const y = path.join(__dirname, file1 );
staSer.use(express.static(y));*/

staSer.use(logger("tiny")); 
var staticPath = path.join(__dirname, "static");
staSer.use(express.static(staticPath));
 
staSer.use((req, res, next)=>{
	res.status(437);
	console.log("Just got to 'use'.");
	next();
} );

staSer.get("/", (req, res, next)=>{
	console.log(`Always a log . . .`);
	res.status(881).send(`Yay, on, with port ${PORT}.`);
} );
staSer.get("/dog", (req, res, next)=>{
	console.log(`dog log`);
	res.status(882).send("Woof.");
} );
staSer.get("/cat", (req, res, next)=>{
	console.log(`cat log . . .`);
	res.status(883).send("Shred, jump.");
} );


staSer.listen(PORT, (req, res)=>{
	console.log(`Server is listening on port ${PORT}`);
} );
