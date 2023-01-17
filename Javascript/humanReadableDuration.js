// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

function formatDuration(seconds) {
	let [year, restYear] = [Math.floor(seconds / (3600 * 24 * 365)), seconds % (3600 * 24 * 365)]
	let [day, restDay] = [Math.floor(restYear / (3600 * 24)), restYear % (3600 * 24)]
	let [hour, restHour] = [Math.floor(restDay / 3600), restDay % 3600]
	let [minute, restMinute] = [Math.floor(restHour / 60), restHour % 60]
	let second = restMinute

	let now = seconds < 1 ? "now" : ""

	second == 1 && (minute || hour || day || year)
		? (second = " and " + second + " second")
		: second > 1 && (minute || hour || day || year)
		? (second = " and " + second + " seconds")
		: second > 1
		? (second += " seconds")
		: second == 1
		? (second += " second")
		: (second = "")

	minute == 1 && (hour || day || year) && !second
		? (minute = " and " + minute + " minute")
		: minute > 1 && (hour || day || year) && !second
		? (minute = " and " + minute + " minutes")
		: minute > 1 && (hour || day || year)
		? (minute = ", " + minute + " minutes")
		: minute == 1 && (hour || day || year)
		? (minute = ", " + minute + " minute")
		: minute > 1
		? (minute += " minutes")
		: minute == 1
		? (minute += " minute")
		: (minute = "")

	hour == 1 && (day || year)
		? (hour = ", " + hour + " hour")
		: hour > 1 && (day || year)
		? (hour = ", " + hour + " hours")
		: hour > 1
		? (hour += " hours")
		: hour == 1
		? (hour += " hour")
		: (hour = "")

	day == 1 && year
		? (day = ", " + day + " day")
		: day > 1 && year
		? (day = ", " + day + " days")
		: day > 1
		? (day += " days")
		: day == 1
		? (day += " day")
		: (day = "")

	year == 1 ? (year += " year") : year > 1 ? (year += " years") : (year = "")

	return year + day + hour + minute + second + now
}

console.log(formatDuration(120))

// Best Practice
// function formatDuration (seconds) {
// 	if(!seconds)return "now";
// 	var strout = "";
// 	var s = seconds%60;
// 	seconds = (seconds-s)/60;
// 	var m = seconds%60;
// 	seconds = (seconds-m)/60;
// 	var h = seconds%24;
// 	seconds = (seconds-h)/24;
// 	var d = seconds%365;
// 	seconds = (seconds-d)/365;
// 	var y = seconds;

// 	var english=[];
// 	if(y)english.push(y+" year"+(y>1?'s':''));
// 	if(d)english.push(d+" day"+(d>1?'s':''));
// 	if(h)english.push(h+" hour"+(h>1?'s':''));
// 	if(m)english.push(m+" minute"+(m>1?'s':''));
// 	if(s)english.push(s+" second"+(s>1?'s':''));

// 	return english.join(", ").replace(/,([^,]*)$/," and$1");

//   }
