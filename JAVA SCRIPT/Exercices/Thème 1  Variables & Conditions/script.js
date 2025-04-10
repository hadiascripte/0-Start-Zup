// Caler un age et retourner des valeurs avec conditions

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

// Je mets en place les paramètres que je veux dans mon input. Ici je demande à ne permettre que l'entrée de chiffres et une limite de 0 à 4 chiffres.

input.addEventListener("input", function (e) {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);

    if (e.target.value.length === 4) {
        resultat.classList.remove(
            "styleReponseAnneeIncorrecteMax",
            "styleReponseAnneeIncorrecteMin",
            "styleReponseMineur",
            "styleReponseMajeur"
        );
        resultat.textContent = "";

        const inputValueLimite = e.target.value.replace(/\D/g, "").slice(0, 4);
        inputInt = parseInt(inputValueLimite);
        console.log(inputValueLimite);
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
            resultat.classList.remove(
                "styleReponseAnneeIncorrecteMax",
                "styleReponseAnneeIncorrecteMin",
                "styleReponseMineur",
                "styleReponseMajeur"
            );
            if (age < 18) {
                resultat.classList.add("styleReponseMineur");
                resultat.innerHTML = `Vous avez ${age} ans vous êtes donc mineur`;
            } else if (age >= 18) {
                resultat.classList.add("styleReponseMajeur");
                resultat.innerHTML = `Vous avez ${age} ans vous êtes donc majeur`;
            } else {
                // resultat.style.display = "none";
            }
        });
    }
});

// CONVERTISSEUR DE TEMPERATURE

const form2 = document.querySelector("#monForm2");
const inputDegre = form2.querySelector("#degre");
const btnDegre = document.querySelector("#envoietemperature");
const resultatDegre = document.querySelector("#resultatDegre");
let inputDegreInt;
// const calcDegre = (inputDegreInt * 9) / 5 + 32;

console.log(form2);
console.log(inputDegre);
console.log(btnDegre);
// console.log(calcDegre);

inputDegre.addEventListener("input", function (e) {
    resultatDegre.classList.remove(
        "resultatAmbiant",
        "resultatChaud",
        "resultatFroid",
        "resultatDepart"
    );
    let inputDegreValue = (inputDegre.value = e.target.value
        .replace(/\D/g, "")
        .slice(0, 3));
    inputDegreValue = parseInt(inputDegreValue);
    let degreConvert = (inputDegreValue * 9) / 5 + 32;
    resultatDegre.style.display = "none";

    console.log(inputDegreValue);
    console.log(degreConvert);

    btnDegre.addEventListener("click", function (e) {
        e.preventDefault();
        resultatDegre.classList.remove(
            "resultatAmbiant",
            "resultatChaud",
            "resultatFroid",
            "resultatDepart"
        );
        if (inputDegreValue > 0 && inputDegreValue <= 18) {
            resultatDegre.style.display = "block";
            resultatDegre.classList.add("resultatFroid");
            resultatDegre.innerHTML = `Une température de ${inputDegreValue}°C équivaut à ${degreConvert} °F. Il fait donc froid `;
        } else if (inputDegreValue > 18 && inputDegreValue < 25) {
            resultatDegre.style.display = "block";
            resultatDegre.classList.add("resultatAmbiant");
            resultatDegre.innerHTML = `Une température de ${inputDegreValue}°C équivaut à ${degreConvert} °F. Le temps est donc ambiant `;
        } else if (inputDegreValue > 25) {
            resultatDegre.style.display = "block";
            resultatDegre.classList.add("resultatChaud");
            resultatDegre.innerHTML = `Une température de ${inputDegreValue}°C équivaut à ${degreConvert} °F. Il fait donc TRES chaud !!! `;
        } else {
            resultatDegre.style.display = "none";
        }

        console.log(inputDegreValue);
        console.log(degreConvert);
        console.log(resultatDegre);
    });
});
