
let obj = {
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
console.log(obj.evs);
console.log(obj.total());
console.log(obj.bulao());