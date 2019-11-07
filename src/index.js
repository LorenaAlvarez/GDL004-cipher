// modificar el radio para que cambie de "cifrar" a "descifrar"
// añadir listener a radio buttons
let radios = document.getElementsByName('accion') 

// Por cada radio button se añade un eventListener
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() { 
    if (radios[i].value === 'cifrar') { // Si el radio seleccionado es igual a cifrar
      // Se cambia el texto de los titulos de las instrucciones
      document.getElementById('titulo_origen').innerText = 'Ingresa tu mensaje a cifrar:'
      document.getElementById('titulo_destino').innerText = 'Tu mensaje cifrado:'
    } else { // Si el radio seleccionado es igual a descifrar
      // Se cambia el texto de los titulos de las instrucciones
      document.getElementById('titulo_origen').innerText = 'Ingresa tu mensaje a descifrar:'
      document.getElementById('titulo_destino').innerText = 'Tu mensaje descifrado:'
    }
  })
}

const botonGenerar = document.getElementById('generar')
generar.addEventListener('click', function() {
  
let textoOrigen = document.getElementById('origen').value
let numeroDesplazamientos = document.getElementById('numeroDesplazamientos').value
  // cambiar de string a int (números)
numeroDesplazamientos = parseInt(numeroDesplazamientos)

let resultado = '' // variable que contendrá el resultado
if (document.querySelector('input[name="accion"]:checked').value === 'cifrar') { 
  resultado = cipher.encode(numeroDesplazamientos, textoOrigen)
} else { 
  resultado = cipher.decode(numeroDesplazamientos, textoOrigen)
}
  document.getElementById('destino').value = resultado;
})

document.getElementById('borrar').addEventListener('click', function() {
  document.getElementById('origen').value = ''
  document.getElementById('destino').value = ''
})

document.getElementById('copiar').addEventListener('click', function() {
  document.execCommand('copy', false, document.getElementById('destino').select());
})
