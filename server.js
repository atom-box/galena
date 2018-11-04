/* Hahn Ch3 p.40 */

const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res)=>{
	res.end("Welcome to the Dharma Bums.");
} );

app.get("/about", (req, res)=> {
	res.end("'The DB's were a band.' -- Maximum RnR");
}  );

app.get("/store", (req, res)=>{
	res.end("Consider exiting through our gift shop.");
}  );

// Let's grab some data from the route.
app.get("/players/:name1", (req, res)=>{
	res.end(`It's a fact that ${req.params.name1} is not a great player.`);
}  )

http.createServer(app).listen(7000);
