

$(document).ready(function () {
    $("#formButton").click(function () {
        $(this).addClass('d-none')
        $("#contact-section form").addClass('d-none');
        $("#formSpinner").removeClass('d-none');
        setTimeout(
            function () {
                $("#formSpinner").addClass('d-none');
                $("#formMessage").removeClass('d-none');
            }, 800);
    });

    $("#formMessButton").click(function () {
        $("#formButton").removeClass('d-none');
        $("#contact-section form").removeClass('d-none');
        $("#formSpinner").addClass('d-none');
        $("#formMessage").addClass('d-none');
    });
    window.sr = ScrollReveal();
    sr.reveal('.aboutMeText', {
        duration: 1300,
        origin: 'bottom',
        distance: '100px'
    });
    sr.reveal('.item1', {
        duration: 1200,
        origin: 'right',
        distance: '100px'
    });
    sr.reveal('.item2', {
        duration: 1200,
        delay: 100,
        origin: 'right',
        distance: '100px'
    });
    sr.reveal('.item3', {
        duration: 1200,
        delay: 200,
        origin: 'right',
        distance: '100px'
    });

    sr.reveal('.card1', {
        duration: 1000,
        origin: 'left',
        distance: '50px'
    });
    sr.reveal('.card2', {
        duration: 1000,
        delay: 100,
        origin: 'right',
        distance: '50px'
    });
    sr.reveal('.card3', {
        duration: 1000,
        delay: 200,
        origin: 'left',
        distance: '50px'
    });
    sr.reveal('.card4', {
        duration: 1000,
        delay: 300,
        origin: 'right',
        distance: '50px'
    });

    sr.reveal('.projectTable', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
    });

    sr.reveal('.contact-inner', {
        duration: 1000,
        origin: 'top',
        distance: '50px'
     
    });

});