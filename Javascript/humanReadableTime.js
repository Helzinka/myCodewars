// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(sec) {
	h = Math.floor(sec / 3600);
	_h = h < 10 ? "0" + h : h;
	m = Math.floor((sec / 60) % 60);
	_m = m < 10 ? "0" + m : m;
	s = sec % 60;
	_s = s < 10 ? "0" + s : s;
	return _h + ":" + _m + ":" + _s;
}

console.log(humanReadable(9));
