// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// mine
function spliced(arrA, elemFromB) {
	for (let a = 0; a < arrA.length; a++) {
		if (elemFromB === arrA[a]) {
			arrA.splice(a, 1);
			return spliced(arrA, elemFromB);
		}
	}
}
function arrayDiff(arrA, arrB) {
	for (let b of arrB) {
		spliced(arrA, b);
	}
	return arrA;
}

// smart move

// function array_diff(a, b) {
// 	return a.filter(e => !b.includes(e));
//   }

console.log(arrayDiff([1, 2], [1]));
