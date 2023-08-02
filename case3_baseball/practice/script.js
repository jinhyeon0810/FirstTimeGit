;(() => {
  'use strict'
  const get = (target) => document.querySelector(target)

  const init = () =>{
    get('form').addEventListener('submit', (event)=> {
      playGame(event)
    })

    setPassword()
  }
const baseball = {
  limit : 10, //총 횟수
  digit: 4, //자릿수
  trial: 0, //현재 시도횟수
  end : false, //현재 끝나지않아서...?
  //각 셀렉터 들을 미리 인스턴스로 잡아두자
  $question : get('.ball_question'),
  $answer : get('.ball_answer'),
  $input : get('.ball_input'),
}

const {limit, digit, $question, $answer, $input} = baseball

let {trial, end} = baseball

/*setPassword 함수 이해완료==========================================
처음에 배열 false 10개
false false false false false false false false false false

처음 pw 값 없음
근데 이게 <4 까지니까 0 , 1 , 2,3  4가지 경우의 수가 나옴
그동아 ㄴrandom하게 4개 뽑음 ( 5 6 7 8 가정)
 password.length = 0 1 2 3
   그러면 random =5 6 7 8 가 나왓다곡 가정하면



pssw = psw + ran
              0 + 5
              5 + 6 = 56 
====================================================================*/

const setPassword = () => {
  //패스워드지정해줍니다
  const gameLimit = Array(limit).fill(false)
  let password = '' //패스워드 초기화
  
  while(password.length<digit){
  const random = parseInt(Math.random() * 10, 10)

  if(gameLimit[random]){
    continue
  }

  password += random
  gameLimit[random] = true
}
  baseball.password = password
  console.log(password);
}


const onPlayed = (number, hint) => {
  //시도를 했을 때, number: 내가입력한번호, hint:현재 어떤상황
  return `<em>${trial} 차 시도</em> : ${number}, ${hint}`

}

const isCorrect = (number, answer) => {
  //번호가 같은가?
  return number === answer
}

const isDuplicate = (number) => {
  //중복번호가 있는가?
  return [...new Set(number.split(''))].length !== digit
}

const getStrikes = (number, answer) => {
  //스트라이크 카운터는 몇개?
  let strike = 0
  const nums = number.split('')
  nums.map((a, index) =>{
    if(a === answer[index]){
      strike++
    }    
  })
  return strike;
}

const getBalls = (number, answer) => {
  //볼 카운터 몇개? , 정답의 숫자를 포함 할 때
  let ball = 0
  const nums = number.split('')
  const gameLimit= Array(limit).fill(false)
  answer.split('').map((nums)=>{
    gameLimit[nums] = true
    //answer의 4개 숫자(ex 1234면 1,2,3,4)를 gameLimit 배열 안에 true 형태로 표시해놔서 
    //(배열 answer 의 각 문자열 값을 gameLimit 배열의 인덱스로 보고 
    //해당 인덱스 부분을 true로 인식시켜 answer숫자값을 기억해둠
    //나중에 gameLimit 배열 중 true로 된 곳의 자릿수 의 숫자 값들이 비밀번호 4자리 임
  })

  nums.map((num, index)=>{
    if(answer[index] !== num && !!gameLimit[num]){
      ball++
    } // 이번엔 내가 입력한 number 
  })
  return ball

}

const getResult = (number, answer) => {
  // 시도에 따른 결과
  
  if(isCorrect(number,answer)){
    end = true
    $answer.innerHTML = baseball.password
    return '끝 ㅅㄱ'
  }

  const strikes = getStrikes(number,answer)
  const balls = getBalls(number,answer)

  return 'STRIKE: ' + strikes + ', BALL: ' + balls
}

const playGame = (event) => {
  // 게임플레이
  event.preventDefault()

  if(!!end){//end값이 true인거니까 게임이 끝난거
    return
  }

  const inputNumber = $input.value
  const { password } = baseball

  if(inputNumber.length !==4){
    alert(`${digit} 자리 숫자를 입력해라`)
  } else if(isDuplicate(inputNumber)){
    alert('중복숫자가있어요')
  } else{
    trial++
    const result = onPlayed(inputNumber,getResult(inputNumber, password) )
  //입력한 값과 실제값을 비교해주고 만약 맞다면 승리조건, 아니면 실패라는 것을 넘겨주도록
  //그 onplayed라는 것에 이 result로 받아온 값을 다시 argument로 보내서 hint 값으로 나타내주도록 합니다
  $question.innerHTML += `<span>${result}</span>`
  //그리고 getresult로 받아온 값과 number값을 보면서 return으로 받아온
  // 숫자와 그 힌트값을 question destructing으로 되어있는 ball question 태그에다가 
  //innerHTML로 노출시켜줌 , 플러스와 함꼐썻으니 계속 추가됨

  if(limit <= trial && !isCorrect(inputNumber, password)){
    alert('쓰리아웃')
    end = true
    $answer.innerHTML = password
}
}
  $input.value = ''
  $input.focus()

}

init()

})()
