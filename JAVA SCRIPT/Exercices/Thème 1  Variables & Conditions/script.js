// Calculer un age et retourner des valeurs avec conditions

// Je récupère le contenu de mon form qui sera sous forme d'objet

const form = document.querySelector("#monForm1");
const input = document.querySelector("#inputAge");
// const userValue = form.userValue.value;
const resultat = document.querySelector("#resultatAge");
const btn = form.querySelector("#envoie");
btn.disabled = true;
let inputInt;
let anneeMax = 2025;
let anneeMin = 1925;

console.log(form);
console.log(input);
// console.log(userValue);
console.log(btn);

input.addEventListener("input", function (e) {

    input.value = input.value.replace(/\D/g, "").slice(0, 4);
    
    // if (e.target.value.length === 3){
    //     resultat.removeClassList;
    // } 
    if (e.target.value.length === 4) {
        const inputValueLimite = e.target.value.replace(/\D/g, "").slice(0, 4);
        inputInt = parseInt(inputValueLimite);
        const age = 2025 - inputInt;
        btn.disabled = false;
        if (inputInt > anneeMax) {
            resultat.classList.add("styleReponseAnneeIncorrecteMax");
            resultat.innerHTML = `Veuillez choisir une année de naissance plus petite que ${anneeMax}.`;
            btn.disabled = true;
        } else if (inputInt < anneeMin) {
            resultat.classList.add("styleReponseAnneeIncorrecteMin");
            resultat.innerHTML = `Veuillez choisir une année de naissance plus grande que ${anneeMin}.`;
            btn.disabled = true;
        }

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (age < 18) {
                resultat.classList.add("styleReponseMineur");
                return (resultat.innerHTML = `Vous avez ${age} ans vous êtes donc mineur`);
            } else if (age >= 18) {
                resultat.classList.add("styleReponseMajeur");
                return (resultat.innerHTML = `Vous avez ${age} ans vous êtes donc majeur`);
            } else {
                resultat.style.display = "none";
            }
        });
    }
});
