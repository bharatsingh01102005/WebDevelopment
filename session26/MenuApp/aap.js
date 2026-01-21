

let menu = ['palakpanner','chole chawal','chiken dhatura','paneer buuter','manchurian',
    'chickenbiryani','pizza','eggburzi','soda'];

    function isVeg(food){
        if((food.toLowerCase().indexOf('chickenbiryani') !== -1)||(food.toLowerCase().indexOf('egg')!==-1)||(food.toLowerCase().indexOf('chiken dhatura')!==-1)){
            return false;
        }
        return true

    }
let vegMenu = menu.filter(isVeg);
console.log(menu)
console.log(vegMenu);