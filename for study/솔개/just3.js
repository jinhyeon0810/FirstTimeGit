const products = {
    date: new Date("2023-02-10T00:00:00"),
    names: ["가지","오이","파프리카","당근"],
    buyAll :function(){
        const buy = (name)=>{
            console.log(`${this.date.toLocaleDateString()}에 ${name}를 구매합니다.`);
        }

        this.names.forEach((name) =>{
            buy(name);
        })
    }
};

products.buyAll();

//화살표 함수는 내부에 this가 없음,  함수 기본 표현식 일 경우 this가 있음
//this가 빈 객체로 있으니  this 객체에 접근 시 접근할 수 없다고 나올 것임
//화살표 함수는 error가 안뜸 (함수 내부에 this가 없잖아)
//this가 없으면 바로 위의 this 참조(부모 요소의 this를 참조) 여기서는 products
//buy 안에 있는 this를 보면 products가 들어있답디다
//함수 기본 표현식으로 만든 식 안에서의 this를 살펴봐도 아무것도 들어있지않음
//this 주입을 위해 함수 실행 시 bind라는 함수를 쓰기도함
//ex) buy2(name).bind(this);