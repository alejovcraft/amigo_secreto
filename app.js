// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let tusamigos=[];

let amigo=document.getElementById("amigo").value;
let listaamigos=document.getElementById("listaAmigos").value;
let botonagregar=document.querySelector(".button-add");
function agregarAmigo(){
    if(amigo==""){
        alert("debe poner un amigo porfavor :D")
    }
    else{
        tusamigos.push(dato);
        console.log(tusamigos);
        clear();
    }
}S

function clear(){
    dato=document.getElementById("amigo").value="";
}
function monstrarlista(){
    contador=0
    while(contador>tusamigos.length-1){
        document.getElementById("listaAmigos").value=<li>tusamigos[contador]</li>
        contador++;
    }
}

botonagregar.addEventListener("click",agregarAmigo);