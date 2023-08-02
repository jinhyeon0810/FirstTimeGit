
//삼육구게임 구현

function 삼육구게임(num){
  if (num % 3 == 0 && num<9) {
    console.log("박수");
  } else if
  (num % 9 == 0){
    console.log('박수x2');
  } else
   {
    console.log('통과');
  }
}

삼육구게임(11);

//진짜 삼육구 게임

function 삼육구게임2(num){
    let 박수 = '';
    
    for(let i = 0; i<String(num).length; i++){
        if(String(num)[i] ==3 || String(num)[i] ==6 || String(num)[i] ==9){
            박수 = 박수 + '박수 ';
        } else{
            박수 = '통과';
        }
    }
    console.log(박수);
}
  
  삼육구게임2(66);


//공인중개사 시험점수 합격 여부

function 합격여부(score1,score2){
    if(score1 >=40 && score2 >=40 && score1+score2 >=120){
        console.log('합격하셨어요')
    } else{
        console.log('불합격이네요')
    }
    
}

합격여부(50,50)


//이자율 계산

let 예금액 = 60000;
let 미래예금액 = 0;

function 목돈(){
  if(예금액 < 50000){
    미래예금액 = 예금액 * 1.15;
  } else{
    미래예금액 = 예금액 * 1.2;
  }
}
목돈();
console.log(미래예금액)


//커피리필
let first = 360;


function refill(){
  return first * (5/3) * (5/3); 
}
console.log(refill());


function 단위변환(num, num2){
  let result = (num * 60 + num2)*1000
  return result;
}
 
console.log(단위변환(1,30))
 


//UI 퀴즈
let 횟수 = 0;  
const sendAnswer = document.getElementById('send-answer');

sendAnswer.addEventListener('click', ()=>{
  횟수++
  console.log(횟수);

  if(document.getElementById('answer').value == '1992'){
    alert('정답');
  } else if
  (횟수>3 && document.getElementById('answer').value != '1992'){
    alert('멍청이');
  } else{
    alert('오답');
  }

})

//안됬던이유, 우선 js파일과 html 파일 연도잉 안되어있었음
// value값을 innerHTML로 적음...


var 출석부 = ['흥민','영희','철수','재석'];

function 이름찾기(para){
  for(let i =0; i<출석부.length; i++){
    if(출석부[i] == para ){
      console.log('있음')
      return;
    } else{
      console.log('없다')
    }
  }
}

// 구구단을 외자 구구단을 외자

function 구구단(){
  for(let i =2; i<10; i++){
    for(let j=1; j<10; j++){
      console.log (`${i} x ${j} = ${i * j}`);
    }
  }
}

//평균점수 측정해주는 동작 
var result = 0;
let ave = 0;

function 평가(arr, b){
  for(let i =0; i<arr.length; i++){
    result = result + arr[i]
  }
  ave = result/arr.length

  if(ave-b>0){
    console.log(`${ave-b} 차이로 재수 해야겠네요`)
  } else{
    console.log(`${b-ave} 차이로 합격 하시겠네여`)
  }
}

평가([1,2,3]);