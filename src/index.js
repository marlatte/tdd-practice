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
