let firstName = "tanisha";
let lastName = "Wadibhasme";

let SayHi ={
    firstName : "Sahil",
    lastName : "Gulghane",
    greet: function(){
        return `SayHi to ${this.firstName} ${this.lastName}`;
    },

}
console.log(SayHi.greet());