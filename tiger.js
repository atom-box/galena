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
	, 
	{
		name: "Chlorine",
		salary: 15000,
		campus: "Halogenia"
	}, 
	{
		name: "Fluorine",
		salary: 39900,
		campus: "Halogenia"
	}
);


app.get("/pancho", (req, res)=>{
	let n = 2;
	res.send(`Looks like the name is _${staffers[n].name}_ and the salary is _${staffers[n].salary}_.`);
} );

app.get("/staff/:id", (req, res)=>{
	let n = req.params.id ;
	res.send(`Looks like the name is _${staffers[n].name}_ and the salary is _${staffers[n].salary}_.`);
} );


// app.use(morgan('tiny'));


app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}.`);
}  );  
