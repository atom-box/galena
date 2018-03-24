// March 24, 2018 challenge, by noon
//make an array of objects.
//each object is a object with a, b, c where a, b, c are array, object, var
//make it output to a screen every time there is a GET statment


const express = require("express");
const napkin = express();
const logger = require('morgan');
const PORT = 3456;
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

napkin.use(logger("tiny"));
napkin.get("/", (req, res)=>{
	res.end("Napkins.  Napkins for all my friends.");
} );
napkin.get("/carl",(req, res)=>{
	res.send(`From the "object": _${a[0].doers[1]}_ and _${a[0].description.length}_`);
}  );

napkin.listen(PORT);
console.log(`Now listening.   On _${PORT}_`)

