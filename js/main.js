$(function() {
    var fonts = [
        'monospace',
        'Courier New',
        'Source Code Pro',
        'Monaco',
        'Menlo',
        'Droid Sans Mono',
        'Andale Mono',
        'PT Mono',
        'Anonymous Pro',
        'Inconsolata',
        'Ubuntu Mono'

        //'Consolas',
        //'DejaVu Sans Mono',
        //'Envy Code R',
        //'Pragmata Pro',
        //'Liberation Mono',
        //'Monofur',
        //'Terminus',
        //'Lucida Console',
        //'Input',

    ];

    _.forEach(fonts, function(font, idx) {
        var checked = idx === 0 ? ' checked' : '';

        $('.fonts-list').append([
            '<label class="font-label">',
                '<input class="font-input" type="radio" name="font" value="'+ font +'"'+ checked +'>',
                font,
            '</label>'
        ].join('\n'));
    });

    $('.font-input:eq(0)').focus();

    $('.font-input').on('change', function() {
        var item = $(this),
            font = item.attr('value');

        console.log('select font:', font);

        if (font === 'monospace') {
            // hack for monospace height http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/
            font += ', ' + font;
        }

        $('code, pre').css('font-family', font);
    });

});
