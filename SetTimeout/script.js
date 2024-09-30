console.log("Rishabh");

// function Hello(){
// console.log("Ruko zara duney jii")
// }
// setTimeout(Hello,1000);

// console.log("Ajj khush to bhaut hoge tum");
//  setTimeout (()=>{
// console.log("Call ho rha haiiii")
//  },3000)

//  for(let i=0; i<=300; i++){
//     console.log("Printed the number from 1 to 100")
//  }
//  console.log("rishabh bot")

//  console.log("script starat")

//  const id= setTimeout (()=>{
// console.log("ma ek dum  last mainclick honga")
//  },0)

//  for ( let i=0; i<40; i++){
//     console.log("chall bhai tuent xlick ho jata huu")
//  }

//  console.log("kya bolta bhai");
//  clearTimeout(id); 
//  console.log("script end");


// Callback function

// function getTwonumber(number1, number2, onSuccess, onFailure) {
//    if (typeof number1 === "number" && typeof number2 === "number2") {
//       onSuccess(number1, number2);
//    }
//    else {
//       onFailure()
//    }
// }

// function Addtwoo(num1, num2) {
//    console.log(num1 + num2);
// }
// function onFail() {
//    console.log("please enter the wrong data")
//    console.log("data is not defined")
// }
// getTwonumber(4, 4, Addtwoo, onFail);


//simple call back function

// function myfunc(callback) {
//    ;
//    console.log("the first task is completed by the first onw");
//    callback()
// }

// function myfunc2() {
//    console.log("the task is completed by the task2 function");
// }

// myfunc(myfunc2);



//call back hell
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//    heading1.textContent = "heading1";
//    heading1.style.color = "violet";

//    setTimeout(() => {
//       heading2.textContent = "heading2";
//       heading2.style.color = "purple";
//       setTimeout(() => {
//          heading3.textContent = "heading3";
//          heading3.style.color = "red";
//          setTimeout(() => {
//             heading4.textContent = "heading4";
//             heading4.style.color = "pink";
//             setTimeout(()=>{
//                heading5.textContent="heading5";
//                heading5.style.color="green";
//                setTimeout(()=>{
//                   heading6.textContent="heading6";
//                   heading6.style.color="blue";
//                   setTimeout(()=>{
//                      heading7.textContent="hading7"
//                      heading7.style.color="brown";
//                   },1000)
//                },3000)
//             },2000)
//          }, 1000)
//       }, 2000)
//    }, 2000)
// }, 1000)

// setTimeout (()=>{
//    heading2.style.color="blue";
// },3000)



// function changeTime(element,text, color, time){
//    setTimeout(()=>{
// element.textContent=text;
// element.style.color=color;
//    },time);
// }
// changeTime(heading1,"one","red",1000)


//pyramid of doom


function changeTime(element, text, color, time, onSuccesscallback, onFailcallback) {
   setTimeout(() => {
      if (element) {
         element.textContent = text;
         element.style.color = color;
         if (onSuccesscallback) {
            onSuccesscallback();
         }

      }
      else {
         if (onFailcallback) {
            onFailcallback();
         }
      }
   }, time);
}
changeTime(heading1, "one", "green", 1000, () => {
   changeTime(heading2, "two", "green", 1000, () => {
      changeTime(heading3, "three", "green", 1000, () => {
         changeTime(heading4, "four", "green", 1000, () => {
            changeTime(heading5, "five", "green", 1000, () => {
               changeTime(heading6, "six", "green", 1000, () => {
                  changeTime(heading7, "seven", "green", 1000, () => {
                     
                  },() => { console.log("your data does not exist") })
               },() => { console.log("your data does not exist") })
            },() => { console.log("your data does not exist") })
         },() => { console.log("your data does not exist") })
      },() => { console.log("your data does not exist") })
   },() => { console.log("your data does not exist") })
},() => { console.log("your data does not exist") })










