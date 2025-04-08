// Calculer un age et retourner des valeurs avec conditions

// Je récupère le contenu de mon form qui sera sous forme d'objet

const input = document.getElementById("inputAge");
const form = document.querySelector("#monForm");
const resultat = document.querySelector("#resultatAge");
const userValue = input.value;

let anneeMax = 2025;
let anneeMin = 1925;

input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
});

console.log(form);
console.log(input);
// Je récupère la valeur de l'utilisateur que je mets dans une variable

const calcAge = function (userAgeValue) {
    const userAge = 2025 - userAgeValue;
    const resultat = document.querySelector("#resultatAge");
    resultat.style.display = "none";

    if (userAge < 18) {
        resultat.classList.add("styleReponseMineur");
        resultat.style.display = "block";
        return (resultat.innerHTML = `Vous avez ${userAge} ans, vous êtes donc mineur.`);
    } else if (userAge >= 18) {
        resultat.classList.add("styleReponseMajeur");
        resultat.style.display = "block";
        return (resultat.innerHTML = `Vous avez ${userAge} ans, vous êtes donc majeur.`);
    }  else {
        resultat.style.display = "none";
    }
};
console.log(calcAge(1900));

form.addEventListener("submit", (e) => {
    const userValue = input.value;
    console.log(userValue);

    if (userValue > anneeMax || userValue < anneeMin) {
        e.preventDefault();
        resultat.classList.add("styleReponseAnneeIncorrecte");
        resultat.innerHTML = `Veuillez choisir une année de naissance comprise entre ${anneeMin} et ${anneeMax}.`;
    }
});
