const textArea = document.getElementById("texto-original");
const mensaje = document.getElementById("texto-encriptado");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".copiar");

function encriptar() {
  let textoOriginal = textArea.value;
  let textoEncriptado = encriptarTexto(textoOriginal);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar() {
  let textoEncriptado = textArea.value; // Ahora toma el texto del textarea original
  let textoDesencriptado = desencriptarTexto(textoEncriptado);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function encriptarTexto(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i].toLowerCase();
    switch (caracter) {
      case "e":
        textoEncriptado += "enter";
        break;
      case "i":
        textoEncriptado += "imes";
        break;
      case "a":
        textoEncriptado += "ai";
        break;
      case "o":
        textoEncriptado += "ober";
        break;
      case "u":
        textoEncriptado += "ufat";
        break;
      default:
        textoEncriptado += caracter;
    }
  }
  return textoEncriptado;
}

function desencriptarTexto(texto) {
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}

function copiarTexto() {
  mensaje.select();
  document.execCommand("copy");
}


function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = ""; 
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);