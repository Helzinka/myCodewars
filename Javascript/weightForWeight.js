function orderWeight(str) {
	let hashmap = []

	for (const e of str.split(" ")) {
		hashmap.push([e, [...e].reduce((a, b) => +a + +b, 0)])
	}
	hashmap.sort(([a1, b1], [a2, b2]) => {
		if (b1 === b2) {
			return a1 > a2 ? 1 : -1
		}
		return b1 - b2
	})

	let res = hashmap.map((e) => e[0]).join(" ")
	return res
}

// BP
// function orderWeight(strng) {
// 	return strng
// 	  .split(" ")
// 	  .map(function(v) {
// 		return {
// 		  val: v,
// 		  key: v.split("").reduce(function(prev, curr) {
// 			return parseInt(prev) + parseInt(curr);
// 		  }, 0)
// 		};
// 	  })
// 	  .sort(function(a, b) {
// 		return a.key == b.key
// 		  ? a.val.localeCompare(b.val)
// 		  : (a.key - b.key);
// 	  })
// 	  .map(function(v) {
// 		return v.val;
// 	  })
// 	  .join(" ");
//   }
