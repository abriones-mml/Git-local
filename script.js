$(document).ready(function() {
    $('#estadistica').DataTable( {
      language: {
        "decimal":        "",
        "emptyTable":     "No hay datos",
        "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
        "infoEmpty":      "Mostrando 0 a 0 de 0 registros",
        "infoFiltered":   "(Filtro de _MAX_ total registros)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Ver _MENU_ registros",
        "loadingRecords": "Cargando...",
        "processing":     "Procesando...",
        "search":         "Buscar:",
        "zeroRecords":    "No se encontraron coincidencias",
        "paginate": {
          "first":      "Primero",
          "last":       "Ultimo",
          "next":       "Sig",
          "previous":   "Ant"
        },
        "aria": {
          "sortAscending":  ": Activar orden de columna ascendente",
          "sortDescending": ": Activar orden de columna desendente"
        }
      }
    } );
} );

///////////////////////////////////////////////////
//Función para validación formulario de contacto//
//////////////////////////////////////////////////

function validarcontacto() 
    {
      let x = document.forms["formcontacto"]["nombre"].value;
      let y = document.forms["formcontacto"]["email"].value;
      let z = document.forms["formcontacto"]["mensaje"].value;

      //todo vacío
      if ((x || y || z) == "") {
        alert("Todos los campos están vacíos!");
        return false;
      }
      // Inicio Nombre
      if ((x == "") && (y !== "") && (z !== "")) {
        alert("Ingresa Nombre");
        return false;
      }
      else {
        if ((x == "") && (y == "") && (z !== "")) {
          alert("Ingresa Nombre y Email ");
          return false;
        }
        if ((x == "") && (y !== "") && (z == "")) {
          alert("Ingresa Nombre y Mensaje");
          return false;
        }
      }
      //Fin Nombre

      // Inicio Email
      if ((x !== "") && (y == "") && (z !== "")) {
        alert("Ingresa Email");
        return false;
      }
      else {
        if ((x == "") && (y == "") && (z !== "")) {
          alert("Ingresa Nombre y Email ");
          return false;
        }
        if ((x !== "") && (y == "") && (z == "")) {
          alert("Ingresa Email y Mensaje");
          return false;
        }
      }
      //Fin Email

      // Inicio mensaje
      if ((x !== "") && (y !== "") && (z == "")) {
        alert("Ingresa Mensaje");
        return false;
      }
      else {
        if ((x == "") && (y !== "") && (z == "")) {
          alert("Ingresa Nombre y Mensaje ");
          return false;
        }
        if ((x !== "") && (y == "") && (z == "")) {
          alert("Ingresa Email y Mensaje");
          return false;
        }
      }
      //Fin mensaje


    }

    