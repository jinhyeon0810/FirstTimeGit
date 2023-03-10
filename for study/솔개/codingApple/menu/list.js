

var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  const row = document.getElementsByClassName('row')[0];

 products.forEach((a)=>{
 let 템플릿 = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${a.title}</h5>
  <p> 가격 : ${a.price}</p>
  </div>`
  
  row.insertAdjacentHTML('beforeend',템플릿);;

})


const more = document.getElementById('more');

more.addEventListener('click', ()=>{
fetch('https://codingapple1.github.io/js/more1.json ')
.then((respnse) => respnse.json())
.then((data) => { console.log(data)

data.forEach((a)=>{
    var 템플릿 = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p> 가격 : ${a.price}</p>
    </div>`
    row.insertAdjacentHTML('beforeend',템플릿);
})
})
})

//더보기 버튼 2번 누르면 7,8,9번째 상품 더 가져오고 , 버튼 안보이게하기

const sort1 = document.getElementById('sort1');

sort1.addEventListener('click', ()=>{
    products.sort((a, b)=>{
        if(a.title < b.title){
            return 1
        } else {
            return -1
        }
     
    })
    console.log(products);

        row.innerHTML = '';
        
    products.forEach((a)=>{
        let 템플릿 = `<div class="col-sm-4">
         <img src="https://via.placeholder.com/600" class="w-100">
         <h5>${a.title}</h5>
         <p> 가격 : ${a.price}</p>
         </div>`
         
         row.insertAdjacentHTML('beforeend',템플릿);;
       
       }) 
    
})

 document.getElementById('filter').addEventListener('click', ()=>{
    //filter 쓸때 새로운 변수에 담아 써야함 (데이터가 안변하므로)
    let newProduct = products.filter((a)=>{
        return a.price <=60000;
    });
    row.innerHTML = '';
        
    newProduct.forEach((a)=>{
        let 템플릿 = `<div class="col-sm-4">
         <img src="https://via.placeholder.com/600" class="w-100">
         <h5>${a.title}</h5>
         <p> 가격 : ${a.price}</p>
         </div>`
         
         row.insertAdjacentHTML('beforeend',템플릿);;
       
       }) 

    
    console.log(newProduct);
 })




