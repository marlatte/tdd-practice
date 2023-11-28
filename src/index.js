export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export const reverseString = (str) => str.split('').reverse().join('');

export const calculator = (() => ({
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => a / b,
}))();

function getDictionaries(shiftFactor) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const lowerShifted = alphabet.map((char, index) => {
		const shiftIndex = index + shiftFactor;
		return alphabet[
			shiftIndex < alphabet.length ? shiftIndex : shiftIndex - alphabet.length
		];
	});

	const lowerDict = {};
	alphabet.forEach((char, index) => {
		lowerDict[char] = lowerShifted[index];
	});

	const upperDict = {};
	const upperInput = Object.keys(lowerDict).map((char) => char.toUpperCase());
	const upperOutput = Object.values(lowerDict).map((char) => char.toUpperCase());
	upperInput.forEach((char, index) => {
		upperDict[char] = upperOutput[index];
	});

	return { lowerDict, upperDict };
}

export function caesarCipher(str, shiftFactor) {
	const { lowerDict, upperDict } = getDictionaries(shiftFactor);
	return str
		.split('')
		.map((char) => lowerDict[char] ?? upperDict[char] ?? char)
		.join('');
}

export function analyzeArray(arr) {
	return {
		average: arr.reduce((curr, acc) => curr + acc, 0) / arr.length,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
}
