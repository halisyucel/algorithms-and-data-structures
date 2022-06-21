const bubbleSort = (array) => {
	let tmp;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < (array.length - i - 1); j++) {
			if (array[j] > array[j+1]) {
				tmp = array[j+1];
				array.splice(j+1, 1);
				array.splice(j, 0, tmp);
			}
		}
	}
}

module.exports = bubbleSort;