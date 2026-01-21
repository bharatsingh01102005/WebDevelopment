

let obj1 = {
    evs: 90,
    CN: 100,
    web : 90,
    math :10,
    total : function(){  //method
        return(90+100+90+10);
    },
    bulao : function(){
        return("sam ko bualo")
    }

}
//using this keyword

let obj2 = {
    name :'sam',
    evs: 90,
    CN: 100,
    web : 90,
    math :10,
    total : function(){  //method
        return(this.evs+this.CN+this.math+this.web);
    },
    bulao : function(){
        return(`${this.name} ko bualo`)
    }

}
console.log(obj2.total())
console.log(obj2.bulao())

