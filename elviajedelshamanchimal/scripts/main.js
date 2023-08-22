/*const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";*/

/*let miImage = document.querySelector("img");

miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/chaman.jpeg") {
    miImage.setAttribute("src", "images/chaman2.jpeg");
  } else {
    miImage.setAttribute("src", "images/chaman.jpeg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
  }
}


miBoton.onclick = function () {
  estableceNombreUsuario();
};*/

 // Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/chaman.jpeg') {
    myImage.setAttribute ('src','images/chaman2.jpeg');
  } else {
    myImage.setAttribute ('src','images/chaman.jpeg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}