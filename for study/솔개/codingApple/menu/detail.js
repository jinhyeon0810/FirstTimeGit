// 버튼 0 누르면
// 모든 버튼에 붙은 orange 제거
// 버튼 0에 orange 추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가
const tabButtons = document.querySelectorAll('.tab-button');
const tabButton1 = document.getElementsByClassName('tab-button')[0];
const tabButton2 = document.getElementsByClassName('tab-button')[1];
const tabButton3 = document.getElementsByClassName('tab-button')[2];

const tabContents = document.querySelectorAll('.tab-content');
const tabContent1 = document.getElementsByClassName('tab-content')[0];
const tabContent2 = document.getElementsByClassName('tab-content')[1];
const tabContent3 = document.getElementsByClassName('tab-content')[2];


//tabButtons와 tabContents 는 단일 element가 아니기때문에 
//classList.remove/add 를 쓸 수 없다 (이것들은 단일element에서만 적용)
//따라서 배열을 forEach함수로 나열시켜 클래스 적용을 시켜준다
//이벤트 리스트  하나 당 램 용량 차지...

// for(let i = 0; i<tabButtons.length; i++){
//     document.getElementsByClassName('tab-button')[i].addEventListener('click', ()=>{
//     탭열기(i);
// })
// }

    document.getElementsByClassName('list')[0].addEventListener('click', (e)=>{
    //     if(e.target == tabButton1){
    //     탭열기(0);
    // }
    //     if(e.target == tabButton2){
    //     탭열기(1);
    // }
    //     if(e.target == tabButton3){
    //     탭열기(2);
    // }
    //탭열기 구멍 안에 data-id 0, 1,2 가 들어가면 된다
    탭열기(e.target.dataset.id);
    })



function 탭열기(숫자){
    tabButtons.forEach((tabButton)=>{
        tabButton.classList.remove('orange')
    })
    document.getElementsByClassName('tab-button')[숫자].classList.add('orange');
    tabContents.forEach((tabContent)=>{
        tabContent.classList.remove('show')
    })
    document.getElementsByClassName('tab-content')[숫자].classList.add('show');
}

let car2 = {name : 'sonata', price : '5man'};

document.getElementsByClassName('card p-3')[0].innerHTML = `${car2.name} / ${car2.price}`;
