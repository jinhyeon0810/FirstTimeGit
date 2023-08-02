//syntatic sugar , async 쓰면 자동으로 promise만들수잇음
//promise 는 pending, fulfill, reject 3개의 상태
//깔끔히 promise 사용할수있는 방법
//무조건 promise가 나쁘고 await async 대처 는 아님
//각자 경우에 따라 맞춰 쓰면 됨

// 1. async
 async function fetchUser(){
    // 백엔드에서 사용자의 데이터를 받아오는 함수, 네트워크 통신을 통해, 10초정도걸리는 코드 가정
       return 'ellie';
    }

const user = fetchUser();
user.then(console.log);
console.log(user);

//무언가 오래 걸리는 코드를 비동기 처리 하지 않으면 자바스크립트 엔진은 동기적으로 코드를 수행 (한줄한줄씩, 한줄이 끝나야 넘어가는)
//10초가 걸리면 10초동안 머물러있고 네트워크 데이터 받고 그제서야 다음줄로 넘어가고 return됨
//return된 코드가 유저에 할당되고 그 다음라인 출력
//10초정도 비어있는 웹페이지를보게된다.. 이런것들은 비동기적으로 처리할수있게 해야함

//2. await : async붙은 함수 안에서만 쓸수잇음

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return "사과";
}

async function getBanana(){
    await delay(1000);
    return '바나나';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. Promise APIs   all 이용
function pickAllfruits(){
    return Promise.all([getApple(), getBanana()])    //promise.all은 promise배열을 전달하게되면 모든 promise들이 병렬적으로 다 받을때까지 모아주는 아이
        .then(fruits => fruits.join(' + ')
        );                    //배열 형태로 다 받아진 배열이 다시 전달됨
}
pickAllfruits().then(console.log);

//둘중 빠르게 동작하는 거 1개만 뽑기   race 이용
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);



class Counter{
    constructor(runEveryFiveTimes){
        this.counter=0;
        this.callback = runEveryFiveTimes;
    }

    increase(){
        this.counter++
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num){
    console.log(`yo ${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
