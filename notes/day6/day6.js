class Person{
    constructor(){
        this.name='noname';
        this.age='noage';
    }

    //Methods
    getDetails(){
        console.log(this.name,this.age);
    }
}

let Person1=new Person();
let Person2=new Person();

Person1.name='Prakash';
Person1.age=22;

Person2.name='vijay';
Person2.age=25;

Person1.getDetails();
Person2.getDetails();

