const mymodule=require('./addmodule')
var x=12;
var y=34;
var z=mymodule.addNum(x,y);
var a=mymodule.subNum(x,y);
var b=mymodule.mulNum(x,y);
var c=mymodule.divNum(x,y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);