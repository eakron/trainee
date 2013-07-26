$(function () {
    var changeColor = function () {
        var rainbowcolors = [
            'pink',
            'bluegreen',
            'purple',
            'lightgreen',
            'magnus',
            'butteryellow',
            'slajmgreen',
            'violpurple',
            'stina',
            'elephant',
            'panda',
            'labradoodle',
            'dog',
            'palecat'
        ];
        var $rainbow = $('.rainbow');
        $rainbow.removeClass();
        var colorclass = Math.floor(Math.random() * rainbowcolors.length);
        $rainbow.addClass("rainbow").addClass(rainbowcolors[colorclass]);
    };

    window.rainbow = {
        changeColor: changeColor
    };
});
