// Q1. Iterate all the elements and print the elements.
const elements = [10, 20, 30, 40, 50];

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}
// Q2. Add 5 to each number inside the array.Take Arrey Length 5.
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 5;
}
console.log(arr);

// Q3. Reverce The Arrey. The elements should be numeric
const nums = [1, 2, 3, 4, 5];
const reversedNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    reversedNums.push(nums[i]);
}
console.log(reversedNums);

