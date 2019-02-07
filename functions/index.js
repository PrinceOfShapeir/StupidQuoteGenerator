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
	


function random (input) {
	//use full input
	return input[Math.random(0,input.length-1)];
}

function randomQuoted () {
	
	let nouns = corpora.getCategories('words', 'nouns');
	let adverbs = corpora.getCategories('words', 'adverbs');
	let verbs = corpora.getCategories('words', 'verbs');
	let adjectives = corpora.getCategories('words', 'adjectives');
	
	
	//adj
	//noun
	//adverb
	//verb
	//noun

let quote = "";
return quote = random(adjectives) + " " + random(nouns.nouns)
+ " " +
random(adverbs)	+ " " +
random(verbs) + " " +
random(nouns) + ".";

	
	}

module.exports = {

	randomQuote
}

