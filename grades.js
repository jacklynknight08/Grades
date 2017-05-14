"use strict";
// Start with array of random scores in your JavaScript
console.log("Grades");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log(scores);

//Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

var a = [],
	b = [],
	c = [],
	d = [],
	f = [];

for ( var i = 0; i < scores.length; i++){
	if ((scores[i] >= 91) && (scores[i] <= 100)) {
		a.push(scores[i]);
		// console.log("A grades", a);
	}else if ((scores[i] >= 81) && (scores[i] <= 90)) {
		b.push(scores[i]);
		// console.log("B grades", b);
	}else if ((scores[i] >= 71) && (scores[i] <= 80)) {
		c.push(scores[i]);
		// console.log("C grades", c);
	}else if((scores[i] >= 61) && (scores[i] <= 70)) {
		d.push(scores[i]);
		// console.log("D grades", d);
	}else if ((scores[i] >= 50) && (scores[i] <= 60)) {
		f.push(scores[i]);
		//console.log("F grades", f);
	}
};
// Use console.log() to output the following criteria:
// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

console.log("Number of A's", a.length);
console.log("Number of B's", b.length);
console.log("Number of C's", c.length);
console.log("Number of D's", d.length);
console.log("Number of F's", f.length);

var min = Math.min.apply(null, scores);
console.log("Lowest Score is ", min);

var max = Math.max.apply(null, scores);
console.log("Highest Score is ", max);