const input = document.querySelector("#userNumber");
const btn1 = document.querySelector("#sbtPair");
const resultat1 = document.querySelector("#resultatPair");

let inputValue = input.value;
let tableau1;

input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
});
btn1.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = input.value;
    tableau1 = inputValue;
    tableau1 = Array.from(inputValue, Number);
    resultat1.innerHTML = `Dans <strong>${inputValue}</strong> le chiffre : <br> `;

    for (let i = 0; i < tableau1.length; i++) {
        const element = tableau1[i];
        console.log();

        if (element % 2 === 0) {
            resultat1.style.display = "block";
            resultat1.classList.add("styleResultatPair");
            resultat1.innerHTML += `<strong>${element}</strong> est un chiffre <strong>pair</strong>.<br>`;
        } else {
            resultat1.style.display = "block";
            resultat1.classList.add("styleResultatPair");
            resultat1.innerHTML += `<strong>${element}</strong> est un chiffre <strong>impair.</strong><br>`;
        }
    }
});

// Table de multiplication

const inputMulti = document.querySelector("#userNumberTable");
let inputMultiValue = inputMulti.value;
const btn2 = document.querySelector("#sbtTable");
const resultat2 = document.querySelector("#resultatTable");

console.log(inputMulti);
console.log(inputMultiValue);
console.log(btn2);
console.log(resultat2);

inputMulti.addEventListener("input", () => {
    inputMulti.value = inputMulti.value.replace(/\D/g, "");
});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    let inputMultiValue = inputMulti.value;
    resultat2.classList.add("styleResultatTable");
    resultat2.innerHTML = `Voic le résultat de la table de <strong>${inputMultiValue} </strong>: <br> <br>`;
    i = 0;
    while (i <= 10) {
        let total = inputMultiValue * i;
        resultat2.innerHTML += `${inputMultiValue} x ${i} = <strong>${total}</strong> <br>`;
        i++;

        console.log(total);
        console.log(inputMultiValue);
        console.log();
    }
});
