function show ( ed, file ) {
	url = 'projects.html?ed=' + ed + '&file=' + file;
	rightSide ( url );
}

function job ( job, file ) {
	url = 'projects.html?job=' + job + '&file=' + file;
	rightSide ( url );
}

function rightSide ( url ) {	
	html = $.ajax({	
			url: url,	
			cache: false,	
			success: function ( data ) {	
					var result = $('<div/>').append( data ).find( '#data' ).html();	
					$( '#rightSide' ).html( result );	
				}	
		});	
}