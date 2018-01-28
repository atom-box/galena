const express = require('express');
const app = express();
const url = require('url');
const moustache = require('moustache');

let received = "http://www.funhouse.com/raw_power?animal=dog&beverage=milk";
let parsedURL = url.parse(received);
console.log(`The incoming was [${received}].`) 
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

app.get("/", (req, res)=> {
	res.send("sing out when you see a whale");
} );



app.listen(3000,  ()=>{
	console.log("Listening now on Port 3000.");
}  );
