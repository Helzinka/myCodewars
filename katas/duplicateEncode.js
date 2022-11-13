// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
	return word
		.split("")
		.map((e) => {
			return word.match(new RegExp(`[${e}]`, "gi")).length > 1 ? ")" : "(";
		})
		.join("");
}

//smart move

// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
//   }

console.log(duplicateEncode("Success"));
