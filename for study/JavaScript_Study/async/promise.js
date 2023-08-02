

//Promise   기능 성공/실패  상태에 대해 이해
//producer 와 consumer의 차이점
//우리가 원하는 데이터를 제공하는 사람과 필요로 하는 사람의 차이점
//상태 : pending -> fulfilled state or rejected

//1.producer 
//비동기적으로 실행하는 promise 만듬
//promise는 클래스임, executor 라는 콜백함수를 전달해줘야함, 또다른 두가지의 콜백함수를 받음
//resolve, reject

const promise = new Promise((resolve, reject)=> {
    // 안에서 heavy한 일을함, 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 읽어오는 과정은
    //시간이 많이 걸려 동기적으로 처리하게되면 파일을 읽어오고 네트워크에서 데이터를 받아오는 동안
    //다음 라인 코드가 실행하지 않아, 시간이 걸리는 것들은 promise로 비동기적 처리가 좋음
    //promise안에 네트워크 통신을 하는 코드를 작성했다면 promise가 만들어지는 순간 바로 네트워크 통신을 수행하게됨
    //만약 네트워크 요청을 사용자가 요구햇을때만 해야하는 경우, 사용자가 버튼을 눌렀을때 네트워크 요청을 해야하는 상황이면
    //요구하지도않앗는데 불필요하게 네트워크 통신이 일어남,  promise만드는 순간 그 안에 전달한 executor라는 콜백함수가 바로 실행되니까 유의해야함
   //새로운 promise가 만들어질때는 우리가 전달한 executor라는 함수가 자동실행
    console.log('doing something...');    
    setTimeout(()=>
        //resolve('ellie');
        reject(new Error('no network'))
    ,2000);

});

//resolve: 기능을 잘 수행, 성공적 해냄 이라면 resolve라는 콜백함수를 호출한다
//성공적으로 네트워크에서 받아온 or 파일에서 읽어온 그것들을 가공한 데이터를 
//resolve라는 콜백함수를 통해 전달하면된다.

//2. Consumers : then, catch, finally
promise
.then((value) =>{   //value 파라미터는 promise가 잘 수행되어서 마지막으로 resolve 콜백함수에서 전달된 
                            //위의 ellie 라는 값이 들어오게됨
console.log(value);
})

.catch(error=>{
    console.log(error);
})

.finally(()=>console.log('finally'));


//만약 네트워크를 하다가 무언가 실패했을때  resolve 대신 reject 호출, 보통 error라는 object를 통해 값을 전달
// error라는 클래스는 javascript에서 제공하는 object 중 하나 , ()안에 이유를 적음

//then 은 성공적인 케이스 , catch 는 error 핸들링, .catch를 이용해 error가 발생했을때 어떻게 처리할건지 콜백함수 등록

//promise에 then을 호출하게되면 then은 결국 똑같은 promise를 return하기 때문에 그 return된 promise의 catch를 다시 호출할 수 있음


//3. Promise Chaining  promiseㄴㄴ resolve와 reject라는 콜백함수를 받는 executor 라는 콜백함수를 전달해줘야함
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
})

fetchNumber
.then(num => num*2)
.then(num => num*3 )
.then(num =>{   // 밑에 새로운 promise에 전달한다, then은 값을 바로 전달할 수 있고, (또다른)promise를 전달해도됨 
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(num-1),1000);
    })
})
.then(num =>console.log(num));


//4. Error Handling promise training시 어떻게 에러 핸들링하는지~
// 총 3가지의 promise를 return하는 함수들

const getHen = () => new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('닭'),1000);    
});

const getEgg = hen => new Promise((resolve, reject)=>{
    setTimeout(()=> reject(new Error(`error! ${hen}=> 계란`)),1000);
});

const cook = egg => new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(`${egg} =>후라이`),1000);
});

//서버에서 받아와서 넘어가는걸로

getHen()   //닭을 받아오고 나서 
.then(hen => getEgg(hen)) //전달 받은 닭을 이용해서 getegg라는 함수 호출

.then(egg => cook(egg)) // 정상적으로 수행되면 받아온 달걀을 가지고 cook
.then(meal => console.log(meal)); //요리가 완료된 후 문자열 출력
.catch(console.log);

//콜백함수 전달 시 받아오는 value를 다른함수로 고대로 호출하는 경우에는
// 생략가능 ex)  .then(getEgg) 식으로 작성가능



