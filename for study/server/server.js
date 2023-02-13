const express = require('express');  //아까 설치한 라이브러리 첨부해주세요
const app = express(); //첨부한 라이브러리를 이용해서 새로운 객체를 만들어주세요


//컴퓨터에서 서버를 열수가있음, 괄호 안에 어디다가 열지 적음

app.listen(8080, function(){
    console.log('listening on 8080')
})


//서버 접속 시 크롬창에 localhost:8080  <-이러한 형태로 접속
//node.js 서버를 express상으로 만들기 위한 기본문법 , 서버 오픈하는 문법 


//누군가 /get 으로 방문하면 pet관련된 안내문 띄워주기
app.get('/pet', function(요청, 응답){
    응답.send('반갑습니디ㅏ');

});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 홈페이지임');
})