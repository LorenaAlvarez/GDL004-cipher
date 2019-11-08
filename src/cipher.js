window.cipher = {
  encode: function (offset, string) {
    string = string.toUpperCase(); // mayúsculas
    let stringCifrado = ''; // string para almacenar todas las letras cifradas
    for (let i = 0; i < string.length; i++) {
        // Si el caracter no es un espacio entonces se hace el cifrado
        // fórmula cifrado: (x - 65 + n)% 26 + 65 (SE SUMA al ASCII)
        if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 90) {
          stringCifrado += string[i];
        } else {
          let cifrado = ((string.charCodeAt(i) - 65 + offset) % 26) + 65; // x es el string en ascii, n es el offset (numero de desplazamientos)
          stringCifrado += String.fromCharCode(cifrado); // se concatena el valor de ascii revertido a caracter al resultado
        }
    }
    return stringCifrado;
  },
  decode: function (offset, string) {
    string = string.toUpperCase();
    let stringCifrado = '';
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 90) {
        stringCifrado += string[i];
      } else {
        let cifrado = ((string.charCodeAt(i) - 65 - offset) % 26) + 65;
        stringCifrado += String.fromCharCode(cifrado);
      }
    }
    return stringCifrado;
  }
};

