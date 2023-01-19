function checkUnit(arr) {
	let first = arr[0]
	let find = false
	for (let i = first + 1; i <= 9; i++) {
		if (arr.includes(i)) {
			find = true
			let idx = arr.indexOf(i)
			arr.splice(idx, 1)
			arr.splice(0, 0, i)
			break
		}
	}
	if (find) {
		let n = 0
		let step = 1
		while (n <= 9) {
			for (let i = step; i < arr.length; i++) {
				if (arr.includes(n, step)) {
					let key = arr.indexOf(n, step)
					let num = arr[key]
					arr.splice(key, 1)
					arr.splice(step, 0, num)
					step++
				}
			}
			n++
		}
		return arr
	}
	return false
}

function nextBigger(n) {
	let arr = n
		.toString()
		.split("")
		.map((e) => +e)
	let res = -1
	let step = 2
	let hashMap = []

	while (hashMap.length < arr.length) {
		hashMap = arr.slice(-step)
		let find = checkUnit(hashMap)
		if (find) {
			let len = find.length
			res = +arr
				.slice(0, arr.length - len)
				.concat(find)
				.join("")

			break
		}
		step++
	}
	return res
}

console.log(nextBigger(57498600))
