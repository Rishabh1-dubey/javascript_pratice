// default paramerter
// function solve(){
//     return 123;
// }
// function rishabvh(fname,lname){
//     console.log("this  name is ", fname,lname)
    
// }
// rishabvh("rishabh","dubey")

// Object Clonning
// let obj={
//     name :"Rishabh",
//     class:"Msc It",
//     age:12
// }
 
// // let dist = {...obj};
// let dist = Object.assign({},obj)
// obj.name="Rishi"
//  console.log("obj",obj)

//  console.log("dist",dist)
 
// try{
    
//   console.log(" try cathc block start here")
//   console.log(x)
//   console.log("try catch block ende here")
// }
// catch(e){
//     // console.log("this is error wrote by Rishabh ",e)
//     throw new Error ("bhai phle declare kro phir uske baad print krna")
// }
// finally{
//     console.log(" Finally this the ending by me :this is not acceptable")
// }
//      try{
// console.log("this is begingin of try block")
// console.log(x)
//      }
//      catch(err){
//  throw new Error("Bhai phle decalre krna phir uske baad print krna kya yrr !!!!")
//      }
//      finally{
// console.log("finally try catch block end here !!")
//      }

   //   let error=100
   //   if(error==100){
   //      throw new Error('Invalid JSON')
   //   }else{
   //  console.log ("Valid JSON")
   //   }

   function about(hobby, lazy) {
      console.log(this.name, " ", this.age, lazy, hobby);
    }
    const user1 = {
      name: "Rishabh",
      age: 12,
    
    }
    const user2 = {
      name: "Rishabh1",
      age: 23,
    }
    
    about.bind(user2, ["risahbhhk", "rihsihfsd"]);