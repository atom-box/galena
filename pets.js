const express = require("express");
let pets = ['octopus', 'mushroom', 'cat1', 'cat2'];
const petsRouter = express.Router();

console.log("Made it to here: #5 in pets.js.")
petsRouter.get("/:id",(req, res)=>{
	const x = pets[req.params.id];
	res.send(`In your menagerie I found this [${x}].`);
	next();
});

petsRouter.get("/",(req, res, next)=> {
	console.log("pets rock!");
	res.send(`Fave pets have always been these: ${pets}`);
	next();
	// TRY WITHOUT NEXT
});

module.exports = petsRouter;
console.log("Made it, even, to #20, after the 'Listen' statement.")

//const petsRouter = require('express').Router({mergeParams: true});

//const app = petsRouter();
//app.get();

//module.exports = petsRouter;