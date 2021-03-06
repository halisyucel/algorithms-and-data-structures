const countingSort = (array) => {
	let output = new Array(array.length);
	let count = [];
	let max = array[0];
	
	for (let i = 0; i < array.length; i++)
		if (max < array[i]) max = array[i];
	
	for (let i = 0; i < (max+1); i++)
		count.push(0);
	
	for (let i = 0; i < array.length; i++)
		count[array[i]] += 1;
	
	for (let i = 0; i < (count.length - 1); i++)
		count[i+1] += count[i];
	
	for (let i = 0; i < array.length; i++) {
		output[count[array[i]] - 1] = array[i];
		count[array[i]] -= 1;
	}
	
	for (let i = 0; i < array.length; i++)
		array[i] = output[i];
}

module.exports = countingSort;