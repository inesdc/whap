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