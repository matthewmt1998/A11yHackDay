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

    $('#a11y_id_main').removeClass('shakeyText');

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

