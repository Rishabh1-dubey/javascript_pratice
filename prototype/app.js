function createUser(firstName,lastName,email,address){
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.address=address;
    return user
}
createUser.prototype.about= function(){
    return`${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18=function(){
    return this.age>=18;
}
createUser.prototype.sing=function(){
    return "radhe radhe redhe"
}

const user1=createUser('Rishabh','dubey','rishabhdney@fmail.com');
console.log(user1);
console.log(user1.sing());

//New keyword
//  new keyword create empty object this={}
