let arr = [["true", true, true, true][(true, true, true, true)][(1, 2, 2, 2)]];

for (let i = 0; i < arrays.length; i++) {
	result[i] = true;
	for (let j = 0; j < arrays[i].length - 1; j++) {
		if (arrays[i][j] !== arrays[i][j + 1]) {
			result[i] = false;
		}
	}
}

return result;
