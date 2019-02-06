const functions = require('firebase-functions');
const corpora = require('corpora-project');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


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


return {random(adjectives.adjs) + " " + random(nouns.nouns)
+ " " +
random(adverbs.adverbs)	+ " " +
random(verbs.verbs) + " " +
random(nouns.nouns) + ".";
}
	
	}




exports.randomQuote = functions.https.onRequest((req, res) => {
	res.send(randomQuoted());
});

