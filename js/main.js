
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
        localStorage.setItem(DatoGlobal.variables.nombre.val(), DatoGlobal.variables.comentario.val());
        DatoGlobal.guardarDatos();

    },
    
    guardarDatos: function(){
        for(let comentario in localStorage){
            let dato1 = [comentario];
            $('#container').append ( `<div class ='coment'>
                                      <h2> ${comentario} </h2>
                                      <p>  ${dato1} </p></div>`);
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
