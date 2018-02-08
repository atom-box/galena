const express = require("express");
let pets = ['octopus', 'mushroom', 'cat1', 'cat2'];
const petsRouter = express.Router();
petsRouter.get("/olivia/pets",(req, res, next)=> {
	console.log("pets rock!");
	return;
} )
module.exports = petsRouter;

//const petsRouter = require('express').Router({mergeParams: true});

//const app = petsRouter();
//app.get();

//module.exports = petsRouter;