function score(dice) {
	let pts = {
		triple: {
			1: 1000,
			2: 200,
			3: 300,
			4: 400,
			5: 500,
			6: 600,
		},
		simple: {
			1: 100,
			5: 50,
		},
	}
	let groupBy = dice.reduce((acc, curr) => {
		return { ...acc, [curr]: acc[curr] + 1 || 1 }
	}, {})

	return Object.entries(groupBy).reduce((acc, curr) => {
		let [k, v] = curr

		if (v > 3) {
			return acc + pts.triple[k] + (pts.simple[k] * (v - 3) || 0)
		}
		if (v > 2) {
			return acc + pts.triple[k]
		}
		if (k == "1" || k == "5") {
			return acc + pts.simple[k] * v
		}
		return acc
	}, 0)
}
