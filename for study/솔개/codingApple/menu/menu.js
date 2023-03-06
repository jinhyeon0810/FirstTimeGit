//버튼 누르면 클래스에 show 추가

const listGroup = document.getElementsByClassName('list-group')[0];
const navBarTog = document.getElementsByClassName('navbar-toggler')[0];

navBarTog.addEventListener('click', ()=>{
    listGroup.classList.toggle('show');
})
