
function fetchUser(isSuccess){
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            if(isSuccess){
                resolve({
                    id:1,
                    name:'김진현',
                    gender:'male',
                    email:'jinhyeon'
                });
            } else {
                reject(new Error('유저정보 불러오기 안됨'))
            }
        }, 1000);
    });
}

function fetchTodo(isSuccess){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(isSuccess){
                resolve({
                    userId: 1,
                    id: 1,
                    title : '우유 2개 사기',
                    completed : false,
                });
            } else{
                reject(new Error('today정보 불러오기 실패'))
            }
                },1000);
    });
}


async function getUserTodoData(){
    try{
        var user = await fetchUser(true);
        console.log('유저정보: ', user)
        if(user.id==1){
            var todo = await fetchTodo(true);
            console.log('todo 정보:', todo )
        }

        return {
            userInfo : user,
            todoInfo : todo,   
        };
    } catch(error){
        console.log("catch phrase:", error);
    }
}

getUserTodoData().then((logData) => {
    console.log(logData);
});









