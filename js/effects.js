
function effectNone() {
}

function effectSurface() {
    $('#a11y_id_main').addClass('shakeyText');
}

function effectPhonological() {
    var x = document.createElement('script');
    x.src = 'js/wordScrambler.js';
    document.getElementsByTagName("head")[0].removeChild(x);
}

function effectVisual() {
    var x = document.createElement('script');
    x.src = 'js/wordScrambler.js';
    document.getElementsByTagName("head")[0].appendChild(x);
}

function effectDyscalculia() {
}
