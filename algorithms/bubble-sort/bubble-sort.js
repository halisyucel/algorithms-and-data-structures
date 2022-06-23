const bubbleSort = (array) => {
	let tmp;
	let isSorted;
	for (let i = 0; i < array.length; i++) {
		isSorted = true;
		for (let j = 0; j < (array.length - i - 1); j++)
			if (array[j] > array[j+1]) {
				isSorted = false;
				tmp = array[j+1];
				array[j+1] = array[j];
				array[j] = tmp;
			}
		if (isSorted) break;
	}
}

module.exports = bubbleSort;