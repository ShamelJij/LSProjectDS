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

    var new_data = document.getElementById('input').value;
    if(localStorage.getItem('data') == null){
        localStorage.getItem('data','[]');

    }

}
function view(){
}



