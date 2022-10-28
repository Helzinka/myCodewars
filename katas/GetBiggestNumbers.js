//get the biggest number of each sub arrays
// not from codewar

let list = [
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
];

function getBiggest(numbers) {
	return numbers.map((i) => i.reduce((a, b) => (a < b ? b : a)));
}

console.log(getBiggest(list));
// Expected result : [5,27,39,1001]
