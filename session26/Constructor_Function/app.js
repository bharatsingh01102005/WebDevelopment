
function fun(){

}
let naam = fun();
console.log(naam);

//constructor


// function User(user,mail){

//     this.username = user;
//     this.email=mail;
//     this.description = function(){
//         return `mt name is ${this.username}`
//     }

// }
// let user1 = new User('bharat','bharatsingh2@gmail.com');
// let user2 = new User('ram','ram@gmail.com');
// console.log(user1)
// console.log(user1.description())
// console.log(user2)
// console.log(user2.description())






function User(user,mail){

    this.username = user;
    this.email=mail;


}
User.prototype.description=function(){ 
        return `my name is ${this.username}`
    
}
let user1 = new User('bharat','bharatsingh2@gmail.com');
let user2 = new User('ram','ram@gmail.com');
console.log(user1)
console.log(user1.description())
console.log(user2)
console.log(user2.description())
