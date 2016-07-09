$(document).ready(function() {
	$('#search-button').click(function() {
		getResults()
	})

	$('#search-value').keypress(function(e) {
		if (e.which === 13) {
			getResults()
			return false
		}
	})

	function getResults() {
		$('.results').empty()
		var params = $('#search-value').val()
		$.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + params + '&format=json&callback=?', function(data) {
			$.map(data.query.search, function(data) {
				var link = data.title.replace(/\s/g, "_")
				$('.results').append("<div class='result-containers'><a href=https://en.wikipedia.org/wiki/" + link + " target='_blank'><h3>" + data.title + "</h3></a><br><p>" + data.snippet + "</p></div>")
			})
		})
	}
})
