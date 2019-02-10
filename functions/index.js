const functions = require('firebase-functions');
const corpora = require('corpora-project');
const express = require('express');
const bodyParser = require('body-parser');


const randomQuote = express();
randomQuote.use(bodyParser);

randomQuote.get('/quote', (req, res) => {
		
		console.log(randomQuoted());
		return res.send(randomQuoted());
		

	});
	


function randomize (input) {
console.log(input);
	//use full input
if(input){
	return input[Math.random(0,input.length-1)];
}
else console.log("error");
}

function randomQuoted () {
	
	let nouns = corpora.getFiles('words', 'nouns');
	let adverbs = corpora.getFiles('words', 'adverbs');
	let verbs = corpora.getFiles('words', 'verbs');
	let adjectives = corpora.getFiles('words', 'adjectives');
	
	
	//adj
	//noun
	//adverb
	//verb
	//noun

let quote = "";
return quote = randomize(adjectives[2]) + " " + randomize(nouns.nouns)
+ " " +
randomize(adverbs)	+ " " +
randomize(verbs) + " " +
randomize(nouns) + ".";

	
	}

module.exports = {

	randomQuote
}

console.log(randomQuoted());

