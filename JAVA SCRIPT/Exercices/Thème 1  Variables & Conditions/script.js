// Calculer un age et retourner des valeurs avec conditions

// Je récupère le contenu de mon form qui sera sous forme d'objet

const input = document.querySelector("#inputAge");
const form = document.querySelector("#monForm1");
const resultat = document.querySelector("#resultatAge");
const userValue = form.userValue.value;

let anneeMax = 2025;
let anneeMin = 1925;
// Je limite les données aux chiffres seulement et à 4 chiffres
input.addEventListener("input", () => {
    resultat.style.display = "none";
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
});

console.log(input);
console.log(userValue);

// Je crée une fonction qui permet de calculer l'age et de renvoyer s'il est majeur ou mineur

const calcAge = function (userValue) {
    const userAge = 2025 - userValue;
        console.log(userValue);

    // Je récupère mon éléménts à qui je vais injecter du texte qui sera mis en display "none".
    const resultat = document.querySelector("#resultatAge");
    resultat.style.display = "none";
    // Je mets en place mes conditions
    if (userAge < 18) {
        resultat.classList.add("styleReponseMineur");
        resultat.style.display = "block";
        return (resultat.innerHTML = `Vous avez ${userAge} ans, vous êtes donc mineur.`);
    } else if (userAge >= 18) {
        resultat.classList.add("styleReponseMajeur");
        resultat.style.display = "block";
        return (resultat.innerHTML = `Vous avez ${userAge} ans, vous êtes donc majeur.`);
    } else {
        resultat.style.display = "none";
    }
};
// Je bloque la possibilité d'envoyer le formulaire en lui mettant des conditions

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userValue);
    if (userValue > anneeMax) {
        resultat.classList.add("styleReponseAnneeIncorrecteMax");
        resultat.innerHTML = `Veuillez choisir une année de naissance plus petite que ${anneeMax}.`;
    } else if (userValue < anneeMin) {
        resultat.classList.add("styleReponseAnneeIncorrecte");
        resultat.innerHTML = `Veuillez choisir une année de naissance plus grande que ${anneeMin}.`;
    }
});
console.log(calcAge(1987));

//// CONVERSION DE TEMPERATURE

const inputDegre = document.querySelector("#degre");
const btnEnvoyer = document.querySelector("#envoietemperature");
const userDegre = form.degre.value;
const calcDegre = (inputDegre - 32)*5/1.8;

console.log(userDegre);
console.log(inputDegre);
console.log(btnEnvoyer);
console.log(calcDegre);


// 


