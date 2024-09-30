// function personINfor(){
//     console.log(`my name is ${this.name} and my age is ${this.age}`);
// }

// const person1= {
//     name:"rishabh",
//     age:23,
//     about :personINfor
// }
// const person2={
//     name:"rajat",
//     age:23,
//     about:personINfor
// }
// person1.about();
// person2.about();

// //call method pratice

// function about(hobby,favMusic){
//     console.log(this.firstname, this.age,hobby,favMusic);
// }
// const user1={
//     firstname:"rishabh",
//     age:12
// }
// about.call(user1,"guitar","ramrtam");

// //apply
// about.apply(user1,["guitar","ramrtam"]);

// //bind
// const ram= about.bind(user1,"guitar","hdfhsd");
// ram();

//clsure practice
function myFunction(power) {
  return function (number) {
    return number ** power;
  }
}
const square = myFunction(2);
const ans = square(2);
console.log(ans);

const cube= myFunction(3);
const ans1 = cube(3);
console.log(ans1)