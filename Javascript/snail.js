const snail = function (arr) {
	let fn = []
	let n = arr.length
	while (n > 0) {
		if (n < arr.length) {
			for (let i = 0; i < 2; i++) {
				fn.push(n)
			}
		} else {
			fn.push(n)
		}
		n--
	}

	let sum = []
	let top = { init: 0, on: true }
	let right = { init: arr.length - 1, on: false }
	let bot = { init: arr.length - 1, on: false }
	let left = { init: 0, on: false }

	if (!arr[0][0]) return []

	for (const n of fn) {
		if (top.on) {
			for (let i = 0; i < n; i++) {
				let line = top.init
				let col = i + left.init
				sum.push(arr[line][col])
			}
			top.init++
			top.on = false
			right.on = true
		} else if (right.on) {
			for (let i = 0; i < n; i++) {
				let line = i + top.init
				let col = right.init
				sum.push(arr[line][col])
			}
			right.init--
			right.on = false
			bot.on = true
		} else if (bot.on) {
			for (let i = 0; i < n; i++) {
				let line = bot.init
				let col = right.init - i
				sum.push(arr[line][col])
			}
			bot.init--
			bot.on = false
			left.on = true
		} else if (left.on) {
			for (let i = 0; i < n; i++) {
				let line = bot.init - i
				let col = left.init
				sum.push(arr[line][col])
			}
			left.init++
			left.on = false
			top.on = true
		}
	}
	return sum
}

console.log(snail([[]]))

// best pratice
// snail = function(arr) {
//     var result = [];
//     var top = 0, bottom = arr.length-1;
//     var left = 0, right = arr[0].length-1;

//     do {
//       for (var i = left; i <= right; i++){result.push(arr[top][i])} // top row
//       for (var i = top+1; i <= bottom; i++){result.push(arr[i][right])} // right column
//       for (var i = right-1; i >= left; i--){result.push(arr[bottom][i])} // bottom row
//       for (var i = bottom-1; i > top; i--){result.push(arr[i][left])} // left column
//       top++; bottom--; left++; right--;
//     } while (top <= bottom);

//     return result;
//   }
