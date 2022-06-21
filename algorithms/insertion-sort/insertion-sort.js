const insertionSort = (array) => {
	let tmp;
	for (let cursor = 1; cursor < array.length; cursor++) {
		for (let i = (cursor-1); i >= 0; i--) {
			if (array[i] < array[i+1]) break;
			tmp = array[i+1];
			array[i+1] = array[i];
			array[i] = tmp;
		}
	}
}

module.exports = insertionSort;