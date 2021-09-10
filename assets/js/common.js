$(document).ready(function() {
    $('a.abstract').click(function() {
        if ( $(this).parent().parent().find(".bibtex.hidden").hasClass('open') ) {
            $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        }
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        if ( $(this).parent().parent().find(".abstract.hidden").hasClass('open') ){
            $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        }
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    $('button.btn').removeClass('waves-effect waves-light');
});
