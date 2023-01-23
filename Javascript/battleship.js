function checkShapeOfShips(x, y, arr) {
	let count = 0

	while (arr[x][y + count] == 1 && count < 4) {
		arr[x][y + count] = 0
		count++
	}
	if (count <= 1) {
		while (arr[x + count][y] == 1 && count < 4) {
			arr[x + count][y] = 0
			count++
		}
	}

	return count
}

function check(x, y, arr) {
	let count = 0

	count += arr[x][y + 1] == undefined ? 0 : arr[x][y + 1]
	count += arr[x + 1][y + 1] == undefined ? 0 : arr[x + 1][y + 1]
	count += arr[x + 1][y] == undefined ? 0 : arr[x + 1][y]
	count += arr[x + 1][y - 1] == undefined ? 0 : arr[x + 1][y - 1]

	return count > 1 ? false : true
}

function validateBattlefield(field) {
	let ships = 20
	let shapes = { 4: 1, 3: 2, 2: 3, 1: 4 }
	for (let line = 0; line < field.length; line++) {
		for (let col = 0; col < field[line].length; col++) {
			if (field[line][col] == 1) {
				if (!check(line, col, field)) {
					return false
				}
				let length = checkShapeOfShips(line, col, field)

				if (shapes[length] > 0) {
					shapes[length] -= 1
					ships -= length
				} else {
					return false
				}
			}
		}
	}
	return ships == 0 ? true : false
}

console.log(
	validateBattlefield([
		[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
		[1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
		[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	])
)
