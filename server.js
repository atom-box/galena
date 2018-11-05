/* Hahn Ch3 p.40 */

const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res)=>{
	res.end("To do:\n \
	* Live deploy: Express.js static page.	\n \
	* Express.js serving html views, multiple routes	\n \
	* Express.js serving Elm.	\n \
	* Migrate Rob Miller obituary	\n \
	* Migrate Ken Genest obituary	\n \
	* Migrate Carl Zemke obituary	\n \
	* Spruce up my resume and deploy it	\n \
		\n \
Done:	\n \
	* Quit 1&1 hosting	\n \
	* Sign up for Digital Ocean	\n \
		\n \
		\n \
		\n \
		\n \
Contact	\n \
	Github: atom-box\n \
	Email: atom underscore box at h0tm4il dot com\n \
	Twitter: @mistergenest\n \
		\n \
s");
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
