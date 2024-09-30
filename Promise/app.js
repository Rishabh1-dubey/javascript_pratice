//promise

const bucket=['coffe','chips','vegetables','salt','rice'];
const firedRice = new Promise((resolve,reject)=>{
    if (bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
        resolve( "fires rice");
        }else{
            reject("could'nt do it")
        }
})


firedRice.then((myfiredRice)=>{
console.log("lets eat",myfiredRice);
}).catch((error)=>{console.log(error)});



// promises
function savetodb(data){
    return new Promise((resolve,reject)=>{
        let interSpeed=Math.floor(Math.random()*10)+1;
        if(interSpeed>4){
            resolve("success: data is going successfully");
        }else{
            reject("weak connection and poor connection");
        }
        });

};
// savetodb("rishabh").then(()=>{
//     console.log("promise was resolved")
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })


// promise chaining
savetodb("rishabh")
.then((result)=>{
    console.log("data resolved");
    console.log("data resolved is result", result);
    return savetodb("data 2");
})
.then((result)=>{
    console.log("data 2: data 2 resolved");
    console.log("data 2: data 2 resolved",result);
    return savetodb("data 3");
}).then(()=>{
    console.log("data 3: data 3 resolved");
})
.catch((error)=>{
    console.log("data rejected");
    console.log("data rejected was",error);
});

// console.log(x)
// var x=10;
// console.log(u);



