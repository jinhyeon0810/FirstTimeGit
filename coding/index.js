"use strict"


let currencyRatio = {
    USD: {
        KRW : 1314.80,
        USD : 1,
        VND : 23795.00,
        unit:'달러' 
    },

    KRW: {
        KRW : 1,
        USD : 0.00076,
        VND : 18.10,
        unit:'원' 
    },

    VND: {
        KRW : 0.055,
        USD : 0.000042,
        VND : 1 ,
        unit:'동'
    }
}; 
let fromCurrency = "USD"; //초기값 USD로 넣어줌
let toCurrency = "USD";





document
.querySelectorAll('#from-currency-list a')
.forEach((menu)=>{
    menu.addEventListener("click",function(){
    document.getElementById('from-button').textContent = this.textContent;
    //버튼을 가져와서 , 값을 바꾼다
    fromCurrency = this.textContent;
    document.getElementsById('name').innerHTML = currencyRatio[fromCurrency].unit;
   convert('from');
    //해당 값으로 저장해줌... wow
    })

})

// 우선 리스트를 불러오고
//클릭했을때 버튼의 이름값을 바꾸고, 해당 속성값 까지 바꿔줌
document
.querySelectorAll('#to-currency-list a')
.forEach((menu)=>{
    menu.addEventListener('click', function(){
        document.getElementById('to-button').textContent = menu.textContent;
        toCurrency = menu.textContent;

        convert('from');
    })
})

//키를 입력하는순간 / 환전이 되서 / 환전 값이 보인다

function convert(type){
    //환전 : 얼마 환전? 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지..?
    // 돈 * 환율 = 환전금액
    if(type==="from"){
    let amount = document.getElementById('from-input').value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
   
    document.getElementById('to-input').value = convertedAmount;
}
else{
    let toAmount = document.getElementById('to-input').value;
    let convertedToAmount = toAmount * currencyRatio[toCurrency][fromCurrency]
    document.getElementById('from-input').value = convertedToAmount;
}



}

//1. 드랍다운 리스트에 값이 바뀔때 마다 환전을 다시 한다..
// 바뀔때 -> click이벤트 쪽 ㅇㅇ