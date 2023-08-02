
const button = document.getElementById("countupbutton");
const buttonWrapper = document.getElementById('button-wrapper');
const buttonSubWrapper = document.getElementById('button-subwrapper');

button.onclick = () =>{
    event.stopPropagation(); 
    console.log('wrapper event triggered');
};

buttonWrapper.onclick = () =>{
    console.log('wrapper event triggered');
};

buttonSubWrapper.onclick = () =>{
    console.log('wrapper event triggered');
};