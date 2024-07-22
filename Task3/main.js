
//Problem 1

let arr = [1,2,3,4];

let sum = arr.reduce(number => number + number);
console.log(sum)


//Problem2

let arr2 = [1,5,3,4];

let max = arr2.sort((a,b)=> b - a)
console.log(max)

//Problem3

let arr3 = [1,2,3,4];

let reverseArray = arr3.reverse()

console.log(reverseArray)

//Problem4

let arr4 = [1,2,2,1,3,4];

let distinct = [...new Set(arr4)];

console.log(distinct)