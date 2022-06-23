const countingSort = require('./counting-sort');

test('countingSort() best case test', () => {
	const testArray = [1,1,2,3,4,5,5,6,7,8,8];
	const expectation = [1,1,2,3,4,5,5,6,7,8,8];
	countingSort(testArray);
	expect(JSON.stringify(testArray) === JSON.stringify(expectation)).toBe(true);
});

test('countingSort() avarage case test', () => {
	const testArray = [1,8,2,4,5,3,5,6,1,7,8];
	const expectation = [1,1,2,3,4,5,5,6,7,8,8];
	countingSort(testArray);
	expect(JSON.stringify(testArray) === JSON.stringify(expectation)).toBe(true);
});

test('countingSort() worst case test', () => {
	const testArray = [8,8,7,6,5,5,4,3,2,1,1];
	const expectation = [1,1,2,3,4,5,5,6,7,8,8];
	countingSort(testArray);
	expect(JSON.stringify(testArray) === JSON.stringify(expectation)).toBe(true);
});