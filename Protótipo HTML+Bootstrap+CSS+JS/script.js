//=======  MENSAGEM =========================================

//frases que serão mostradas
const arrayText = [
    "Eu sou Rafael Soares de Paula Filho!",
];

//tempo que leva para escrever
const writeTime = 100;

//tempo que leva para apagar
const removeTime = 1000;

//pega o indice do array
let indexSentence = 0;
//poga o incice do character
let indexChar = 0;

const element = document.querySelector("#mensagem");
console.log("TCL: element", element)

function writeText() {
    if(indexChar <= arrayText[indexSentence].length) {
        element.textContent = arrayText[indexSentence].substring(0,indexChar);
        indexChar++;
        setTimeout(writeText, writeTime)
    } else {
        setTimeout(removeText,removeTime)
    }
}

function removeText() {
    if(indexChar >= 0){
        element.textContent = arrayText[indexSentence].substring(0, indexChar)
        indexChar--;
        setTimeout(removeText,writeTime);
    }else{
        indexSentence++
        if(indexSentence >= arrayText.length){
            indexSentence = 0;
        }
        setTimeout(writeText,removeText);
    }
}

writeText();


//darkmode

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})