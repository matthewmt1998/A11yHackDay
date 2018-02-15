var doScramble = true;

function effectNone() {
    setScramble(false);
}

function effectSurface() {
    $('#a11y_id_main').addClass('shakeyText');
    setScramble(false);
}

function effectPhonological() {
    var x = document.createElement('script');
    x.src = 'js/wordScrambler.js';
    document.getElementsByTagName("head")[0].removeChild(x);
    setScramble(false);
}

function effectVisual() {
    var x = document.createElement('script');
    x.src = 'js/wordScrambler.js';
    document.getElementsByTagName("head")[0].appendChild(x);
    setScramble(true);
}

function effectDyscalculia() {
    setScramble(false);
}
