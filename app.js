// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let tusamigos=[];

function agregarAmigo(){
    dato=document.getElementById("amigo").value;
    if(dato==""){
        alert("debe poner un amigo porfavor :D")
    }
    else{
        tusamigos.push(dato);
        console.log(tusamigos);
        clear();

    }
}

function clear(){
    dato=document.getElementById("amigo").value="";
}
function recorrerarray(){
    contador=0;
    while(contador>tusamigos.length-1){
        document.getElementById("listaAmigos").value=<li>tusamigos[contador]</li>
        contador++;
    }
}