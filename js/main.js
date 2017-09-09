
const DatoGlobal  = {
    variables:  {
        nombre: undefined,
        comentario: undefined
    },
    inicio: function () {
        DatoGlobal.variables.nombre =   $('#clave');
        DatoGlobal.variables.comentario =   $('#valor');

        DatoGlobal.guardar ();
        DatoGlobal.recoverData();
    },

    agregarDatos: function (event) {
        localStorage[DatoGlobal.variables.nombre.val()] = DatoGlobal.variables.comentario.val();
        $('#container').empty();
        DatoGlobal.recoverData();

    },
    
    recoverData: function(){
        for(let clave in localStorage){
            $('#container').append ( `<div class ='comentario'>
                                      <h2> ${clave} </h2>
                                      <p>${localStorage[clave]}</p></div>`);
         $('#clave').val("");
         $('#valor').val("");
        }
    },

    limpiarDatos: function (event) {
        localStorage.clear();
        $('#container').empty();
    },

     guardar: function () {
        $('#guardar').click (DatoGlobal.agregarDatos);
        $('#limpiar').click (DatoGlobal.limpiarDatos) ;
    },

};
$(document).ready ( DatoGlobal.inicio );


/*aquí va tu código
function mostrar(){
	var guardado= document.getElementById("guardar");
	guardado.addEventListener("click", guardarDatos);
	guardarDatos();
};
function guardarDatos(){
	var dato1 = document.getElementById("clave").value;
	var dato2 = document.getElementById("valor").value;
	localStorage.setItem(dato1, dato2);
	var contenedor = document.getElementById("ale");
	    contenedor.innerHTML= ""; 

	for( let i= 0; i < localStorage.length; i++){
		 var clav= localStorage.key(i); 
		 var value = localStorage.getItem(clav);

		 var divcito= document.createElement("div");
		     divcito.setAttribute("class", "comentario");        
         var nombre = document.createElement("h2");
         var valor1= document.createTextNode(clav);
         var comentario= document.createElement("p");
         var valor2 = document.createTextNode(value);
         nombre.appendChild(valor1);
         comentario.appendChild(valor2);
         divcito.appendChild(nombre);
         divcito.appendChild(comentario);
         contenedor.appendChild(divcito);
         document.getElementById("clave").value= "";
         document.getElementById("valor").value= "";
     };
};    
var limpiarDatos = document.getElementById("limpiar"); 
    limpiarDatos.addEventListener("click", function(){ 
    	localStorage.clear();
    	ale.innerHTML= "";
    });
mostrar();
*/