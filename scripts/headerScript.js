(function() {
	$(document).ready(function(){
		$('#searchClick').on('click', function(event){
			var searchContent = document.getElementById('searchContent').value;
			var fromWhere = "search";
			//console.log(searchContent);
			localStorage.setItem("searchContent", searchContent);
			localStorage.setItem("fromWhere", fromWhere);
			window.location.assign("/bubbaLyrics/index.php?action=searchResults");
				
			event.preventDefault();
		});
		$('#searchContent').keypress(function(event){
			if (event.which == 13) {
				var searchContent = document.getElementById('searchContent').value;
				var fromWhere = "search";
				//console.log(searchContent);
				localStorage.setItem("searchContent", searchContent);
				localStorage.setItem("fromWhere", fromWhere);
				window.location.assign("/bubbaLyrics/index.php?action=searchResults");
				
				event.preventDefault();
				return false;
			}
		});
	});
}())