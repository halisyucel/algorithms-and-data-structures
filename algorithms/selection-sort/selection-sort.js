const selectionSort = (array) => {
	let tmp;
	let minIndex;
	for (let cursor = 0; cursor < (array.length - 1); cursor++) {
		minIndex = cursor;
		for (let index = cursor+1; index < array.length ; index++) {
			if (array[index] < array[minIndex])
				minIndex = index;
		}
		tmp = array[minIndex];
		array[minIndex] = array[cursor];
		array[cursor] = tmp;
	}
}

module.exports = selectionSort;