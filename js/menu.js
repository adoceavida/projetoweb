$(function () {
    $('#menuHome').mouseover(function(){
        $('#menuHome').css("background-color", "#CCCCCC");
        $('#menuHome').css("border-top-style", "solid");
        $('#menuHome').css("border-bottom-style", "solid");
        $('#menuHome').css("color", "white");
        $('#menuHome').css("text-shadow", "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue");
    });
    $('#menuHome').mouseout(function(){
        $('#menuHome').css("background-color", "");
        $('#menuHome').css("border-top-style", "");
        $('#menuHome').css("border-bottom-style", "");
        $('#menuHome').css("color", "");
        $('#menuHome').css("text-shadow", "");
    });
    
    $('#menuSobreNos').mouseover(function(){
        $('#menuSobreNos').css("background-color", "#CCCCCC");
    });
    $('#menuSobreNos').mouseout(function(){
        $('#menuSobreNos').css("background-color", "");
    });
    
    $('#menuBolosDoces').mouseover(function(){
        $('#menuBolosDoces').css("background-color", "#CCCCCC");
    });
    $('#menuBolosDoces').mouseout(function(){
        $('#menuBolosDoces').css("background-color", "");
    });
    
    $('#menuLocalizacao').mouseover(function(){
        $('#menuLocalizacao').css("background-color", "#CCCCCC");
    });
    $('#menuLocalizacao').mouseout(function(){
        $('#menuLocalizacao').css("background-color", "");
    });
    
    $('#menuContato').mouseover(function(){
        $('#menuContato').css("background-color", "#CCCCCC");
    });
    $('#menuContato').mouseout(function(){
        $('#menuContato').css("background-color", "");
    });
});