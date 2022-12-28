let marks = [];
if (localStorage.getItem("result") != null) {
  marks = JSON.parse(localStorage.getItem("result"));
}
if (sessionStorage.getItem("user") == null) {
  window.location.replace("../login.html");
}

let user = (document.getElementById("user").innerText =
  sessionStorage.getItem("user"));

function logout() {
  sessionStorage.clear("user");
  window.location.replace("../login.html");
}
//refactor function to clear text box
function refactor() {
     document.getElementById("name1").value = "";
     document.getElementById("name2").value = "";
     document.getElementById("name3").value = "";
    document.getElementById("sub1").value = "";
    document.getElementById("sub2").value = "";
    document.getElementById("sub3").value = "";
    document.getElementById("student").value = "";
}
//add marks
function add() {
    let sub1name = document.getElementById("name1").value;
    let sub2name = document.getElementById("name2").value;
    let sub3name = document.getElementById("name3").value;
    let marks1 = parseInt(document.getElementById("sub1").value);
    let marks2 = parseInt(document.getElementById("sub2").value);
    let marks3 = parseInt(document.getElementById("sub3").value);
    let rollno = parseInt(document.getElementById("student").value);

  if (sub1name != "" && sub2name != "" && sub3name != "" && marks1 != "" && marks2 != "" && marks3 != "" && rollno != "") {
    let mark = {};
      mark["rollno"] = rollno;
      mark["user"] = user;
      mark[sub1name] = marks1;
      mark[sub2name] = marks2;
      mark[sub3name] = marks3;
      mark["total"] = 300;
      mark["obtain"] = marks1 + marks2 + marks3;
      mark["per"] = marks1 + marks2 + (marks3 / 300) * 100;
      marks.push(mark);
      localStorage.setItem("result",JSON.stringify(marks));
      refactor();
      tableShow();
  } 
  else {
    alert("please enter value");
  }
}
//function to enter marks in table
function tableShow(){
  document.getElementById("tbody").innerHTML = ``;
  let result = marks.filter((per)=>{
    return per.user == user;
  });
  result.forEach(element => {
    document.getElementById("tbody").innerHTML += `<tr><td>${element.rollno}</td><td>${element.total}</td><td>${element.obtain}</td><td>${element.per}</td></tr>` 
  });
}
tableShow();
