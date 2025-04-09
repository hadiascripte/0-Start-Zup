const form = document.querySelector("form");
const input = document.querySelector("#userNumber");
const userNumber = form.userNumber.value;
const btn= document.querySelector("#sbtNumber")
const resultat =document.querySelector("#resultat")
chiffreNombre=

console.log(form);
console.log(input);
console.log(userNumber);
console.log(btn);
console.log(resultat);

input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 5);
});

btn.addEventListener("submit")