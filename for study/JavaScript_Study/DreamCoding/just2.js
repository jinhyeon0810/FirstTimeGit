const obj = {
    property1 : '1',
    property2 : {
        subProperty1 : '2-1',
        subProperty2 : '2-2',
    }
};

const obj2 = Object.assign({}, obj); //SHALLOW COPY

obj2.property2.subProperty1 = 'new 2-1';
console.log(obj2.property2.subProperty1);

//
const deepCopy = (origin) => {
    const result = {};

    for(let i in origin){
        if(origin[i] !== null && typeof origin[i] === "object"){
            result[i] = deepCopy(origin[i]);
        }else{
            result[i] = origin[i];
        }
    }
    return result;
};

const ob3 = deepCopy(obj);
console.log(ob3);