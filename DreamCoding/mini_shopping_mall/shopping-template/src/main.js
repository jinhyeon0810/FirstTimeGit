

// 아이템 HTML 동적 생성
function createHTMLString(item){
    return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item_thumnail" />
    <span class="item_description">${item.gender}, ${item.size} size</span>
  </li>` 
}

// 버튼 클릭 시 이벤트를 주는 함수
function setEventListener(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons')
    logo.addEventListener('click', ()=> displayItems(items))
    buttons.addEventListener('click', (event)=>onButtonClick(event, items))
}

// 버튼 클릭 시 해당 type에 맞게 필터링 해주는 함수
function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null && value == null){
        return; }
    const filteredItems = items.filter((item) => {return item[key] === value})  
    console.log(filteredItems)
    displayItems(filteredItems)
}

// 전체 아이템들 불러오는 함수
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map((item) => { return createHTMLString(item)}).join('')
   }

// fetch 불러와서 json 데이터 받는 함수
function loadItems(){
    return fetch('./data/data.json')
    .then(response => response.json())
    .then(json => (json.items))
}

// json데이터 받기
loadItems()
.then((items) => {
    displayItems(items)
    setEventListener(items)    
})
.catch(console.log)