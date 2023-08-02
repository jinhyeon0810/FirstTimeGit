//promise
//catch : 실패했을 떄 값을 나타냄,
//promise 는 미래에 성공하거나 실패할만한 값을 가지는 비동기 연산을 도우는 객체
//대기, 성공, 실패 상태를 가진다

const promiseResolve = Promise.resolve('성공');
const promiseReject = Promise.reject('실패');

promiseResolve
.then((resolve) => {
    console.log('1회' + resolve);
    return promiseResolve;    
})
.then((resolve) => {
    console.log('2회' + resolve);
    return promiseResolve;    
})
.then((resolve) => {
    console.log('3회' + resolve);
    return promiseResolve;    
})

then ->resolve (성공)  , catch -> reject(실패)

const one = Promise.resolve('1');
const two = Promise.resolve('2');
const three = Promise.resolve('3');


one
.then((oneRe)=>{
    console.log(oneRe);
    return one;
})

two
.then((twoRe)=>{
    console.log(twoRe);
    return two;
})

three
.then((threeRe)=>{
    console.log(threeRe);
    return three;
})

.finally(()=>console.log('end') );

//==========================================================

const starbucks = function(coffeeName){
    return new Promise((resolve,reject)=> {
        if(coffeeName ==='아메리카노'){
            resolve('아메리카노 1000원 입니다')
        
        } else{
            reject('아메리카노 없어용')
        }
    })
}

// starbucks('아메리')
// .then((resolve)=> console.log(resolve))
// .catch((reject)=>console.log(reject))
// .finally(()=>console.log('감사합니다')); 

//함수 앞에 async ,  async코드는 promise 코드를 항상 반환한다,  then 대신 await

async function americano(){
    const result1 = await starbucks('아메리');
    console.log( result1);
}

console.log(americano());

