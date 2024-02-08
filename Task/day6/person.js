class Person{
    constructor(){
        this.name='noname';
        this.age=0;
        this.city='none';
        this.email='no@gmail.com';
    }

    getDetails(){
        console.log(`Name: ${this.name},\n`,`Age:${this.age},\n`,`City:${this.city},\n`,`Email:${this.email}`);
    }
}


let person1=new Person();
let person2=new Person();


person1.name='Prakash';
person1.age='22';
person1.city='trichy';
person1.email='prakash123@gmail.com'

person2.name='Vijay';
person2.age='22';
person2.city='Madurai';
person2.email='vijay123@gmail.com'

person1.getDetails();
person2.getDetails();

//Output:

/* Name: Prakash,
 Age:22,
 City:trichy,
 Email:prakash123@gmail.com
Name: Vijay,
 Age:22,
 City:Madurai,
 Email:vijay123@gmail.com

 */