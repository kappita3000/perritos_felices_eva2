$(document).ready(function () {
    //Validacion Inicio Sesion
    $("#si").on("input", function () {
        if($("#si").val().indexOf('@', 0) == -1 || $("#si").val().indexOf('.', 0) == -1) {
            $("#mesi").html("El Email es incorrecto!");
            return false;
        }

        $("#mesi").html("");
    });
    $("#no").on("input", function () {
        if ($("#no").val().length < 8) {
            $("#mepass").html("La Contraseña tiene que tener 8 caracteres!");
        } else {
            $("#mepass").html("");
        }
    });

});

$(document).ready(function () {
    //Validacion Inicio Sesion
    $("#si2").on("input", function () {
        if($("#si2").val().indexOf('@', 0) == -1 || $("#si2").val().indexOf('.', 0) == -1) {
            $("#mesicreacion").html("El Email es incorrecto!");
            return false;
        }

        $("#mesicreacion").html("");
    });
    $("#no2").on("input", function () {
        if ($("#no2").val().length < 8) {
            $("#mepasscreacion").html("La Contraseña tiene que tener 8 caracteres!");
        } else {
            $("#mepasscreacion").html("");
        }
    });

    $("#no3").on("input", function () {
        if ($("#no3").val().length < 8) {
            $("#mepasscreacion2").html("La Contraseña tiene que tener 8 caracteres!");
        } else {
            $("#mepasscreacion2").html("");
        }
    });
});