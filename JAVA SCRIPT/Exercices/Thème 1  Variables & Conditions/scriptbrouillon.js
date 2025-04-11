// Je limite les données aux chiffres seulement et à 4 chiffres

input.addEventListener("input", () => {
      resultat.style.display = "none";
      input.value = input.value.replace(/\D/g, "").slice(0, 4);
  });
  
  function calcAge (userValue) {
      const age = 2025 - userValue;
      if (age < 18) {
          resultat.classList.add("styleReponseMineur");
          return (resultat.innerHTML = `Vous avez ${age} ans vous êtes donc mineur`);
      } else if (age >= 18) {
          resultat.classList.add("styleReponseMajeur");
          return (resultat.innerHTML = `Vous avez ${age} ans vous êtes donc majeur`);
      } else {
          resultat.style.display = "none";
      }
  }
  calcAge(userValue);
  console.log(calcAge());
  
  // btn.addEventListener("click", () => {
  //     // parseInt(userValue);
  //     console.log(userValue);
  //     if (userValue > anneeMax) {
  //         btn.disabled = false;
  //         resultat.classList.add("styleReponseAnneeIncorrecteMax");
  //         resultat.innerHTML = `Veuillez choisir une année de naissance plus petite que ${anneeMax}.`;
  //     } else if (userValue < anneeMin) {
  //         btn.disabled = false;
  //         resultat.classList.add("styleReponseAnneeIncorrecte");
  //         resultat.innerHTML = `Veuillez choisir une année de naissance plus grande que ${anneeMin}.`;
  //     } else {
  //         btn.disabled = false;
  //     }
  // });
  
  
  //
  // // Je bloque la possibilité d'envoyer le formulaire en lui mettant des conditions
  
  //     if (userValue > anneeMax) {
  //         resultat.classList.add("styleReponseAnneeIncorrecteMax");
  //         resultat.innerHTML = `Veuillez choisir une année de naissance plus petite que ${anneeMax}.`;
  //     } else if (userValue < anneeMin) {
  //         resultat.classList.add("styleReponseAnneeIncorrecte");
  //         resultat.innerHTML = `Veuillez choisir une année de naissance plus grande que ${anneeMin}.`;
  //     }
  //     console.log(calcAge(1987));
  //
  
  //// CONVERSION DE TEMPERATURE
  
  // const inputDegre = document.querySelector("#degre");
  // const btnEnvoyer = document.querySelector("#envoietemperature");
  
  // const calcDegre = (inputDegre - 32)*5
  // console.log(inputDegre);
  // console.log(btnEnvoyer);
  
  //
  