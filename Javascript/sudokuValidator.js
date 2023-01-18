function validSolution(board) {
	let hash = []
	let res = true

	for (const line of board) {
		for (const col of line) {
			col > 9 || col <= 0 ? (res = false) : !hash.includes(col) ? (hash = [...hash, col]) : (res = false)
			if (!res) break
		}
		hash = []
	}

	for (const [lkey, line] of board.entries()) {
		for (const [ckey, _] of line.entries()) {
			const elem = board[ckey][lkey]
			elem > 9 || elem <= 0 ? (res = false) : !hash.includes(elem) ? (hash = [...hash, elem]) : (res = false)
			if (!res) break
		}
		hash = []
	}

	let step = 3
	let pos = [0, 0]
	let line_ite = 0
	let col_ite = 0
	for (const i of board) {
		for (const [lkey, line] of board.entries()) {
			for (const [ckey, col] of line.entries()) {
				let elem = board[lkey + pos[0]][ckey + pos[1]]
				elem > 9 || elem <= 0 ? (res = false) : !hash.includes(elem) ? (hash = [...hash, elem]) : (res = false)
				if (!res) break
				if (col_ite == 2) {
					col_ite = 0
					break
				}
				col_ite++
			}
			if (line_ite == 2) {
				line_ite = 0
				break
			}
			line_ite++
		}
		hash = []
		pos[1] += step
		if (pos[1] == 9) {
			pos[1] = 0
			pos[0] += step
		}
	}
	return res
}

console.log(
	validSolution([
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9],
	])
)
