class Book{
    constructor(){
        this.name='noname';
    }

    //Methods
    getDetails(){
        console.log(this);
    }
}

let book1=new Book();

book1.name='dsa';

book1.getDetails();