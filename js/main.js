
const DatoGlobal  = {
    variables:  {
        nombre: undefined,
        comentario: undefined
    },
    inicio: function () {
        DatoGlobal.variables.nombre =   $('#clave');
        DatoGlobal.variables.comentario =   $('#valor');

        DatoGlobal.guardar ();
        DatoGlobal.guardarDatos();
    },

    agregarDatos: function (event) {
        localStorage[DatoGlobal.variables.nombre.val()] = DatoGlobal.variables.comentario.val();
        DatoGlobal.guardarDatos();

    },
    
    guardarDatos: function(){
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
