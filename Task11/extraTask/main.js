let age = document.getElementById('age');

function User(name, surname) {
	this.name = name;
	this.surname = surname;
}

User.prototype.value = age.value;

let john = new User('Smith','Fedor');

function showUser(surname, name) {
	alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
	console.log('Пользователь ' + this.name + ' его возраст ' + this.value + ' лет');
}
showUser.call(john);
