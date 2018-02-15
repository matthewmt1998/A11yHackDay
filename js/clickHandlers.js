$(document).ready(function() {

    $('#a11y_id_btn_effect_none').click(function() {
        handleEffectClick(this.id);
    });

    $('#a11y_id_btn_effect_surface').click(function() {
        handleEffectClick(this.id);
    });

    $('#a11y_id_btn_effect_phonological').click(function() {
        handleEffectClick(this.id);
    });

    $('#a11y_id_btn_effect_visual').click(function() {
        handleEffectClick(this.id);
    });

    $('#a11y_id_btn_effect_dyscalculia').click(function() {
        handleEffectClick(this.id);
    });
});

function handleEffectClick(id) {
    $('#a11y_id_btn_effect_none').removeClass('active');
    $('#a11y_id_btn_effect_surface').removeClass('active');
    $('#a11y_id_btn_effect_phonological').removeClass('active');
    $('#a11y_id_btn_effect_visual').removeClass('active');
    $('#a11y_id_btn_effect_dyscalculia').removeClass('active');

    $('#'+id).addClass('active');

    addEffect(id);
}

function addEffect(id) {
    switch (id) {
        case 'a11y_id_btn_effect_none':
        effectNone();
        break;
        case 'a11y_id_btn_effect_surface':
        effectSurface();
        break;
        case 'a11y_id_btn_effect_phonological':
        effectPhonological();
        break;
        case 'a11y_id_btn_effect_visual':
        effectVisual();
        break;
        case 'a11y_id_btn_effect_dyscalculia':
        effectDyscalculia();
        break;
    }
}

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
