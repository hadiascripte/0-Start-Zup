const input = document.querySelector("#userName");
let userValue = input.value;
const bnt = document.querySelector("btn");
const affichageNom = document.querySelector("#reponseName");
const affichageNom2 = document.querySelector("#reponseName2");
const affichageNom3 = document.querySelector("#reponseName3");
affichageNom.style.display = "none";
affichageNom2.style.display = "none";
affichageNom3.style.display = "none";
console.log(input);
console.log(userValue);
console.log(btn);
console.log(affichageNom);

btn.addEventListener("click", function (e) {
    // Fonction
    function nameFonction(userValue) {
        affichageNom.style.display = "block";
        userValue = input.value;
        return (affichageNom.innerHTML = `Bonjour ${userValue}`);
    }
    nameFonction();
    console.log(nameFonction());

    // Fonction fléchée
    const nameFonctionFlechee = (userValue) => {
        userValue = input.value;
        affichageNom2.style.display = "block";
        return (affichageNom2.innerHTML = `Bonjour ${userValue}`);
    };

    nameFonctionFlechee();
    console.log(nameFonctionFlechee());

    // Fonction anonyme

    const nameFonctionAno = (userValue) => {
        userValue = input.value;
        affichageNom3.style.display = "block";
        return (affichageNom3.innerHTML = `Bonjour ${userValue}`);
    };
    nameFonctionAno();
    console.log(nameFonctionAno());

    // nameFonction();
    // nameFonctionFlechee();
    // nameFonctionAno();
    //   console.log(nameFonction());
    //   console.log(nameFonctionFlechee());
    //   console.log(nameFonctionAno());
});





// Calculatrice simple

const inputNumber1 = document.querySelector("#userNumber1");
const inputNumber2 = document.querySelector("#userNumber2");
let inputNumberValue1 = inputNumber1.value;
let inputNumberValue2 = inputNumber2.value;
const bntNumber = document.querySelector("#btnCalcul");
const affichageCalcul = document.querySelector("#resultatCalcul");
affichageCalcul.style.display ="none";

console.log(inputNumber1);
console.log(inputNumber2);
console.log(inputNumberValue1);
console.log(inputNumberValue2);
console.log(bntNumber);

// A créer dans l'évènement
// rappeler la valeur entrée de l'utilisateur
// const operateur = l'opérateur voulu
// appendChild reponse

inputNumber1.addEventListener("input", function () {
    inputNumber1.value = inputNumber1.value.replace(/\D/g, "");
});
inputNumber2.addEventListener("input", function () {
    inputNumber2.value = inputNumber2.value.replace(/\D/g, "");
});

bntNumber.addEventListener("click", function () {
    function calculatrice(a, b) {
        inputNumberValue1 = inputNumber1.value;
        inputNumberValue2 = inputNumber2.value;
        console.log(inputNumber1);
        console.log(inputNumber2);
        a = inputNumberValue1;
        b = inputNumberValue2;
        const operateur = a * b;
        affichageCalcul.style.display ="block";
        return (affichageCalcul.innerHTML = `${a} x ${b} = ${operateur}`);
    }
    console.log(inputNumberValue1);
    console.log(inputNumberValue2);
    console.log(calculatrice(3, 2));
});
