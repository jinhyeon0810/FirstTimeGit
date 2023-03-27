

function privateData(params){
    let temp='a';
    
    return{
        value:function(){
            return temp;
        },
        changeValue:function(newVal){
            temp = newVal;
        },
    };
}

const private = privateData();

console.log(private.value());
private.changeValue('b')
console.log(private.value());

///===================================

function counterApp(initValue){
    let countValue = initValue;

    return{
        value:function(){
            return countValue;
        },

        increment: function(){
            return countValue++;
        },

        decrement : function(){
            return countValue--;
        }
    };

}

const counter1 = counterApp(1);
const counter2 = counterApp(2);

console.log(counter1.value());

console.log(counter1.increment());
console.log(counter1.increment());

//========================================


const promiseResolve = Promise.resolve();
const promiseReject = Promise.reject();s