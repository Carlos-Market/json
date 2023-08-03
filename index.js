/*var app = {};
var miCallback = function(datos){
    console.log(datos);
};
document.getElementById("resultados").innerHTML = "dentro";*/

document.getElementById("boton").addEventListener('click', cargarJSON);

function cargarJSON(){
    fetch('api.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(empleado){
               html += `
               <li>${empleado.especie} ${empleado.telefono}</li>`   
            });
            document.getElementById('resultado').innerHTML = html;
        })
}