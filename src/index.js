export function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
	return str.split('').reverse().join('');
}

export const calculator = (() => {
	return {
		add: (a, b) => a + b,
		subtract: (a, b) => a - b,
		multiply: (a, b) => a * b,
		divide: (a, b) => a / b,
	};
})();

export function caesarCipher(str, shiftFactor) {
	const { lowerDict, upperDict } = getDictionaries(shiftFactor);
	return str
		.split('')
		.map((char) => {
			return lowerDict[char] ?? upperDict[char] ?? char;
		})
		.join('');
}

function getDictionaries(shiftFactor) {
	const lowerAlf = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const lowerShifted = lowerAlf.map((char, index) => {
		const shiftIndex = index + shiftFactor;
		return lowerAlf[
			shiftIndex < lowerAlf.length ? shiftIndex : shiftIndex - lowerAlf.length
		];
	});

	let lowerDict = {};
	lowerAlf.forEach((char, index) => {
		lowerDict[char] = lowerShifted[index];
	});

	let upperDict = {};
	const upperInput = Object.keys(lowerDict).map((char) => char.toUpperCase());
	const upperOutput = Object.values(lowerDict).map((char) => char.toUpperCase());
	upperInput.forEach((char, index) => {
		upperDict[char] = upperOutput[index];
	});

	return { lowerDict, upperDict };
}

export function analyzeArray(arr) {
	return {
		average: arr.reduce((curr, acc) => curr + acc, 0) / arr.length,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
}
