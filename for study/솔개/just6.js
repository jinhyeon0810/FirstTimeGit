const [ count ] = document.getElementsByTagName('span');
const countUpButton = document.getElementById('count-up-button');


countUpButton.onclick = (event) => {
    console.log(event);
    if(isNaN(Number(count.innerHTML)))   return;
    count.innerHTML = Number(count.innerHTML) + 1;
  
}


count.onmouseover = () =>{
    count.style.color = 'white';
    count.style.backgroundColor = 'gray';
}

count.onmouseout = () => {
    count.style.color = 'black';
    count.style.backgroundColor = 'transparent';
}

const input = document.getElementsByTagName('input')[0];
input.onfocus = () => {
    input.value = "하이루"
}   

const input2 = document.getElementsByTagName('input')[1];
const result = document.getElementById('result');


input2.onchange = (event) => {
    result.innerHTML = event.target.value;
}


const test = document.getElementById('test');

new Array(10).fill(0).forEach((_,index)=>{
    test.addEventListener('click', ()=>{
        console.log(`test cicked ${index+1}`);
    })
})


