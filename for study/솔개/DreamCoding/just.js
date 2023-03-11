const obj = {
    a:1,
    b:{
        c:2,
        d:3,
    }
};

const obj2 = Object.assign({},obj);
obj2.b.c=0;
console.log(obj);
console.log(obj2);
//Object.assign을 이용하여 값으로 객체를 복사하면 원본에 영향없음
//다만 객체 안의 객체 property 값은 복사하지 못하므로 원본에 영향미침

// const deepCopy = (origin) => {
//     const result = {};

//     for(let key in origin){
//         if(origin[key] !=null && typeof origin[key] === "object" ){
//             result[key]= deepCopy(origin[key]);
//         } else{
//             result[key] = origin[key];
//         }
//     }
//     return result;
// }


// const obj3 = deepCopy(obj);
// obj3.b.c = -1;
// console.log(obj);
// console.log(obj3);

//obj3는 deepCopy를 이용하여 복사한 객체라 obj와 완전독립적
//따라서 obj3의 속성을 변경했다고해서 obj 속성이 변경X



const deepCopy = (origin) =>{
    const result = {};
    for(let key in origin){
        if(origin[key] !== null && typeof origin[key] ==='object'){
            result[key] = deepCopy(origin[key]);
        } else{
            result[key] = origin[key];
        }
    }
    return result;
}