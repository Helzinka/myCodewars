// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
	let revert = parens.split("").map((e) => (e === "(" ? 1 : 0));
	let res = false;
	if (revert.length === 0) return true;
	while (!(revert.length % 2) && revert.length != 0) {
		let len = revert.length;
		for (const i in revert) {
			if (revert[+i] === 1 && revert[+i + 1] === 0) {
				[...Array(2)].map((e) => revert.splice(i, 1));
				res = true;
			}
		}
		if (len == revert.length) {
			return false;
		}
	}
	return res;
}

// smart move
// function validParentheses(parens){
//     var n = 0;
//     for (var i = 0; i < parens.length; i++) {
//       if (parens[i] == '(') n++;
//       if (parens[i] == ')') n--;
//       if (n < 0) return false;
//     }

//     return n == 0;
//   }

console.log(validParentheses("(())((()())())"));
