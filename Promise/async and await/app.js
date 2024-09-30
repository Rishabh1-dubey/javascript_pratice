// async function greet(){
//     throw "the error will come"
//     return "hwello world"
// }
// greet () .then((result)=>{
//     console.log("Promise is Accepted and the result will be come");
//     console.log("The result will be comee:" ,result);
// }).catch((err)=>{
//     console.log("the result will not be comw ")
//     console.log("because it is thrown an error :", err)
// })


//  -----------------------------------await-------------------------------------------------

h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!")
        },delay);
    });
}
async function demo(){
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green" ,1000);
    await changeColor("yellow" ,1000);
}
