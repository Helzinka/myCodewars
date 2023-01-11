// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
	return (
		/[-_]/g[Symbol.split](str)[0] +
		/[-_]/g
			[Symbol.split](str)
			.slice(1)
			.map((e) => e[0].toUpperCase() + e.slice(1))
			.join("")
	)
}

console.log(toCamelCase("the-stealth_warrior"))
