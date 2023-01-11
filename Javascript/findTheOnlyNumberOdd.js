function findOutlier(integers) {
	let odd = 0;
	let even = 0;
	for (let i = 0; i < 3; i++) {
		if (integers[i] % 2) odd++;
		else even++;
	}
	if (even >= 2) {
		return integers.filter((e) => e % 2)[0];
	} else {
		return integers.filter((e) => !(e % 2))[0];
	}
}
