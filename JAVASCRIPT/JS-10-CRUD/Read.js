var person = {
  email: "",
  password: "",
};

var users = [];

function getValues() {
  document.getElementById("myTbody").innerHTML = "";
  //   person.email = document.getElementById("email").value;
  //   person.password = document.getElementById("password").value;

  for (a in person) {
    person[a] = document.getElementById(a).value;
  }

  users.push(person);
  displayDta(users);
  clearForm(person);

  console.log(users);
}

function displayDta(users) {
  users.map(function (obj) {
    var myTr = document.createElement("tr");
    for (a in obj) {
      var myTd = document.createElement("td");
      myTd.innerHTML = obj[a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var delTd = document.createElement("td");
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delTd.appendChild(delBtn);
    myTr.appendChild(delTd);
    document.getElementById("myTbody").appendChild(myTr);
  });
}
function clearForm(person) {
  for (a in person) {
    document.getElementById(a).value = "";
  }
}
