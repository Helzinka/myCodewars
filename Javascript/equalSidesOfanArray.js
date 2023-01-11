// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

const reducer = (arr, idx, isleft) => {
	if (isleft) {
		if (idx > 0) {
			arr = arr.slice(0, -arr.length + idx)
			return arr.reduce((a, b) => {
				return a + b
			}, 0)
		} else {
			return 0
		}
	} else {
		arr = arr.slice(idx + 1)
		return arr.reduce((a, b) => {
			return a + b
		}, 0)
	}
}

function findEvenIndex(arr) {
	let left = 0
	let right = 0
	let res = -1
	for (let i = 0; i < arr.length; i++) {
		left = reducer(arr, i, true)
		right = reducer(arr, i, false)
		if (left == right) {
			res = i
			break
		}
	}

	return res
}

console.log(findEvenIndex([0, 0, 0, 0, 0]))
