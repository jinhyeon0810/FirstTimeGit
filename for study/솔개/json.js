//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);


const rabbit = {
    name:'tori',
    color:'white',
    size:null,
    birthDate:new Date(),
    jump:() =>{
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit, (key, value) =>{

console.log(`key: ${key}, value: ${value}`);
return value;
});

console.log(json);

//2. JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());

rabbit.jump();




