'use strict'

//JavaScript is synchronous
//동기적인 아이이다, 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰 하나하나씩 동기적으로 실행된다.
//호이스팅? : var 변수와 , function declaration 함수선언 들이 제일 위로 올라가는 것
//콜백함수 : 전달해준 함수를 나중에 불러주는 개념
//브라우저 api ex)setTimeout 은 먼저 브라우저에 요청함  ,  비동기적인 실행 방법

console.log('1');
setTimeout(() =>
    console.log('2'),1000);

console.log('3'); 

//동기적 콜백함수
function printImmediately(print){
    print();
}

printImmediately(()=> console.log('print'));

//함수 선언은 호이스팅이 되어 제일 위로 올라감, 순서대로 함수 선언되어 바로바로출력

//비동기적 콜백함수
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('print'),2000)4


//콜백에도 동기적실행과 비동기적실행 방법이 있음.
//javascript는 함수를 callback 형태로 인자로 다른함수에 전달할 수 있고
// 변수에 할당할 수도 있는 언어.


//===============Callback Hell example======

class UserStorage {
    loginUser(id, password, onSuccess,onError){
        setTimeout(() ={
            if(
                ( id === 'ellie' && password === 'dream')||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }

        }, 2000)
     
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name : 'ellie', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }

        },1000);
    }

    }






// onSuccess, onError 콜백..., id 전달..
