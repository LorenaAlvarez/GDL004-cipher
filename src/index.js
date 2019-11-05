//alert();

const botonGenerar = document.getElementById('generar')
    generar.addEventListener('click', function() {
      // Se obtiene el valor del elemento con el textarea que tiene el id ="origen"
    let textoOrigen = document.getElementById('origen').value
      // Se obtiene el valor de numero de desplazamientos, con el elemento que tiene el id "numeroDesplazamientos"
    let numeroDesplazamientos = document.getElementById('numeroDesplazamientos').value
       // convertir de string a numero
    numeroDesplazamientos = parseInt(numeroDesplazamientos)

      // obtener en variable resultado lo que retorne la llamada a la función decode del objeto cipher. A esta función se le pasa como parametros los dos valores, del text area origen, y del numero desplazamientos
    let resultado = cipher.encode(numeroDesplazamientos, textoOrigen)

      // Obtener al elemento que tiene el id destino
    let destino = document.getElementById('destino')
  
      // Agregar el resultado al textarea destino asignandole su valor
    destino.value = resultado;
})

