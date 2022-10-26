// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
	let sum = 0;
	let newArr = arr.filter((a) => {
		if (a === 0) {
			sum++;
			return false;
		} else {
			return true;
		}
	});
	for (let i = 0; i < sum; i++) {
		newArr.push(0);
	}
	return newArr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
