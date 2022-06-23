const shellSort = (array) => {
	let tmp;
	const length  = array.length;
	for (let gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2)) {
		for (let i = gap; i < length; i++) {
			tmp = array[i];
			let j;
			for (j = i; j >= gap && array[j - gap] > tmp; j -= gap)
				array[j] = array[j - gap];
			array[j] = tmp;
		}
	}
}

module.exports = shellSort;