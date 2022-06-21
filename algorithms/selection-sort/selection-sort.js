const selectionSort = (array) => {
	for (let cursor = 0; cursor < array.length; cursor++) {
		let tmp = 0;
		let min = array[0];
		for (let index = 0; index < (array.length - cursor) ; index++) {
			if (min > array[index]) {
				min = array[index];
				tmp = index;
			}
		}
		array.splice(tmp, 1);
		array.push(min);
	}
}

module.exports = selectionSort;