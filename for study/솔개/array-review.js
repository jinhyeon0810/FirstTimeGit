
//Array

//1. 배열 선언

const arr1 = new Array();
const arr2 = [1,2,3];

//2.Index position
const fruits = ['a','b'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

//3 Looping over an array
//print all fruits
//3-1. for

console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// 3-2 for of

for(let fruit of fruits){
    console.log(fruit);
}

//3-3 for each
fruits.forEach((a)=>console.log(a));

fruits.push('c','d');
console.log(fruits);

