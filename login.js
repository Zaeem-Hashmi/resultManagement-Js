let persons = [];

//get data from local storage if previouly stored.
let storageData = localStorage.getItem("users");

if (storageData != null) {
  persons = JSON.parse(storageData);
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
           let result = persons.filter((per)=>{
            return per.name == person.name && per.pass == person.pass
           });
           if (result.length > 0) {
             alert("user found");
             sessionStorage.setItem('user',result[0].name);
             if (result[0].name != "admin") {
                 window.location.replace('pages/marks.html');
             }
             if(result[0].name == "admin"){
                window.location.replace("adminPages/dashboard.html");
             }
           }
           else{
            alert("user not found")
           }
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