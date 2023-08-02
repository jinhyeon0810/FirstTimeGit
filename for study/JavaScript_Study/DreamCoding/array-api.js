//1.
const fruits = ['apple','banana','oragne'];

const result = fruits.join();
console.log(result);


// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

// fruits.forEach((value) => console.log(value));



//----------------------------------------------------


// //2.
// const fruits = ['apple','banana','oragne'];
// const results = fruits.split(',');
// console.log(results);

// const array1 = new Array(fruits);

// console.log(array1);
//-------------------------------------------------


// //3.
const array=[1,2,3,4,5]

const result3 = array.reverse();
console.log(result3);


//4.
const array1=[1,2,3,4,5];
const result4 = array1.slice(2,5);
console.log(result4);

 //조건---------------------------

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students =[
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//5.   
const result5 = students.find(function(student){
    return student.score === 90;
})

console.log(result5);

//6.
const result6 = students.filter(function(student){
    return student.enrolled === true;

})

console.log(result6);

//7.
const result7 = students.map(function(student){
    return student.score;
})

console.log(result7);

//8. check if there is a student with the score lower than 50
//some : return이 true가 되는 애들이 있는지 없는지 확인, 하나라도 만족하면true
//  every : 모든 value값들이 true가 될때 true
const result8 = students.some(function(student){
    return student.score < 50;
})
console.log(result8);

//9.compute students' average score
// reduce : 콜백함수를 전달하고, initial value전달 / 모든 요소 마다 호출
// return되는 값은 함께 누적된 그 결과값을 누적함. 배열에있는 모든 요소들의 값을
//누적, 모아놓을때 쓰는거구나 라는 감을 잡음

const result9 = students.reduce(function(prev,curr){
   
    return prev + curr.score;
},0)

console.log(result9/students.length);


//10. make a string containing all the scores

const scoreArray = students.map(function(student){
    return student.score ;
})

const score50 = scoreArray.filter(function(score){
    return score >= 50;
})


const result10 = score50.join();

console.log(result10);

//11. Q10 sorted in ascending order result should be
// : '45 ,66, 80, 88, 90'

const studentScore = students.map(function(student){
    return student.score;
})
console.log(studentScore);


const resultArray = studentScore.sort(function(a,b){
    return a-b;   
})

const result11 = resultArray.join();

console.log(result11);

// 위와 같은 코드를 가독성 좋게 가로 함수? 를 이용해서 정리함---------
{
const result11 = students.map(student => student.score)
.sort((a,b) => a - b)
.join();
console.log(result11);
}









