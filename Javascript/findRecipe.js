function cakes(recipe, available) {
	let res = []
	for (const key in recipe) {
		if (!available[key]) {
			return 0
		} else {
			res.push(Math.floor(available[key] / recipe[key]))
		}
	}
	return Math.min(...res)
}

console.log(
	cakes(
		{ sugar: 5, apples: 4 },
		{
			flour: 6,
			eggs: 19,
			oil: 8,
			milk: 6,
			apples: 7,
			sugar: 17,
			cream: 18,
			pears: 14,
			butter: 19,
			nuts: 17,
			chocolate: 3,
			cocoa: 9,
			crumbles: 6,
		}
	)
)
