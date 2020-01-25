
function User(name, surname) {
	this.name = name;
	this.surname = surname;
}

let age = document.getElementById('age');

age.value = new User


function showUser(surname, name) {
	// console.log(this);
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();

