$('#social').waypoint(function(direction) {
	if (direction === 'down') {
		$('#socialRow').removeClass('fadeOutDown');
		$('#socialRow').addClass('fadeInUp');
	} else {
		$('#socialRow').removeClass('fadeInUp');
		$('#socialRow').addClass('fadeOutDown');
	}
}, { offset: '50%' });

$('#sidebar').waypoint(function(direction) {
	if (direction === 'down') {
		$('#sidebar').addClass('sideFixed');
	} else {
		$('#sidebar').removeClass('sideFixed');
	}
});

function getYoutubeID(url) {
	// var mat = "[\\?&]v=([^&#]*)";
	var mat = "vi/([^&#]*)/";
    var id = url.match(mat);
    id = id[1];
    // console.log(id);
    return id;
}

// $('.video').on('click', function() {
//     var id = getYoutubeID( this.childNodes[0].href );
//     $(this).html('<iframe width="560" height="315" src="//www.youtube.com/embed/' +id+ '?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
// });
$('a.youtube').each(function() {
    var id = getYoutubeID( this.href );
    this.id = id;
    var thumb_url = "http://img.youtube.com/vi/"+id+"/mqdefault.jpg";
    var link = "<a style='z-index:9999;' href='http://youtube.com/watch?v="+id+"' target='_blank'><button>Visit Video</button></a>";
    $(this).html('<img data-caption="'+link+'" src="'+thumb_url+'" />');
});