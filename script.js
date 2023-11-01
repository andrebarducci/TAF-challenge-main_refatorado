/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 25000;
let time = 710;
let gender = "male";
let pushUps = 30;
let abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/



function verificaDistance (distance) {
  return distance >= 2400;
  
}

function verificaTime (time) {
  return time <= 720;
 
}

function verificaPushUps (pushUps) {
  return pushUps >= 30;
  
}

function verificaAbs (abs) {
  return abs >= 35;
  
}

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  function showMessage(passouNoTeste) {
    console.log("passou no teste!".toUpperCase());
  }
  
  showMessage();

  

  

  //Sua logica deve ser inserida aqui:
  

/*Se o genero for male, a corrida de 2,4 km deve ser realizada no tempo menor ou igual
720 segundos (12 minutos) e maior ou igual a 30 flexoes e maior ou igual a 35 abdominais.

*/
if (gender === 'male' && verificaDistance(distance) && verificaTime(time)&& verificaPushUps(pushUps)&& verificaAbs(abs)){
    
  

  }else if (gender === 'female' && verificaDistance(distance) && verificaTime(time)&& verificaPushUps(pushUps)&& verificaAbs(abs)){
    
     } else {
      return "Reprovado no TAF";
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

