// declear the persons arrs 
let persons = [];

//get data from local storage if previouly stored.
let storageData = localStorage.getItem("users");

if (storageData != null) {
  persons.push(JSON.parse(storageData));
}
//function to clear input

function refactor() {
  document.getElementById("name").value = "";
  document.getElementById("pass").value = "";
}

//function to validate input

function validator(person) {
  if (person.name == "" || person.pass == "") {
    alert("please enter values");
  } else if (person.name != "" && person.pass != "") {
    persons.push(person);
    let stringarr = JSON.stringify(persons);
    localStorage.setItem("users", stringarr);
  }
}
function register() {
  let person = {
    name: document.getElementById("name").value,
    pass: document.getElementById("pass").value,
  };
  validator(person);
  refactor();
  console.log(persons);
}
