// // Sélection d'éléments dans le DOM

// //Sélectionner le premier élément (par son ID ou sa class) 
// // Il ne selectionnera que le premier élément trouvé dans le DOM

// document.querySelector("h1");
// console.log(document.querySelector("h1"));

// document.querySelector(".red");
// console.log(document.querySelector(".red"));

// document.querySelector("#deuxieme");
// console.log(document.querySelector("#deuxieme"));

// const li = document.querySelector("li");
// console.log(li);

// //Sélectionner tous les éléments (par son ID ou sa class)
// // Il selectionnera tous les éléments trouvés dans le DOM
// // Il renvoie une NodeList

// const lii = document.querySelectorAll("li");
// console.log(lii);

// // Pour modifier la couleur d'un élément selectionné
// // On peut utiliser la propriété style.color et lui assigner une couleur
// li.style.color = "red";


// //Attributs
// //On peut ajouter un attribut à un élément en utilisant la méthode setAttribute

// li.setAttribute("id", "monId");
// li.setAttribute("class", "maClasse");

// // li1.setAttribute("hidden","hidden");

//  // On peut cacher un élément en lui ajoutant l'attribut hidden


// // Afficher l'interieur d'un élément

// // On peut afficher l'interieur d'un élément en utilisant la propriété innerHTML ou innerText

// li.innerHTML = "Je suis un élément fort en innerHTML"; // On peut ajouter du HTML à l'interieur d'un élément
// li.innerText = "Je suis un élément en innerText"; // On peut ajouter du texte à l'interieur d'un élément






// // Ajouter un élément dans le DOM
// // On peut ajouter un élément dans le DOM en utilisant la méthode appendChild.
// // On peut créer un élément en utilisant la méthode createElement
// // On peut créer un élément li et lui ajouter du texte

// const li1 = document.createElement("li"); // On crée un élément li
// li1.innerText = "Je suis un NOUVEL élément li"; // On lui ajoute du texte
// document.querySelector("ul").appendChild(li1); // On ajoute l'élément li1 à la fin de la liste ul


// //  EVENTS (Ecouteurs d'événements)
// // On peut ajouter un écouteur d'événement à un élément en utilisant la méthode addEventListener
// // On peut écouter un événement comme le clic, le survol, le double clic, etc.

// // On peut écouter un événement sur un élément en utilisant la méthode addEventListener
// let button = document.querySelector("button"); // On sélectionne le bouton
// button.addEventListener("click", function() {
//     alert("Vous avez cliqué sur le bouton !"); // On affiche une alerte lorsque le bouton est cliqué
// })



//Ajouter un evenement au clic sur un bouton

let compteur = 0; // On initialise un compteur à 0
let btn = document.querySelector("#btn"); // On sélectionne le bouton
let affichage = document.querySelector("#compteur"); // On sélectionne l'élément qui va afficher le compteur


btn.addEventListener("click", function() { // On ajoute un écouteur d'événement au clic sur le bouton
    compteur++; // On incrémente le compteur de 1
    affichage.innerHTML = "Nombre de clics : " + compteur; // On affiche le compteur dans l'élément sélectionné
})