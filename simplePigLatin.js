// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
	return str
		.split(" ")
		.map((a) => {
			if (/\W/g.test(a)) {
				return a;
			} else {
				return a.slice(1) + a.charAt(0) + "ay";
			}
		})
		.join(" ");
}

console.log(pigIt("latin Normal")); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !
