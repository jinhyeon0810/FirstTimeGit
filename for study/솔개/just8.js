// let result = "";
// const obj = {};

// try{
//  result = obj.property.a;
// } catch(error){
//     result = '모름';
//     console.log(error);
// } finally{
//     console.log(`result : ${result}`);
// }


// try{
//     throw new Error('이건 일부로 만든겁니다.');
// } catch(error){
//     console.log(error);
// }

//=================비동기
// const A = (callback) =>{
//     const a = 'A 함수 실행 후 생기는 데이터'
//     console.log('A 함수 실행');
//     callback(a);
// }

// const B = (a) => {
//     console.log(`${a}를 이용하는 B`)
// };

// A(B);

fetch('./sample.json')
.then(async (result)=>{
    console.log('result', result);
    if(result.ok){
        const data = await result.json();
        console.log(data);
    }
})

fetch("https://ohou.se")
.then((res)=>{
    console.log('success', res);
})
.catch((err)=>{
    console.log('error', err);
})