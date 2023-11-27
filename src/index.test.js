import {
	analyzeArray,
	caesarCipher,
	calculator,
	capitalize,
	reverseString,
} from './index';

describe('capitalize', () => {
	test('handles one word', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
	test('handles two words', () => {
		expect(capitalize('hello world')).toBe('Hello world');
	});
});

describe('reverse String', () => {
	test('handles one word', () => {
		expect(reverseString('hello')).toBe('olleh');
	});
	test('handles two words', () => {
		expect(reverseString('hello world')).toBe('dlrow olleh');
	});
});

describe('calculator', () => {
	test('adds 2 integers', () => {
		expect(calculator.add(1, 2)).toBe(3);
	});
	test('subtracts 2 integers', () => {
		expect(calculator.subtract(10, 3)).toBe(7);
	});
	test('multiplies 2 integers', () => {
		expect(calculator.multiply(10, 3)).toBe(30);
	});
	test('divides 2 integers', () => {
		expect(calculator.divide(10, 5)).toBe(2);
	});
});

describe('caesar', () => {
	test('shifts one word', () => {
		expect(caesarCipher('hello', 3)).toBe('khoor');
	});
	test('wraps z back to a', () => {
		expect(caesarCipher('xyz', 3)).toBe('abc');
	});
	test('shifts a string of only letters and spaces', () => {
		expect(caesarCipher('a tall man', 5)).toBe('f yfqq rfs');
	});
	test('ignores punctuation', () => {
		expect(caesarCipher("i can't stand him.", 1)).toBe("j dbo'u tuboe ijn.");
	});
	test('keeps letter case the same', () => {
		expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
	});
	test('handles varied case and punctuation', () => {
		expect(caesarCipher("I can't stand him.", 1)).toBe("J dbo'u tuboe ijn.");
	});
});

describe('Array analyzer', () => {
	test('fn returns an object', () => {
		expect(analyzeArray([1, 2, 3])).toBeTruthy();
	});

	// Avg
	test('average of short array', () => {
		expect(analyzeArray([1, 2, 3]).average).toBeCloseTo(2);
	});
	test('average of med array', () => {
		expect(analyzeArray([1, 2, 3, 4, 5]).average).toBeCloseTo(3);
	});
	test('average of long array', () => {
		expect(analyzeArray([1, 2, 3, 4, 5, 7, 10, 20]).average).toBeCloseTo(6.5);
	});

	// Min
	test('min of short array', () => {
		expect(analyzeArray([1, 2, 3]).min).toBe(1);
	});
	test('min of med array', () => {
		expect(analyzeArray([0, 2, 3, 4, 5]).min).toBe(0);
	});
	test('min of long array', () => {
		expect(analyzeArray([-31, 2, 3, 5, 7, 10, 20]).min).toBe(-31);
	});

	// Max
	test('max of short array', () => {
		expect(analyzeArray([1, 2, 3]).max).toBe(3);
	});
	test('max of med array', () => {
		expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
	});
	test('max of long array', () => {
		expect(analyzeArray([1, 2, 3, 5, 7, 10, 20]).max).toBe(20);
	});

	// Length
	test('length of short array', () => {
		expect(analyzeArray([1, 2, 3]).length).toBe(3);
	});
	test('length of med array', () => {
		expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
	});
	test('length of long array', () => {
		expect(analyzeArray([1, 2, 3, 4, 5, 7, 10, 20]).length).toBe(8);
	});
});
