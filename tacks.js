// March 24, 2018 challenge, by noon
//make an array of objects.
//each object is a object with a, b, c where a, b, c are array, object, var
//make it output to a screen every time there is a GET statment


const express = require("express");
const napkin = express();
const PORT = 3456;
napkin.get("/", (req, res)=>{
	res.end("Napkins.  Napkins for all my friends.");
} );

let a = [];
let task = {
	doers: ['Angel', 'Lopez', 'Nacho'],
	description: {
		short: 'plank',
		long: 'get on your elbows and hold the pose',
		length: 33
	}, 
	author: 'Tim'
};
a.push(task);
napkin.listen(PORT);
console.log(`Now listening.   On _${PORT}_`)

