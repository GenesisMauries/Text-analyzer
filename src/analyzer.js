const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim() === "" ? 0 : text.split(" ").length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim() === "" ? 0 : text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    for (let i = 0; i < text.length; i += 1) {
      const textCode = text.charCodeAt(i);
      if (
        (textCode >= 65 && textCode <= 90) ||
        (textCode >= 97 && textCode <= 122) ||
        (textCode >= 48 && textCode <= 57)
      ) {
        sum++;
      }
    }
    return sum;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return (sum / words.length).toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let numberCount = 0;
    for (let i = 0; i < words.length; i++) {
      if (Number(words[i])) {
        numberCount++;
      }
    }
    return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let numberSum = 0;
    for (let i = 0; i < words.length; i++) {
      if (Number(words[i])) {
        // console.log(char)
        numberSum += parseFloat(words[i]);
      }
    }

    return numberSum;
  },
};

export default analyzer;
