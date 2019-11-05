window.cipher = {
  
  encode: function (numeroDesplazamientos, string) {
    
    
    string = string.toUpperCase() //mayus

    let stringCifrado = ''

    // obtener número ascii por cada letra de nuestra cadena
    for (let i = 0; i < string.length; i++) {
      //alert(string[i] + ' es: ' + string.charCodeAt(i))
      // formula para convertir a caracter cifrado 
      // (x - 65 + n)% 26 + 65
      // x = string.charCodeAt(i)
      // n = offset 
      let x = string.charCodeAt(i);
      //let n = offset

      let cifrado = ((x - 65 + numeroDesplazamientos) % 26) + 65;
     
      // Convertir de ascii a caracter
      let nuevoCifrado = String.fromCharCode(cifrado)
      // alert(cifrado);
      
      //stringCifrado = stringCifrado + nuevoCifrado

      if (x == 32){
        stringCifrado += " ";

      }else{
        stringCifrado+= nuevoCifrado;
      }
    } 

    return stringCifrado
    
  },

  decode: function (offset, string) {
    //alert('decode')
  }
  // cipher.decode

}


    