$(document).ready(function() 
{
    $('#green').parent().append('<div id="greentab" class="tabItem"></div>');
    $('#pink').parent().append('<div id="pinktab" class="tabItem"></div>');
    $('#blue').parent().append('<div id="bluetab" class="tabItem"></div>');
    $('#orange').parent().append('<div id="orangetab" class="tabItem"></div>');

	$('#green').addClass("tabbidContent");
	$('#pink').addClass("tabbidContent");
	$('#blue').addClass("tabbidContent");
	$('#orange').addClass("tabbidContent");
	
    
    $(".tabItem").mouseenter (function(){
       $(this).stop().animate({width: 175}, 140);
       $(this).children().animate({width: 175}, 140);
    });

    $(".tabItem").mouseleave (function(){
       $(this).stop().animate({width: 120}, 300);
    });
    
    $('#closeWarning').click(function(){
        $('.msg').fadeOut('slow');
    });
    
    $('.grpDetail').click(function(){
        $(this).parent().find('.list').slideToggle();
    });
    
    $('#orangetab').click(function() 
    {		
        var zGreen = $('#greentab').css("z-index");        
        var zBlue = $('#bluetab').css("z-index");        
        var zPink = $('#pinktab').css("z-index");        
        var zOrange = $('#orangetab').css("z-index");
        
        
        if(zGreen > zOrange)
            $('#greentab').css("z-index",(zGreen - 1));
        if(zBlue > zOrange)
            $('#bluetab').css("z-index",(zBlue - 1));
        if(zPink > zOrange)
            $('#pinktab').css("z-index",(zPink - 1));
        
        $(this).css("z-index","4");
        
        
        $('#green').css("z-index",$('#greentab').css("z-index"));
        $('#blue').css("z-index",$('#bluetab').css("z-index"));
        $('#pink').css("z-index",$('#pinktab').css("z-index"));
        $('#orange').css("z-index",$('#orangetab').css("z-index"));
        
        //shake effect to clarify what tab yee switched too
        $('#orange').addClass('rumble');
        setTimeout(function() {
            $('#orange').removeClass('rumble');
        }, 300);
        
        $('#green').css("-webkit-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-moz-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-o-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-ms-transform", "translate(10px) rotate(1deg)");
        
        $('#blue').css("-webkit-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-moz-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-o-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-ms-transform", "translate(10px) rotate(2deg)");
        
        $('#pink').css("-webkit-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-moz-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-o-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-ms-transform", "translate(10px) rotate(-3deg)");
        
        $('#orange').css("-webkit-transform", "translate(10px) rotate(0deg)");
        $('#orange').css("-moz-transform", "translate(10px) rotate(0deg)");
        $('#orange').css("-o-transform", "translate(10px) rotate(0deg)");
        $('#orange').css("-ms-transform", "translate(10px) rotate(0deg)");
		
		$('#orange').children().hide();
    });
    
    
    
    //NEED TO LEARN HOW TO CODE GOLF IN JQUERY!!!
    $('#bluetab').click(function()
    {   
        var zGreen = $('#greentab').css("z-index");        
        var zBlue = $('#bluetab').css("z-index");        
        var zPink = $('#pinktab').css("z-index");        
        var zOrange = $('#orangetab').css("z-index");
        
        if(zGreen > zBlue)
            $('#greentab').css("z-index",(zGreen - 1));
        if(zOrange > zBlue)
            $('#orangetab').css("z-index",(zOrange - 1));
        if(zPink > zBlue)
            $('#pinktab').css("z-index",(zPink - 1));
        
        $(this).css("z-index","4");
        
        
        $('#green').css("z-index",$('#greentab').css("z-index"));
        $('#blue').css("z-index",$('#bluetab').css("z-index"));
        $('#pink').css("z-index",$('#pinktab').css("z-index"));
        $('#orange').css("z-index",$('#orangetab').css("z-index"));
        
        $('#blue').addClass('rumble');
        setTimeout(function() {
            $('#blue').removeClass('rumble');
        }, 300);
        
        $('#green').css("-webkit-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-moz-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-o-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-ms-transform", "translate(10px) rotate(1deg)");
        
        $('#blue').css("-webkit-transform", "translate(10px) rotate(0deg)");
        $('#blue').css("-moz-transform", "translate(10px) rotate(0deg)");
        $('#blue').css("-o-transform", "translate(10px) rotate(0deg)");
        $('#blue').css("-ms-transform", "translate(10px) rotate(0deg)");
        
        $('#pink').css("-webkit-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-moz-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-o-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-ms-transform", "translate(10px) rotate(-3deg)");
        
        $('#orange').css("-webkit-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-moz-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-o-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-ms-transform", "translate(10px) rotate(5deg)");
    });
    
    
    
    $('#pinktab').click(function()
    {   
        var zGreen = $('#greentab').css("z-index");        
        var zBlue = $('#bluetab').css("z-index");        
        var zPink = $('#pinktab').css("z-index");        
        var zOrange = $('#orangetab').css("z-index");
        
        
        
        if(zGreen > zPink)
            $('#greentab').css("z-index",(zGreen - 1));
        if(zOrange > zPink)
            $('#orangetab').css("z-index",(zOrange - 1));
        if(zBlue > zPink)
            $('#bluetab').css("z-index",(zBlue - 1));
        
        $(this).css("z-index","4");
        
        
        $('#green').css("z-index",$('#greentab').css("z-index"));
        $('#blue').css("z-index",$('#bluetab').css("z-index"));
        $('#pink').css("z-index",$('#pinktab').css("z-index"));
        $('#orange').css("z-index",$('#orangetab').css("z-index"));
        
        $('#pink').addClass('rumble');
        setTimeout(function() {
            $('#pink').removeClass('rumble');
        }, 300);
        
        $('#green').css("-webkit-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-moz-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-o-transform", "translate(10px) rotate(1deg)");
        $('#green').css("-ms-transform", "translate(10px) rotate(1deg)");
        
        $('#blue').css("-webkit-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-moz-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-o-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-ms-transform", "translate(10px) rotate(2deg)");
        
        $('#pink').css("-webkit-transform", "translate(10px) rotate(0deg)");
        $('#pink').css("-moz-transform", "translate(10px) rotate(0deg)");
        $('#pink').css("-o-transform", "translate(10px) rotate(0deg)");
        $('#pink').css("-ms-transform", "translate(10px) rotate(0deg)");
        
        $('#orange').css("-webkit-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-moz-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-o-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-ms-transform", "translate(10px) rotate(5deg)");
    });
    
    
    
    $('#greentab').click(function()
    {   
        var zGreen = $('#greentab').css("z-index");        
        var zBlue = $('#bluetab').css("z-index");        
        var zPink = $('#pinktab').css("z-index");        
        var zOrange = $('#orangetab').css("z-index");
        
        
        if(zPink > zGreen)
            $('#pinktab').css("z-index",(zPink - 1));
        if(zOrange > zGreen)
            $('#orangetab').css("z-index",(zOrange - 1));
        if(zBlue > zGreen)
            $('#bluetab').css("z-index",(zBlue - 1));
        
        $(this).css("z-index","4");
        
        $('#green').css("z-index",$('#greentab').css("z-index"));
        $('#blue').css("z-index",$('#bluetab').css("z-index"));
        $('#pink').css("z-index",$('#pinktab').css("z-index"));
        $('#orange').css("z-index",$('#orangetab').css("z-index"));
        
        $('#green').addClass('rumble');
        setTimeout(function() {
            $('#green').removeClass('rumble');
        }, 300);        
        
        $('#green').css("-webkit-transform", "translate(10px) rotate(0deg)");
        $('#green').css("-moz-transform", "translate(10px) rotate(0deg)");
        $('#green').css("-o-transform", "translate(10px) rotate(0deg)");
        $('#green').css("-ms-transform", "translate(10px) rotate(0deg)");

        $('#blue').css("-webkit-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-moz-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-o-transform", "translate(10px) rotate(2deg)");
        $('#blue').css("-ms-transform", "translate(10px) rotate(2deg)");

        $('#pink').css("-webkit-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-moz-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-o-transform", "translate(10px) rotate(-3deg)");
        $('#pink').css("-ms-transform", "translate(10px) rotate(-3deg)");

        $('#orange').css("-webkit-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-moz-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-o-transform", "translate(10px) rotate(5deg)");
        $('#orange').css("-ms-transform", "translate(10px) rotate(5deg)");
    });
});