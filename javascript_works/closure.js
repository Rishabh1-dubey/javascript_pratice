function hello(x){
    const a= "varA";
    const b="varB";
    return function(){
        console.log(a,b,x);
    }

}
const ans_1= hello("arg");
ans_1()



// ------------------example2-------------------------------
function myFunction(power){
    return function (number){
        return number**number
    }
}

const square= myFunction(2);
const ans= square(3);

console.log(ans);
const cube= myFunction(3);
const ans2= cube(3);
console.log(ans2);


function a(){
    console.log(b);
}
var b= 10; 
a()