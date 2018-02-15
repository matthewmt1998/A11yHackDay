document.getElementById("a11y_id_btn_effect_none").addEventListener("click", effectNone);
document.getElementById("a11y_id_btn_effect_surface").addEventListener("click", effectSurface);
document.getElementById("a11y_id_btn_effect_phonological").addEventListener("click", effectPhonological);
document.getElementById("a11y_id_btn_effect_visual").addEventListener("click", effectVisual);
document.getElementById("a11y_id_btn_effect_dyscalculia").addEventListener("click", effectDyscalculia);

function effectNone() {
    alert ("Hello World!");
    effectVisualThing("a11y_id_btn_effect_none");
}

function effectSurface() {
    alert ("Hello World!");
    effectVisualThing("a11y_id_btn_effect_surface");
}

function effectPhonological() {
    alert ("Hello World!");
    effectVisualThing("a11y_id_btn_effect_phonological");
    var x = document.createElement('script');
    x.src = 'js/wordScrambler.js';
    document.getElementsByTagName("head")[0].removeChild(x);
}

function effectVisual() {
    alert ("Hello World!");
    var x = document.createElement('script');
    x.src = 'js/wordScrambler.js';
    document.getElementsByTagName("head")[0].appendChild(x);
    effectVisualThing("a11y_id_btn_effect_visual");
}

function effectDyscalculia() {
    alert ("Hello World!");
    effectVisualThing("a11y_id_btn_effect_dyscalculia");
}

function effectVisualThing(id){
    document.getElementsByClassName("nav-link active")[0].classList.remove("active");
    document.getElementById(id).classList.add("active");
}