let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('성공')
    },250)
})

myFirstPromise.then((successMessage) => {
    console.log('와!' + successMessage)
});