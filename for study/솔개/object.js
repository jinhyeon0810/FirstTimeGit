//object 관련된 글 읽기

const name = 'ellie';
const age = 4;
print(name, age);
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie', age:4};

const obj1={};
const obj2= new Object();

//object = {key : value};  변수 / 값 으로 나누어진다.

//2.Computed properties : key should be always string
console.log(ellie.name);
console.log(ellie['name']);


function printValue(obj,key){
    console.log(obj[key]);
}

printValue(ellie,'name');

//4.Constructor function

function Person(name,age){
    this.name = name;
    this.age = age;
}

const person4 = new Person('David', '20');
console.log(person4);

//5. in operator : property existence check (key in obj)
 // key가 있는지 없는지 확인 할 수 있는 키워드

 console.log('name' in ellie);
 console.log('age' in ellie);

 //6. for..in  vs for..of  / for (key in obj)

 for (key in ellie){
    console.log(key);
 }
const array=[1,2,3,4,5]

 for(value of array){
    console.log(value);
 }


 //7.Fun cloning
 //object.assign(dest, [obj1, obj2, obj3...])

const user = {name : 'ellie', age: '20'};
const user2 = user;

user2.name = 'coder'

console.log(user);


//object assign

const user3= Object.assign({}, user);
console.log(user3);

