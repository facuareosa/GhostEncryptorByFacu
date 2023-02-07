const textoEncriptar = document.querySelector(".textImput");
const textoEncriptado = document.querySelector(".textOutput");

//La funcion siguiente es la encargada de VALIDAR el texto introducido
function validarTexto(){
    let textoValidado = textoEncriptar.value;
    let condicion = textoValidado.match(/^[a-z ]*$/);

        if (!condicion || condicion.length === 0){
            
            alert("Error!! Solo minusculas y sin caracteres espaciales por favor");
            location.reload();
            return true
        }
}

// La funcion siguiente es la encargada de ENCRIPTAR el texto

function encriptarTexto(){

    let textoEscrito = textoEncriptar.value;
    
    let mensaje = textoEscrito.replaceAll("e" , "enter");
        mensaje = mensaje.replaceAll("i" , "imes");
        mensaje = mensaje.replaceAll("a" , "ai"); 
        mensaje = mensaje.replaceAll("o" , "ober");
        mensaje = mensaje.replaceAll("u" , "ufat");

    textoEncriptado.innerHTML = mensaje
    textoEncriptar.value = ""
}

// La funcion siguiente es la encargada de DESENCRIPTAR el texto

function desencriptarTexto(){

    let textoEscrito = textoEncriptar.value;
   
    let mensaje = textoEscrito.replaceAll("enter" , "e");
        mensaje = mensaje.replaceAll("imes" , "i");
        mensaje = mensaje.replaceAll("ai" , "a"); 
        mensaje = mensaje.replaceAll("ober" , "o");
        mensaje = mensaje.replaceAll("ufat" , "u");

    textoEncriptado.innerHTML = mensaje
    textoEncriptar.value = ""
}

// La funcion siguiente es la encargada de COPIAR el texto

function copiarTexto(){

    let textoCopiado = textoEncriptado;

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(textoCopiado.value);


}

//Atajo con teclas ENCRIPTAR

document.addEventListener("keydown", atajoEncriptar)

function atajoEncriptar(event){

    const teclaPresionada = event.key;
    
    if(event.altKey){
        if (teclaPresionada == "Enter"){
            encriptarTexto()
            }
    }
        
}

//Atajo con teclas DESENCRIPTAR

document.addEventListener("keydown", atajoDesencriptar)

function atajoDesencriptar(event){

    const teclaPresionada = event.key;
    
    if(event.ctrlKey){
        if (teclaPresionada == "Enter"){
            desencriptarTexto()
            }
    }
        
}