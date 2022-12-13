let persons = [];

//get data from local storage if previouly stored.
let storageData = localStorage.getItem("users");

if (storageData != null) {
  persons.push(JSON.parse(storageData));
}
    //function to clear input

    function refactor() {
         document.getElementById('name').value = "";
         document.getElementById('pass').value = "";
    }
 
    //function to validate input

    function validator(person) {
        if ( person.name == "" || person.pass == "") {
            alert("please enter values");
        }
        else if(person.name != "" || person.pass != ""){
            persons.forEach(element => {
                element.forEach(element1 => {
                    if (element1.name == person.name && element1.pass == person.pass) {
                        window.location.replace('pages/marks.html');
                    }
                });
            });
        }
    }
    function login() {
        let person = {
            name: document.getElementById('name').value,
            pass: document.getElementById('pass').value
        }
        validator(person); 
        refactor();
    }