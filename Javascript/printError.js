// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
	let sum = 0
	;[...s].forEach((e) => {
		if (e.charCodeAt(e) > 109) {
			sum++
		}
	})
	return `${sum}/${s.length}`
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
