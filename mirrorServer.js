/* mirrorServer */
/* This tiny server merely parrots back whatever request you throw at it. */
/* By Evan Genest January 28, 2018  */

const http = require('http');

let y = 0;
let outMessage = "";

const x = (req, res )=> {
	y++;
	console.log(`Here comes a request to <x>${req.url}<x>`);
	outMessage += `<br>#${y}: Hello Bobby...`;
	res.end(outMessage);
};

const server = http.createServer(x);

server.listen(3009);