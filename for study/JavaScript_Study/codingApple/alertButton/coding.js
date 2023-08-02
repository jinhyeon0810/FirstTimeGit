


const alertText = document.getElementById('alert');
const openButton = document.getElementsByTagName('button')[0];
const closeButton = document.getElementsByTagName('button')[1];

openButton.addEventListener('click', ()=>{
    alertText.style.display = 'block';
});

closeButton.addEventListener('click', ()=> {
    alertText.style.display = 'none';
});
