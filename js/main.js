$(function() {
    var fonts = [
        'monospace',
        //'Source Code Pro',
        //'Consolas',
        //'Ubuntu Mono',
        //'Inconsolata-g',
        //'Inconsolata',
        'Monaco',
        //'DejaVu Sans Mono',
        //'Anonymous Pro',
        'Menlo',
        //'Envy Code R',
        //'Droid Sans Mono',
        //'Pragmata Pro',
        //'Liberation Mono',
        //'Monofur',
        //'Terminus',
        //'Lucida Console',
        //'Input',
        'Andale Mono'
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

        console.log('select font:', item.attr('value'));

        $('code, pre').css('font-family', font);
    });

});
