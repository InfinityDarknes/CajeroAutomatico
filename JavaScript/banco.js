var nombre = sessionStorage.getItem("Nombre");
var balance = sessionStorage.getItem("Balance");

document.getElementById("username").innerHTML = nombre;
document.getElementById("balance").innerHTML = balance