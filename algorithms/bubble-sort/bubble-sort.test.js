const bubbleSort = require('./bubble-sort');

test('bubbleSort() best case test', () => {
	const testArray = [1,2,3,4,5,6,7,8,9,10];
	const expectation = [1,2,3,4,5,6,7,8,9,10];
	bubbleSort(testArray);
	expect(JSON.stringify(testArray) === JSON.stringify(expectation)).toBe(true);
});

test('bubbleSort() avarage case test', () => {
	const testArray = [4,3,8,7,6,10,1,9,2,5];
	const expectation = [1,2,3,4,5,6,7,8,9,10];
	bubbleSort(testArray);
	expect(JSON.stringify(testArray) === JSON.stringify(expectation)).toBe(true);
});

test('bubbleSort() worst case test', () => {
	const testArray = [10,9,8,7,6,5,4,3,2,1];
	const expectation = [1,2,3,4,5,6,7,8,9,10];
	bubbleSort(testArray);
	expect(JSON.stringify(testArray) === JSON.stringify(expectation)).toBe(true);
});