/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 25000;
let time = 710;
let gender = "male";
let pushUps = 40;
let abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

function verificaMale () {
 
}

function verficaFemale () {
  
}

function verficaDistance () {
  
}

function verificaTime () {
 
}

function verificaPushUps () {
  
}

function verficaAbs () {
  
}

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  function showMessage(testTAF) {
    console.log("passou no teste!".toUpperCase());
  }
  
  showMessage();

  

  

  //Sua logica deve ser inserida aqui:
  

/*Se o genero for male, a corrida de 2,4 km deve ser realizada no tempo menor ou igual
720 segundos (12 minutos) e maior ou igual a 30 flexoes e maior ou igual a 35 abdominais.

*/
if (gender === 'male' && distance >= 2400 && time <= 720 && pushUps >= 30 && abs >= 35){
    passed = true;
  

  }else if (gender === 'female' && distance >= 2400 && time <= 840 && pushUps >= 20 && abs >= 30){
    passed = true;
  

   }

   /*
   Se nao se o genero for famale, a corrida de 2,4 km deve ser realizada no tempo menor
   ou igual a 840 segundos (14 minutos) e maior ou igual a 20 flexoes e maior ou igual a
   30 abdominais.
   */
      

  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}



//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;

