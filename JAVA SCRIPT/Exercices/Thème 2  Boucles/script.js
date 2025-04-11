const input = document.querySelector("#userNumber");
const btn1 = document.querySelector("#sbtPair");
const resultat1 = document.querySelector("#resultatPair");

let inputValue = input.value;
let inputValueInt = 0;
let tableau1 = 0;

console.log(tableau1);

console.log(input);
console.log(btn1);
console.log(resultat1);
console.log(inputValueInt);

input.addEventListener("input", () => {
    resultat1.style.display = "none";
    input.value = input.value.replace(/\D/g, "").slice(0, 6);
    inputValue = input.value;
    inputValueInt = parseInt(inputValue);

    
    let tableau1 = [];
    console.log(tableau1);
    btn1.addEventListener("click", function (e) {
        inputValueInt = parseInt(inputValue);
        // e.preventDefault()
        tableau1.forEach((inputValue, index) => {
            if (inputValue[index] % 2 === 0) {
            }
            console.log(tableau1);

        });
    });
});

// inputValueInt = parseInt(inputValue);
// let tableau = [];
// tableau.push(toString(inputValueInt));
// console.log(tableau);
// btn1.addEventListener("click", function (e) {
//     console.log(inputValue.length);

//     for (let i = 0; i < inputValue.length; i++) {
//         inputValueInt = parseInt(inputValue);

//         // if (parseInt(inputValue[i]) % 2 != 0) {
//         //     resultat1.innerHTML = `Dans le nombre ${inputValueInt} le chiffre ${i} est pair`;
//         //     resultat1.style.display = "block";
//         //     resultat1.classList.add("styleResultatPair");
//         // } else {
//         //     resultat1.innerHTML = `Dans le nombre ${inputValueInt} le chiffre ${i} est est impair`;
//         //     resultat1.style.display = "block";
//         //     resultat1.classList.add("styleResultatPair");
//         // }
//     }
