 //1. String concatenation//
 console.log('my' + 'cat');
 console.log('1'+2);
 console.log('string literals: 1+2 \n= ${1+2}');

 //2. Numeric operators
 console.log(1+1); // add
 console.log(1-1); //substract
 console.log(1/1); // divide
 console.log(1*1); //multiply
 console.log(5/2); //remainder
 console.log(2**3); //exponentiation


 //3.Increment and decrement operators
 let counter = 2;
 const preIncrement = ++counter;

 //counter = counter+1;
 //preIncrement = counter;

 const postIncrement = counter++;
 //postIncrement = counter;
 //counter = counter + 1;

 //4. Assignment operators
 let x =3;
 let y= 6;
 x += y; // x=x+y;

 //5. Comparison operators

 console.log(10 < 6); // less than

 //등등~~

 //6.Logical operators :   ||(or), &&(and), !(not)

 const value1 = false;
 const value2 = 4<2;

//||(or)
console.log('or:${value1 || value2 || check()}');

function check(){
    for (let i=0; i<10; i++){
        //wasting time
        console.log("a");
    }
    return true;
}

//7. Equality
// == loose equality, with type version
//=== strict equality, no type version

//object equality by reference


console.log(name==='ellie'?'yes':'no');


