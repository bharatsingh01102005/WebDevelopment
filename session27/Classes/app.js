
//constructor function
// function Person(firstname,lastname,email){
// this.firstName = firstname ;
// this.lastName = lastname ;
// this.eMail = email;

// }
// Person.prototype.printName = function(){
//     console.log(`my name is ${this.firstName} ${this.lastName}`)
// }
// Person.prototype.gettName = function(){
//     return(`${this.firstName} ${this.lastName}`)
// }
// let Person1 = new Person('sam','vohra','sam@gmail.com');
// console.log(Person1);
// console.log(Person1.eMail);
// console.log(Person1.printName());
// console.log(Person1.gettName());



//class syantax

class Person{

    constructor(firstname,lastname,email){
this.firstName = firstname ;
this.lastName = lastname ;
this.eMail = email;

    }

    getName(){
        return(`${this.firstName} ${this.lastName}`)
    }
    printName(){
        console.log(`my name is ${this.firstName} ${this.lastName}`)
    }

}


class Student extends Person{
     constructor(firstname,lastname,email,groupno){
        super(firstname,lastname,email);
       this.group = groupno;
     }
       getName(){
        return(`super se bhi upar${this.firstName} ${this.lastName}`)
    }


}

let student1 = new Student('barak','obama','barak@gmail.com',100)
console.log(student1);
console.log(student1.eMail)
console.log(student1.group)
console.log(student1.getName())











let Person1 = new Person('sam','vohra','sam@gmail.com');
console.log(Person1);
console.log(Person1.eMail);
console.log(Person1.lastName);
console.log(Person1.printName());
console.log(Person1.getName());



