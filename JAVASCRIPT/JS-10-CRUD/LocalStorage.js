var users = JSON.parse(localStorage.getItem(users));
var index;
if (users == null) {
  users = [];
}

// var users = [];

function getValues() {
  var person = {
    email: "",
    password: "",
  };
  // document.getElementById("myTbody").innerHTML = "";
  //   person.email = document.getElementById("email").value;
  //   person.password = document.getElementById("password").value;

  for (a in person) {
    person[a] = document.getElementById(a).value;
  }

  users.push(person);
  localStorage.setItem("users", JSON.stringify(users));
  displayDta(users);
  clearForm(person);

  console.log(users);
}

function displayDta(users) {
  document.getElementById("myTbody").innerHTML = "";

  users.map(function (obj, i) {
    var myTr = document.createElement("tr");
    for (a in obj) {
      var myTd = document.createElement("td");
      myTd.innerHTML = obj[a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var delTd = document.createElement("td");
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    delTd.appendChild(delBtn);
    myTr.appendChild(delTd);
    document.getElementById("myTbody").appendChild(myTr);
  });
}
displayDta(users);

function editUser(i) {
  index = i;
  document.getElementById("addUser").style.display = "none";
  document.getElementById("updateUser").style.display = "block";
  var selectedUser = users[i];
  for (a in selectedUser) {
    document.getElementById(a).value = selectedUser[a];
  }
}

function udateUser() {
  var person = {
    email: "",
    password: "",
  };
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }
  users[index] = person;
  localStorage.setItem("users", JSON.stringify(users));
  displayDta(users);
  clearForm(person);
  document.getElementById("addUser").style.display = "block";
  document.getElementById("updateUser").style.display = "none";
}

function deleteUser(i) {
  users = users.filter((usr, index) => index !== i);
  localStorage.setItem("users", JSON.stringify(users));
  displayDta(users);
}
function clearForm(person) {
  for (a in person) {
    document.getElementById(a).value = "";
  }
}
