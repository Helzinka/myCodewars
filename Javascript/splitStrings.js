// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
	const data = []
	for (let i = 0; i < str.length; i++) {
		if (!((i + 1) % 2)) {
			data.push(str[i - 1] + str[i])
		}
	}
	if (str.length % 2) {
		data.push(str[str.length - 1] + "_")
	}

	return data
}

// BP
// function solution(str){
// 	arr = [];
// 	for(var i = 0; i < str.length; i += 2){
// 	  second = str[i+1] || '_';
// 	  arr.push(str[i] + second);
// 	}
// 	return arr;
//   }

console.log(solution("abcdefg"))
