// March 25, 2018 
// A one hour from-memory server

const express = require("express");
const PORT = 4321;
const app = express();
app.get( /^\/users\/(..)(..)$/, (req, res, next)=>{

} );
app.use((req, res)=>{

} );

app.listen(4321);
console.log(`listeningggg on _${PORT}_.`)