import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const userInput = document.querySelector('textarea[name = "user-input"]');
function textAnalyzer(){
  document.querySelectorAll('li')[0].innerHTML =`Palabras: ${analyzer.getWordCount(userInput.value)}`;
  document.querySelectorAll('li')[1].innerHTML =`Cantidad: ${analyzer.getCharacterCount(userInput.value)}`;
  document.querySelectorAll('li')[2].innerHTML =`Caracteres sin espacio: ${analyzer.getCharacterCountExcludingSpaces(userInput.value)}`;
  document.querySelectorAll('li')[3].innerHTML =`Promedio longitud: ${analyzer.getAverageWordLength(userInput.value)}`;
  document.querySelectorAll('li')[4].innerHTML =`Números: ${analyzer.getNumberCount(userInput.value)}`;
  document.querySelectorAll('li')[5].innerHTML =`Suma números: ${analyzer.getNumberSum(userInput.value)}`;
}
userInput.addEventListener('keyup', textAnalyzer);

const resetButton = document.querySelector('button');
function reset(){
  userInput.value = '';
  document.querySelectorAll('li')[0].innerHTML =`Palabras: 0`;
  document.querySelectorAll('li')[1].innerHTML =`Cantidad: 0`;
  document.querySelectorAll('li')[2].innerHTML =`Caracteres sin espacio: 0`;
  document.querySelectorAll('li')[3].innerHTML =`Promedio longitud: 0`;
  document.querySelectorAll('li')[4].innerHTML =`Números: 0`;
  document.querySelectorAll('li')[5].innerHTML =`Suma números: 0`;
}
resetButton.addEventListener('click', reset);