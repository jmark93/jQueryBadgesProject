$(function() {
	
$.ajax({
	url: 'https://www.codeschool.com/users/jmark93/.json',
  	dataType: 'jsonp',
  	success: function(response) {
		$.each(response, function(i) {
			var favorite = $('.favorite-' + index);
			favorite.find('p').html(city.name);
			favorite.find('img')
				.attr('src', city.image);
	});

};
	//https://www.codeschool.com/projects/use-jquery-to-fetch-and-show-code-school-badges-using-ajax/build#answer-video
    

