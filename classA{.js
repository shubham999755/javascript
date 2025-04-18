class classA{
    constructor(name,age,mode1)
    {
        this.name=name;
        this.age=age;
        this.mode1=mode1;
    }
    display(){
        console.log("person name is $(this.name), age is $(this.age) , $(this.mode1)");
    }
}
let myInfo=new classA("ajay",23,"swift");
myInfo.display();