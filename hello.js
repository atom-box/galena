const express = require('express');
const app = express();
const url = require('url');
const moustache = require('mustache');

let received = "http://www.funhouse.com/moons/";
let parsedURL = url.parse(received);
console.log(`The incoming was [${received}].`) 
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
console.log(`All parsings: ${Object.keys(parsedURL)} `);

const moons = [ 'io', 'genymede','europa','calisto'];

console.log("Me making sense of the request object:");
console.log("...");

app.get("/", (req, res)=> {
	res.send("sing out when you see a whale");
} );

app.get("/moons/", (req, res)=> {
	console.log("=====\n=====");
	let x = Object.keys(req);
	console.log(`The keys of REQ: ${x}`);
	console.log("=====\n=====");
	x = req._parsedUrl;
	console.log(`The REQ._PARSEDURL: ${x}`);
	console.log("=====\n=====");
	x = req.url;
	console.log(`The req.baseURL: ${x}`);
	console.log("=====\n=====");
	x = Object.keys(req.params);
	console.log(`The keys of REQ.params: ${x}`);
	res.send(moons[1]);
} );

app.listen(3000,  ()=>{
	console.log("Listening now on Port 3000.");
}  );
