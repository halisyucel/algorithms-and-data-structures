const insertionSort = (array) => {
	let tmp;
	for (let cursor = 1; cursor < array.length; cursor++) {
		for (let i = (cursor-1); i >= 0; i--) {
			if (array[i] < array[i+1]) break;
			tmp = array[i+1];
			array.splice(i+1, 1);
			array.splice(i, 0, tmp);
		}
	}
}

module.exports = insertionSort;