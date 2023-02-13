function solution(A,B){
   const fs = require('fs');

   const input = fs.readFileSync('/dev/stdin').toString().split('');

   const A = parseInt(input[0]);    
   const B = parseInt(input[1]);
    return A+B;
}

console.log(A,);