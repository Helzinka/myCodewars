// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
	let has = "#";
	let main = str.trim().split(" ");
	let transform = [];
	if (main.length >= 1 && main != "") {
		for (let i = 0; i < main.length; i++) {
			transform.push(main[i].replace(main[i].charAt(0), main[i].charAt(0).toUpperCase()));
		}
		let end = has + transform.join("");
		return end.length > 140 ? false : has + transform.join("");
	} else return false;
}

// smart move
// function generateHashtag (str) {
// 	if(!str || str.length < 1) return false;

// 	var r = '#' + str.split(' ').map(function(el) {
// 	  return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
// 	}).join('');
// 	return r.length > 140?false:r;
//  }
console.log(generateHashtag("ldzlzd"));
