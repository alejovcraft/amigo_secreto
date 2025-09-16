// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let tusamigos=[];



let botonagregar=document.querySelector(".button-add");
function agregarAmigo(){
    let amigos=document.getElementById("amigo").value;
    if(amigos==""){
        alert("debe poner un amigo porfavor :D")
    }
    else{
        tusamigos.push(amigos);
        console.log(tusamigos);
        monstrarlista();
        clear();
    }
}

function clear(){
    dato=document.getElementById("amigo").value="";
}
function monstrarlista(){
let listaamigos=document.getElementById("listaAmigos");
listaamigos.innerHTML="Tu listado de amigos:";
    let contador=0
    while(contador<tusamigos.length){
    let li = document.createElement("li");
    li.textContent=tusamigos[contador];
    listaamigos.appendChild(li);
    contador++;
    }
}
function sortearAmigo(){
    if(tusamigos==""){
        alert("debes ingresar minimo un amigo");
    }
    else{
        let indice = Math.floor(Math.random() * tusamigos.length);
        let ganador = tusamigos[indice];

         let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${ganador}</strong></li>`;
    }
}
