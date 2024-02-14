let secretNumber= 0;
let cont=0;
let surveysList=[];
let maxNumber=10;

function initialConditions(){
   assingTextElement('h1', 'Juego del numero secreto');
   assingTextElement('p', 'Digita un numero del 1 al 10');
   secretNumber=generateSecretNumber();
   cont=0;
}

function assingTextElement(element, text){
   let elementHtml = document.querySelector(element); //Selecciona la etiqueta dentro del metodo.
   elementHtml.innerHTML=text;
}

function userAttemp(){
   let userNumber= parseInt(document.getElementById('input_container').value);
   cont++;
   if(userNumber===secretNumber){
      assingTextElement('p',`Acertaste el numero en ${cont} ${(cont==1) ? 'intento' : 'intentos'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if(userNumber>secretNumber){
         assingTextElement('p','El numero secreto es menor');
      }else{
         assingTextElement('p','El numero secreto es mayor');
      }
      clean();
   }
}

function clean(){
   document.querySelector('#input_container').value='';
}

function generateSecretNumber(){
   let generateNumber=Math.floor(Math.random()*maxNumber)+1;
   console.log(surveysList);
   console.log(generateNumber);
   if(surveysList.length==maxNumber){
      assingTextElement('p','Ya se sortearon todos los numeros');
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if(surveysList.includes(generateNumber)){
         return generateSecretNumber();
      }else{
         surveysList.push(generateNumber);
         return generateNumber;
      }
   }
}

function newGame(){
   clean();
   initialConditions();
   document.getElementById('reiniciar').setAttribute('disabled','true');
}


initialConditions()