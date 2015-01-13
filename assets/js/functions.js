$(document).ready(function(){
  
  $('#chat-trigger').click(function(){
    $('#main').toggleClass('chat-visible');
  });

  $(window).resize(function(){
    if($(window).width() > 1340){
      $('#main').addClass('chat-visible');
    } else {
    	$('#main').removeClass('chat-visible');
    };
  });

  //Mantain aspect ratio

	var a_r = 1.1143;
	var width = $('.module').width(); 
	$('.module').css("height", width / a_r);

	$(window).resize(function(){
		var a_r = 1.1143;
		var width = $('.module').width(); 
		$('.module').css("height", width / a_r);
	});
  
});





/*
function height(object1, object2) {
  if($(object1).height() > $(object2).height) {} 
}
///////
object1 = #main ;   object2 = 'body'
///////
height('#main', 'body')

}

*/