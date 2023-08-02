class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    getInfo(){
        return(
            this.name+
            '가(이)'+
            this.sound+
            '소리를 낸다.'
        );
    }
}


class Friends extends Animal {
    constructor(name,sound){
        super(name,sound);
    }
}

const dog = new Friends('개', '멍멍');


console.log(dog.getInfo());

