//버튼 누르면 클래스에 show 추가

const listGroup = document.getElementsByClassName('list-group')[0];
const navBarTog = document.getElementsByClassName('navbar-toggler')[0];

navBarTog.addEventListener('click', ()=>{
    listGroup.classList.toggle('show');
})

const lorem = document.querySelector('.lorem');


//div 스크롤바 내린 양 + 눈에 보이는 박스 높이(여기선100) = div 실제높이
// lorem.addEventListener('scroll',()=>{
//     var 스크롤양 = lorem.scrollTop;
//     var 실제높이 = lorem.scrollHeight;
//     var 높이 = lorem.clientHeight;
//     console.log(스크롤양, 실제높이, 높이);

// })


//페이지 스크롤바 100 이상 내리면 로고 폰트 사이즈 줄임

const navBar = document.getElementsByClassName('navbar-brand')[0];

window.addEventListener('scroll', ()=>{
//scrollY : 스크롤 내리는 위치? 높이? : 현재 페이지 스크롤 양
    if(window.scrollY > 100){
        navBar.style.fontSize= '10px';
    }

    if(window.scrollY < 100){
        navBar.style.fontSize = '40px'
    }
});

//스크롤 한 양 : 페이지 맨 위부터 지금보이는 높이 시작점 전 까지 (보이지 않는 부분의 양)
// 보이는 높이 + 스크롤 한 양 = 전체높이
// clientHeight + scrollTop = scrollHeight;


lorem.addEventListener('scroll', ()=>{
    var 스크롤양 = lorem.scrollTop;
    var 실제높이 = lorem.scrollHeight;
    var 높이 = lorem.clientHeight;
    if(스크롤양 + 높이 > 실제높이 -10){
        alert('다읽음');
    }
})


// 여기서 추가 이해는 
//1. 스크롤바 조작 마다 코드실행가능
//2. 박스실제높이 / 보이는 높이 구할수있음
//3. 스크롤 양 구할수 있음
