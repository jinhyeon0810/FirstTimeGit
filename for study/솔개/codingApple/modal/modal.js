const logIn = document.getElementsByClassName('log-in')[0];
const blackBg = document.getElementsByClassName('black-bg')[0];

const buttonPrimary = document.getElementsByClassName('btn btn-primary')[0];
const forms = document.getElementsByTagName('form')[0];
const inputControl = document.getElementsByTagName('input')[0]; 
const formControl = document.getElementsByClassName('form-control')[0];
const formPassword = document.getElementsByClassName('form-control')[1];

logIn.addEventListener('click', ()=>{
  blackBg.classList.add('show')
})


const closeButton = document.getElementById('close');
closeButton.addEventListener('click', ()=>{
    blackBg.classList.remove('show')
})


buttonPrimary.addEventListener('click', (e)=>{
    if(formControl.value == '' ){
        alert('아이디 입력하세요');
        e.preventDefault();
    } else if
    (formPassword.value == ''){
        alert('비밀번호 입력하세요');
        e.preventDefault();
    } else if
    (formPassword.value.length<6){
        alert('비밀번호 6자리 이상 입력하세요');
        e.preventDefault();
    }
})  


//event 중에 input 은 form text 안 input에 내용을 쓸때마다 event가 먹어지고
// change는 input에 내용을 쓴 후 커서를 다른곳 클릭, 즉 포커스를 잃었을 때 event가 먹어짐


//badge 1회 클릭시 내부 글자를 light로 변경
// 2회 클릭시 글자 dark로 ~~~ 계속 반복

let count = 0;
const darkBtn = document.getElementsByClassName('badge bg-dark')[0];

darkBtn.addEventListener('click', ()=>{
    count++;
    if(count % 2 != 0){
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';
        darkBtn.innerHTML = 'Light 🔄';
    } else{
        document.body.style.color ='black';
        document.body.style.backgroundColor = 'white';
        darkBtn.innerHTML = 'Dark 🔄';
    }
})

///set Time out! //여기서 getelementbyclassname 이 아닌 bytagname으로 해서 20분 헤맴;
const alertspan = document.getElementsByClassName('alertspan')[0];
const alertdiv = document.getElementsByClassName('alert')[0];
setTimeout(()=>{
    alertspan.innerHTML = '4';
},1000);

setTimeout(()=>{
    alertspan.innerHTML = '3';
},2000);

setTimeout(()=>{
    alertspan.innerHTML = '2';
},3000);

setTimeout(()=>{
    alertspan.innerHTML = '1';
},4000);

setTimeout(()=>{
    alertdiv.style.display='none';
},5000);

//==========캐러셀 동작 구현

const btn1 = document.getElementsByClassName('btn1')[0];
const btn2 = document.getElementsByClassName('btn2')[0];
const btn3 = document.getElementsByClassName('btn3')[0];
const slideCon = document.getElementsByClassName('slide-container')[0];
const next = document.getElementsByClassName('next')[0];


btn1.addEventListener('click', ()=>{
    slideCon.style.transform = 'none';
    지금사진 =1;
})

btn2.addEventListener('click', ()=>{
    slideCon.style.transform = 'translateX(-100vw)';
})

btn3.addEventListener('click', ()=>{
    slideCon.style.transform = 'translateX(-200vw)';
})


//다음버튼 누르면 지금 보이는 사진이 1이면 2번 사진보여주세요
// 지금 보이는 사진이 2면 3번 보여주세요

let 지금사진 = 1;

next.addEventListener('click', ()=>{
    if(지금사진 == 1){
     slideCon.style.transform = 'translateX(-100vw)';
     지금사진 = 2;
    } else if
    (지금사진 == 2){
    slideCon.style.transform = 'translateX(-200vw)';
    지금사진 = 3;
    }
    console.log(지금사진);
})


blackBg.addEventListener('click', (e)=>{
   
    // e.target; //유저가 실제로 누른거
    // e.currentTarget; //이벤트리스너 달린 곳 (여기선 blackBg): this;
    // e.preventDefault() -> //이벤트 기본동작 막아주삼
    // e.stopPropagation(); // 내 상위요소로 퍼지는 이벤트 버블링 막음
    console.log(e.target);
    if(e.target == blackBg){
    blackBg.classList.remove('show');
}

})


