const express = require('express');
// const logger = require('morgan');
const app = express();
const PORT = 8008;

const staffers = [];
let x = { 
	name: "Lemmy",
	salary: 34000,
	campus: "Palo Alto"
};

staffers.push(x);
staffers.push(
	{ name: "Derek",
		salary: null,
		campus: "Pomona"
	}, 
	{
		name: "Pancho",
		salary: 36000,
		campus: "Villa"
	}
);

console.log(staffers[0].salary);
const app = express();
app.get("/pancho", (req, res)=>{
	res.send(``)
} );

// app.use(morgan('tiny'));


app.listen(PORT);  