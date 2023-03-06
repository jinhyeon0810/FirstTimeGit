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

