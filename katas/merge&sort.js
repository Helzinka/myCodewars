function mergeSort(array1, array2) {
	let arr = array1.concat(array2);
	for (let i = 0; i < arr.length; i++) {
		let init = arr[i];
		for (let e = i + 1; e < arr.length; e++) {
			if (init === arr[e]) {
				arr.splice(e, 1);
			}
		}
	}
	return arr.sort();
}

const users1 = ["Jean", "Antoine", "Alexandra"];
const users2 = ["Camille", "Antoine", "Louise", "Jean", "Paul"];
mergeSort(users1, users2);
// Expected: Alexandra, Antoine, Camille, Jean, Louise, Paul
