import { capitalize, reverseString } from './index';

describe('capitalize', () => {
	test('handles one word', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
	test('handles two words', () => {
		expect(capitalize('hello world')).toBe('Hello world');
	});
});
