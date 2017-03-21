$(window).load(function(){
});
$(window).ready(function(){
    $('.modal-trigger').leanModal();
    $('.materialboxed').materialbox();

    $('.modBox').click(function(){
        $("#modsList").removeClass("fadeInLeft");
        $("#modsList").addClass("fadeOutLeft");
        $('#modsDetail').removeClass("fadeOutRight");
        $('#modsDetail').addClass("fadeInRight");
    });
    $(window).keyup(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '27'){
            $("#modsList").removeClass("fadeOutLeft");
            $("#modsList").addClass("fadeInLeft");
            $('#modsDetail').removeClass("fadeInRight");
            $('#modsDetail').addClass("fadeOutRight");
        }
    });

});
