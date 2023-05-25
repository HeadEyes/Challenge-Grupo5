// ENCRIPTACION

const chars = {
  'a': "ai",
  'e': "enter",
  'i': "imes",
  'o': "ober",
  'u': "ufat"
};

function encriptar() {
  let text = document.querySelector(".text-area").value;
  text = text.replace(/[aeiou]/g, (m) => chars[m]);
  return text;
}

document.querySelector(".btn-enc").onclick = () => {
  if (document.querySelector(".text-area").value != "") {
    
    document.querySelector(".div-resultado").style.display = "none";
    document.querySelector(".div-resultado-2").style.display = "flex";

    document.querySelector(".p-traducido").innerHTML = (encriptar());

  } else {
    alert("Debe escribir algo");
  }
};


// DESENCRIPTACION

const palabra = {
  'ai': "a",
  'enter': "e",
  'imes': "i",
  'ober': "o",
  'ufat': "u",
};

function desencriptar() {
  let text = document.querySelector(".text-area").value;
  text = text.replace(/ai|enter|imes|ober|ufat/g, (m) => palabra[m]);
  return text;
}

document.querySelector(".btn-des").onclick = () => {
  if (document.querySelector(".text-area").value != "") {
    
    document.querySelector(".div-resultado").style.display = "none";
    document.querySelector(".div-resultado-2").style.display = "flex";

    document.querySelector(".p-traducido").innerHTML = (desencriptar());

  } else {
    alert("Debe escribir algo");
  }
};



// PORTAPAPELES

document.querySelector(".btn-copiar").onclick = ()=>{
  navigator.clipboard.writeText(document.querySelector(".p-traducido").innerHTML)
  
  console.log('Copiado');
};

