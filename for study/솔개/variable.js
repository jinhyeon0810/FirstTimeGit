// Variable , rw(read/write) 메모리 값을 읽고 쓰는것이 가능

// const는 읽기만 가능

//함수선언 : 선언 시 우리가 어떠한 값을 전달 받아 올건지 인자들을 정의하고 나서
//코드블럭을 작성하게되는데 선언만 해놓으면 작성해놓은 코드블럭은 수행되지않음
//정의한 선언한 함수를 수행하려면 함수를 호출해야한다. 호출위해서는 함수 이름 옆에 괄호를이용하여
//함수에서 원하는 정의된 인자값들을 정의하면서 호출해야한다.
//함수의 이름자체는 함수를 가리키는 함수 자체가 된다. 그래서 괄호안쓰고 함수이름만 다른함수 인자로 전달하던지
//다른 변수에 할당하게 되면 함수자체를 가르키게되는것이다 



//function calculate(command, a,b)
//command : add, substract, divide, multiply, remainder


function calculate(command,a,b){
  switch(command){
    case 'add':
      return a+b;

    case 'substract':
      return a-b
    
    case 'divide':
      return a/b;

    case 'multiply':
      return a*b;

     case 'remainder':
      return a%b;
      
    default:
      throw Error('unknown command');
    }
}

console.log(calculate('add',2,3));