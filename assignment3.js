//! TASK 1: You are tasked with creating a JavaScript program that demonstrates different array manipulation operations. The program should cover adding and removing elements, sorting arrays, applying array methods such as map, filter, and reduce, and exploring the spread and rest operators.
// TODO 1: Adding and Removing Elements:
const my_arr = [1, 2, 3, 4, 5];

my_arr.push(6);
console.log(my_arr);

my_arr.pop();
console.log(my_arr);

// TODO 2: Sorting Arrays
const randArr = [3, 5, 8, 19, 2, 14];
randArr.sort(function (a, b) {
	return a - b;
});
console.log(randArr);

// TODO 3: Applying Array Methods
//// TODO: Create an array of numbers.
const nums = [3, 6, 7, 10, 11, 14];
//// TODO: Use the map method to double each number in the array.
function doubleNums(num) {
	return num * 2;
}

const newNums = nums.map(doubleNums);
console.log(newNums);

//// TODO: Use the filter method to filter out even numbers from the array.
function filterEven(num) {
	return num % 2 != 0;
}
const noEven = nums.filter(filterEven);
console.log(noEven);
//// TODO: Use the reduce method to calculate the sum of all numbers in the array.
let total = 0;
function findSum(total, num) {
	return total + num;
}

const sumArr = nums.reduce(findSum);
console.log(sumArr);

//! TASK 1: You are tasked with creating a JavaScript program that demonstrates different string manipulation operations. The program should cover obtaining the length of a string, converting cases (upper and lower), extracting substrings, and splitting strings based on a delimiter.
// TODO 1: Obtaining String Length - Create a string with some text content. - Use the `length` property to obtain the length of the string.
let message = "Hello, World!";
let length = message.length;
console.log(length);

// TODO 2: Converting Cases - Create a string with mixed-case content. - Use the `toUpperCase` method to convert the string to uppercase. - Use the `toLowerCase` method to convert the string to lowercase.
let text = "Hello, World!";
let upper = text.toUpperCase();
let lower = text.toLowerCase();

console.log(upper);
console.log(lower);

// TODO 3: Extracting Substrings - Create a string with some text content. - Use the `substring` method to extract a substring from the original string.
let string = "Hello, World!";
let result = string.substring(0, 4);

console.log(result);

// TODO 4: Splitting Strings - Create a string containing multiple words separated by spaces. - Use the `split` method to split the string into an array of words based on the space delimiter.
let sentence = "The quick brown fox";
let sentArr = sentence.split(" ");
console.log(sentArr);
