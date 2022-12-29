if (sessionStorage.getItem('user') == null) {
      window.location.replace('../login.html')
}
let user = document.getElementById('user').innerText = sessionStorage.getItem('user');

function logout() {
    sessionStorage.clear('user');
    window.location.replace('../login.html')
}

// declear the persons arrs
let persons = [];

//get data from local storage if previouly stored.
let storageData = localStorage.getItem("users");

if (storageData != null) {
  persons = JSON.parse(storageData);
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
  } 
  else if (person.name != "" && person.pass != "") {
       let result = persons.filter((per) => {
            return per.name == person.name || per.pass == person.pass;
       });
    if (result.length > 0) {
      alert("user already exist");
    } else {
      persons.push(person);
      let stringarr = JSON.stringify(persons);
      localStorage.setItem("users", stringarr);
    }
  }
}
function create() {
  let person = {
    name: document.getElementById("name").value,
    pass: document.getElementById("pass").value,
  };
  validator(person);
  refactor();
}
