//prototype

let todo = {
    title : 'buy flowers',
    desc: function(){
        return `your task is to ${this.title}`
    }
};
console.log(todo.title);
// console.log(todo.desc());
// console.log(todo.sachin);
// console.log(todo.lokesh());
console.log(todo.toString()); //becUSE IT IS PROTOTYPE