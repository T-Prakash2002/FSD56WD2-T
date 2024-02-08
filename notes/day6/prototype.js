/*
    Prototype:

    -allows us create template for an object
    -Its allows us to add methods and properties to objects

*/

function Person(){
    
    this.name='';
    this.age='';

 /*   this.getDetails(){
        console.log(this.name);
        console.log(this.age);
    }
    */
}

let Person1=new Person();

Person1.name='abc';
Person1.age=25;

//console.log(Person1.name);