'use strict';

//Array

//1. 배열 선언

const arr1 = new Array();
const arr2 = [1,2];

//Index 기준으로 데이터가 저장됨, 이를 활용하여 데이터를 검색 및 삽입/삭제

//2.Index position
const fruits = ['a','b'];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);


//3. Looping over an array
//print all fruits
//3-1. for
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//3-2. for of

for(let fruit of fruits){
    console.log(fruit); 
}

//3-3. for each
fruits.forEach((fruit) => console.log(fruit));

//4.Addition , deletion, copy
//push : add an item to the end
// pop : remove an item from the end
// shift / unshift are slower than pop, push
//뒤에서부터 뺴는거는 기존에 들어있떤 데이터는 움직이지 않아서 빠른 기능 빠른 operatoin진행가능
//앞에서부터 데이터를 넣으려면 1번째를 2번째 박스에 담아두고 ㅅㅐ로운데이터를 집어넣어야함
//가급적 pop / push 사용
//spliace 이용해서 index position에서 지움

fruits.push('c','d','e');
console.log(fruits);
fruits.splice(1,2);

const fruits2=['가','니']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searchingx
//find the index
console.log(fruits);
console.log(fruits.indexOf('a'))

//includes

//lastIndexOf

fruits.push('a');
console.log(fruits);
console.log(fruits.indexOf('a'));
console.log(fruits.lastIndexOf('a'));

