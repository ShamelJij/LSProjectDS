//JavaScript for LSProject
let myObj = {
    name: "dominic",
    age: 32
};
let myObj_serialized= JSON.stringify(myObj);
console.log(myObj_serialized);
localStorage.setItem("myObj", myObj);
console.log(localStorage);
let myObj_deserialized = localStorage.getItem("myObj");
console.log(myObj_deserialized);
function save(){
    if(localStorage)

}
function view(){

}



