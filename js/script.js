$(window).load(function(){
    $('#modsDetail').hide();
});
$(window).ready(function(){
    $('.modal-trigger').leanModal();
    $('.materialboxed').materialbox();
    $('.modBox').click(seeDetailMod);
    $(window).keyup(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '27'){
            retourMod();
        }
    });
    $('#backMod').click(retourMod);

});

function seeDetailMod(){
    $("#modsList").removeClass("fadeInLeft");
    $("#modsList").addClass("fadeOutLeft");
    $('#modsDetail').show();
    $('#modsDetail').removeClass("fadeOutRight");
    $('#modsDetail').addClass("fadeInRight");
}
function retourMod(){
    $("#modsList").removeClass("fadeOutLeft");
    $("#modsList").addClass("fadeInLeft");
    $('#modsDetail').removeClass("fadeInRight");
    $('#modsDetail').addClass("fadeOutRight");
    $('#modsDetail').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ if($('#modsDetail').hasClass("fadeOutRight")){$('#modsDetail').hide();}});
}
