//var rows = 16;
//var columns = 16;
//var $row = $("<div />", {
//    class: 'row'
//});
//var $square = $("<div />", {
//    class: 'square'
//});

//$(document).ready(function () {
//    //add columns to the the temp row object
//    for (var i = 0; i < columns; i++) {
//        $row.append($square.clone());
//    }
//    //clone the temp row object with the columns to the wrapper
//    for (var i = 0; i < rows; i++) {
//        $("#grid_container").append($row.clone());
//    }
//    $(".square").hover(function() {
//        $(this).css('background-color', 'red')
//    });
//});

var grid = function(option){
    $('#grid_container').html("");
    
    var input = prompt('Type an integer between 1 and 64');
    
    if (input >= 1 && input <= 64) {
        var square_size = $('#grid_container').width()/input;
        
        for(var i = 1; i <= input; i++) {
            for(var j = 1; j <= input; j++) {
                $('#grid_container').append('<div class="grid_square"></div>');
            }
            $('#grid_container').append('<div class="new_row"></div>');
        }
        $('.grid_square').css('width',square_size);
        $('.grid_square').css('height',square_size);
        
        $('.grid_square').mouseenter(function() {
            switch (option) {
                case 1:
                    $(this).css('background-color', 'red');
                    break;
                case 2:
                    var currentOpacity = $(this).css('opacity');
                    if (currentOpacity > 0) {
                        $(this).css('opacity', currentOpacity - 0.2);
                    }
                    break;
                case 3:
                    var randomColor = 'rgb('
                    + (Math.floor(Math.random() * 256)) + ','
                    + (Math.floor(Math.random() * 256)) + ','
                    + (Math.floor(Math.random() * 256)) + ')';
                    $(this).css('background-color', randomColor);
            }
        });
    }
    else {
        alert('Wrong number!');
    }
}