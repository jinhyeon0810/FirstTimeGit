

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
  <button class="buy">구매</button>
  <button class='cancel'>취소</button>
  </div>`
  
  row.insertAdjacentHTML('beforeend',템플릿);;

})
// 구매버튼 누르면 누른 상품명 localstorage에 저장히기 array로 저장

const buyDOM = document.getElementsByClassName('buy')[0];
const buyDOM_1 = document.getElementsByClassName('buy')[1];
const buyDOM_2 = document.getElementsByClassName('buy')[2];


buyDOM.addEventListener('click', (e)=>{
    let title = e.target.previousElementSibling.previousElementSibling.innerHTML
    if(localStorage.getItem('cart') != null ){
      let 꺼낸거 =JSON.parse( localStorage.getItem('cart'));
      꺼낸거.push(title)
      localStorage.setItem('cart', JSON.stringify(꺼낸거))
    } else{

   //그게 아니면 밑에꺼
    localStorage.setItem('cart', JSON.stringify([title]))}
})

buyDOM_1.addEventListener('click', (e)=>{
    let title = e.target.previousElementSibling.previousElementSibling.innerHTML
   //이미 cart항목있으면 수정,
    if(localStorage.getItem('cart') != null ){
        let 꺼낸거 =JSON.parse(localStorage.getItem('cart'));
      꺼낸거.push(title)
      localStorage.setItem('cart', JSON.stringify(꺼낸거))
    } else{

   //그게 아니면 밑에꺼
    localStorage.setItem('cart', JSON.stringify([title]))}
})

buyDOM_2.addEventListener('click', (e)=>{
   let title = e.target.previousElementSibling.previousElementSibling.innerHTML
   //이미 cart항목있으면 수정,
    if(localStorage.getItem('cart') != null ){
        let 꺼낸거 =JSON.parse( localStorage.getItem('cart'));
      꺼낸거.push(title);
      localStorage.setItem('cart', JSON.stringify(꺼낸거));
    }else{

   //그게 아니면 밑에꺼
    localStorage.setItem('cart', JSON.stringify([title]));}
})


const cancelDOM = document.getElementsByClassName('cancel')[0];
const cancelDOM_1 = document.getElementsByClassName('cancel')[1];
const cancelDOM_2 = document.getElementsByClassName('cancel')[2];

//local storage 지우는거
   function removeItem(title){
    let originalInfo = JSON.parse(localStorage.getItem('cart'))
    let newInfo = originalInfo.filter((info)=>{
        return info !== title
    })
    localStorage.setItem('cart',JSON.stringify(newInfo))
   }

cancelDOM.addEventListener('click', (e)=>{
    if(localStorage.getItem('cart') != null ){
    let title = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    removeItem(title)
}})

cancelDOM_1.addEventListener('click', (e)=>{
    let title = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    removeItem(title)
})

cancelDOM_2.addEventListener('click', (e)=>{
    let title = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    removeItem(title)
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
         <button>구매</button>
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




