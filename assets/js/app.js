$(document).ready(function () {
    console.log("ready!");

    $('[data-toggle="tooltip"]').tooltip();
    console.log("holaaaaa boton")

    $(window).scroll(function () {
        if ($("#navbar").offset().top > 56) {
            $("#navbar").addClass("navbar-color");
        } else {
            $("#navbar").removeClass("navbar-color");
        }
    });

    /*Tooltip a iconos de sección quiénes somos */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    

    

  });